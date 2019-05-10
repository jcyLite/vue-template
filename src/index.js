import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import vConsole from 'vconsole';

import thank from '../public/tk_components';
Vue.use(thank)

var vconsole = new vConsole();

function install_cordova() {
	if(window.navigator.platform!='Win32'){
		var isAndroid=/Android/.test(navigator.userAgent);
		var isIos =/iPhone/.test(navigator.userAgent);
		Vue.prototype.isAndroid=isAndroid;
		Vue.prototype.isIos=isIos;
		var body=document.getElementsByTagName('body')[0];
		var script=document.createElement('script');
		script.type="text/javascript";
		script.charset="GBK";
		if(isIos){
			script.src="./static/cordova-ios/cordova.js";
		}else if(isAndroid){
			script.src="./static/cordova-android/cordova.js";
		}
		body.appendChild(script);

	}
}
const store = createStore()
const router = createRouter()
const app = new Vue({
	router,
	store,
	mounted() {
//		import('../public/pot_components').then(d => {
//			Vue.use(d.default)
//		})
//		import('../public/tk_components').then(d => {
//			Vue.use(d.default)
//		})
		install_cordova()
	},
	render: h => h(App)
})
app.$mount('#app')