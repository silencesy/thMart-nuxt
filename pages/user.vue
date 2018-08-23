<template>
	<div>
		<div>user</div>
		<p>{{project}}</p>
		<p>{{$store.state.token}}</p>
		<p>{{name}}</p>
		<p>{{dat}}</p>
		<button @click="sss">123123</button>
	</div>
</template>
<script>
	// import axios from '~/plugins/axios'
	// import store from 'vuex'
	// import utils from '~/utils/utils'
	export default {
		data(){
		     return {
		        name:'hello World',
		        dat: ''
		     }
		  },
		middleware: 'userAuth',
		async asyncData ({app}) {
			// var token;
			// if (process.server) {
			// 	// return {
			// 		console.log(1)
			//       token = utils.getcookiesInServer(req).token
			//     // }
			// } else {
			// 	// return {
			// 		console.log(2)
			//       token = utils.getcookiesInClient('token')
			//     // }
			// }
			// console.log(store.state.token);
			// axios.defaults.headers.post['token'] = store.state.token;
			// console.log(token)
			console.log(process.client);
			let data=await app.$axios.post('https://proj6.thatsmags.com/thmartApi/Cart/list')

      		return {project: data.data}
		},
		methods: {
			sss() {
				var that = this;
				// that.$axios.setHeader('token', that.$store.state.token)
				that.$axios.post('https://proj6.thatsmags.com/thmartApi/Cart/list').then(res=> {
					console.log(res);
					that.dat = res
				})
			}
		}
		// asyncData({route, req, res, redirect}) {
		// 	// console.log(utils.getcookiesInServer(req));
		// 	// if (process.server) {
		// 	// 	return {
		// 	//       token: utils.getcookiesInServer(req).token
		// 	//     }
		// 	// } else {
		// 	// 	return {
		// 	//       token: utils.getcookiesInClient('token')
		// 	//     }
		// 	// }
		//      axios.post('https://proj6.thatsmags.com/thmartApi/Ads/Home/list')
		// 	    .then((res) => {
		// 	    	return {
		// 	    		token: res
		// 	    	}
	 //    		})
  // 		}
	}
</script>