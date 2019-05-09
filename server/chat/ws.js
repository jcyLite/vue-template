const http=require('http');
const fs=require('fs');
const express=require('express');
const path=require('path');
const resolve=p=>path.resolve(__dirname,p);
const server = http.createServer(app);
var WebSocketServer = require('ws').Server;
var people=0;
var wss = new WebSocketServer({
	server
});
var onLineUsers=[];
function send(client,data){
	data=encryptByDES(JSON.stringify(data),des_key);
	client.send(data)
}
//广播  
wss.broadcast = function broadcast(info) {  
    // debugger;
    var that=this;
//  console.log(this);
    this.clients.forEach(function each(client) {
    	var type=info.type;
    	switch(type){
    		case "youOffLine":
    			if(client.id==info.id){
    				send(client,{
    					emit:'offLine'
    				})
    			}
    			break;
    		case "record":
    			
    			break;
    		case "onLine":
    			if(client.id!=info.to.id){
    				send(client,{
    					emit:'addList',
    					data:{
    						id:info.to.id
    					}
    				})
    			}
    			break;
    		case "offLine":
    			if(client.id!=info.to.id){
    				send(client,{
    					emit:'removeList',
    					data:{
    						id:info.to.id
    					}
    				})
    			}
    			break;
    		case "message":
    			if(client.id==info.to.id){
    				send(client,{
    					emit:'msg',
	     				content:info.mine.content,
	     				type:info.to.type,
	     				id:info.mine.id,
	     				username:info.mine.username,
	     				avatar:info.mine.avatar
    				})
	     		}
    			break;
    		case "addFriend":
    			if(client.id==info.to){
    				send(client,info)
    			}
    			break;
    		case "agree":
    		 if((client.id==info.to)||(client.id==info.from)){
    		 	var filename=resolve("./api/friendList.json");
    		 	 send(client,info) 
    		 	 var result=JSON.parse(fs.readFileSync(filename))
    				result[client.id]=result[client.id]||[];
    				var a=twoChooseOne(client.id,info.to,info.from)
    				for(var key in result[client.id]){
    					if(a==result[client.id][key]){
    						return;
    					}
    				}
    				
    				result[client.id].push(a)
    				fs.writeFileSync(filename, JSON.stringify(result));
    		 }
    		 break;
    		default:break;
    	}	
    });  
};  
function twoChooseOne(a,b,c){
	if(b!=a){
		return b;
	}else if(c!=a){
		return c
	}
}
function remove(arr,val,cc) {
  for(var i=0; i<arr.length; i++) {
    if(arr[i][cc] == val) {
      arr.splice(i, 1);
      break;
    }
  }
}
wss.on('connection', function(ws,abc) {
	var id=abc.url.replace('/platform/ws/','').replace('/as','');
	wss.clients.forEach(function(client){
		if(client.id==id){
			wss.broadcast({
				type:'youOffLine',
				id:client.id
			})
			remove(wss.clients,id,'id');
		}
	})
	ws.id=id;
	var that=this;
	ws.on('message', function(jsonStr,flags) {
		jsonStr=jsonStr||{};
		jsonStr=decryptByDES(jsonStr,des_key);
		console.log('收到一条指令');
		console.log(jsonStr);
		if(jsonStr=='onLine'){
			people++;
			console.log('当前在线人数：'+people+'人');
			var bca=fs.readFileSync(resolve("./api/user.json"))
			var result=eval('('+bca+')');
			for(var key in result){
				if(result[key].id===this.id){
					result[key].status='online'
				}
			}
			var that=this;
			wss.broadcast({
				type:'onLine',
				to:{
					id:that.id
				}
			})
			setTimeout(()=>{
				fs.writeFile(resolve("./api/user.json"),JSON.stringify(result), function (err) {
			   
				});
			},500)
			//同步告诉所有人我登录了
			return;
		}
		if(jsonStr=='record'){
			wss.broadcast({
				type:'record'
			});
			return;
		}
		console.log(jsonStr);
		var info = eval('(' + jsonStr + ')'); 
  		wss.broadcast(info);
	}); 
	ws.on('close',function(){
		people--;
		console.log('收到一条断线指令');
		console.log('当前在线人数：'+people+'人');
		var abc=fs.readFileSync(resolve("./api/user.json"))
		var result=eval('('+abc+')');
		for(var key in result){
			if(result[key].id===this.id){
				result[key].status='offline'
			}
		}
		wss.broadcast({
			type:'offLine',
			to:{
				id:this.id
			}
		})
		setTimeout(()=>{
			fs.writeFile(resolve("./api/user.json"),JSON.stringify(result), function (err) {
			   
			});
		},500)
	})
});
module.exports={server,wss};