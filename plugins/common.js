import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
var commonJs= {
    install(Vue){
        Vue.prototype.user = {
        	// 设置登录成功之后回跳地址
        	SetComebackAddress: function() {
        		var goBackAddr = window.location.href;
        		localStorage.setItem('goback',goBackAddr);
        	},
        	// 执行回跳地址
        	JumpBackToPage: function() {
        		var address = localStorage.getItem('goback') || null;
        		if (address) {
        			window.location.href = address;
        		} else {
        			window.location.href = 'http://localhost:3000';
        		}
        	}
        };
        
    }
}
Vue.use(commonJs);