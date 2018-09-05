import Cookie from 'js-cookie'

export default function ({ $axios, redirect,store }) {
	// 请求拦截
	$axios.onRequest(config => {
		if (store.state.token) {
			config.headers.TOKEN = store.state.token;
		}
	})
	// 响应拦截
	$axios.onResponse(res=>{
		// if (res.data.code==1 && res.data.data.token) {
		// 	Cookie.set('token', res.data.data.token);
		// 	store.commit('SET_USER',res.data.data.token);
		// }
		// if (res.data.code==1 && res.data.data.nickname) {
		// 	Cookie.set('nickname',res.data.data.nickname);
		// 	Cookie.set('headimgurl',res.data.data.headimgurl);
		// 	store.commit('NICKNAME',res.data.data.nickname);
		// 	store.commit('HEADIMGURL',res.data.data.headimgurl);
		// }
	})
	// 网络错误统一处理
	$axios.onError(error => {
		const code = parseInt(error.response && error.response.status)
		if (code === 400) {
			redirect('/login')
		}
	})
}