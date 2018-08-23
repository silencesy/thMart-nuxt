import Cookie from 'js-cookie'

export default function ({ $axios, redirect,store }) {
	$axios.onRequest(config => {
		if (store.state.token) {
			config.headers.TOKEN = store.state.token;
		}
	})
	$axios.onResponse(res=>{
		if (res.data.data.token) {
			Cookie.set('token', res.data.data.token);
		}
	})
	$axios.onError(error => {
		const code = parseInt(error.response && error.response.status)
		if (code === 400) {
			redirect('/login')
		}
	})
}