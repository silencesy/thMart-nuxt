<template>
	<div>
		<div>
			<input type="text" v-model="name">
		</div>
		<div>
			<input type="password" v-model="password">
		</div>
		<button @click="submitform">提交</button>
		<p>{{token}}</p>
	</div>
</template>
<script>
	import axios from 'axios';
	import Cookie from 'js-cookie'
	export default {
		data() {
			return {
				name: "",
				password: "",
				token: ""
			}
		},
		methods: {
			submitform() {
				var that = this;
				console.log(that.name);
				console.log(that.password);
				axios.post('https://proj6.thatsmags.com/thmartApi/User/mobileLogin',{
					mobile: that.name,
					password: that.password	
				})
			    .then((res) => {
				    that.token = res;
				    if (res.data.code==1) {
				    	Cookie.set('token', res.data.data.token);
				    	that.$router.push('/');
				    	// alert(123);
				    }
	    		})
			}
		},
		// asyncData (context) {
		//     return axios.post('https://proj6.thatsmags.com/thmartApi/Ads/Home/list')
		//     .then((res) => {
		// 	    return { token: res.data }
  //   		})
		// }
	}
</script>
<style scoped>
	
</style>