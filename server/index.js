const express = require('express');
const fs = require('fs')
const path = require('path');
const http = require('http');
const bodyParser = require("body-parser");
var WebSocketServer = require('ws').Server;
const resolve = (p) => path.resolve(__dirname, p)
var app = express();
const server = http.createServer(app);
var wss = new WebSocketServer({
	server
});
var peoples = [];
var types = {
	message(info, client) {
		if(info.uid != client.uid) {
			client.send(JSON.stringify(info))
		}
	},
	connect(info, client) {
		if(info.uid != client.uid) {
			client.send(JSON.stringify(info))
		}
	}
}
wss.broadcast = function broadcast(info) {
	this.clients.forEach(function each(client) {
		types[info.type] ? types[info.type](info, client) : '';
	})
}

function isJSON(str) {
	if(typeof str == 'string') {
		try {
			var obj = eval('(' + str + ')');
			if(typeof obj == 'object' && obj) {
				return true;
			} else {
				return false;
			}

		} catch(e) {
			console.log('error：' + str + '!!!' + e);
			return false;
		}
	}
}
wss.on('connection', function(ws, abc) {
	ws.on('message', function(jsonStr, flags) {
		console.log(jsonStr)
		jsonStr = jsonStr || '{}'
		if(!isJSON(jsonStr)){
			return console.log('数据不是json格式')
		}
		var j =eval('(' + jsonStr + ')');
		if(j.type == 'connect') {
			this.uid = j.uid;
			peoples.push(j.uid);
		}
		wss.broadcast(j);
	})
	ws.on('close', function() {
//		peoples.splice(peoples.indexOf(this.uid), 1);
	})
})
//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	// res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

function replaceB64(base64Data, i) {
	var a = base64Data.replace(/^data:image\/\w+;base64,/, '');
	var type = base64Data.substring(base64Data.indexOf('/') + 1, base64Data.indexOf(';'));
	var dataBuffer = new Buffer(a, 'base64');
	var name = new Date().getTime();
	var mpath = 'image/' + i + name + '.' + type;
	fs.writeFile(resolve("./" + mpath), dataBuffer)
	return {
		type,
		dataBuffer,
		name,
		mpath
	}
}
//app.use(bodyParser.json({"limit":"50mb"}));
app.use(bodyParser.urlencoded({
	limit: '50mb',
	extended: true,
	parameterLimit: 50000
}));
app.use('/image', express.static(resolve('./image')))
app.use('/sign', bodyParser.json({
	limit: '10mb'
}), function(req, res) {
	var body = req.body;
	var data = body.data;
	replaceB64(data, 'sign')
	res.json('上传成功')
})
app.all('/:viewname?', function(req, res) {
	if(req.params.viewname) {
		var result = JSON.parse(fs.readFileSync(resolve("./api/" + req.params.viewname + ".json")))
		res.status(200)
		res.json(result)
	} else {
		res.json('无数据')
	}
});
server.listen(3334, function() {
	console.log('listening at port 3334')
})