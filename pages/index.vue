<template>

	<div>
		<p>home</p>
		<nuxt-link :to="{name:'user'}">go-user</nuxt-link>
		<p>{{title}}</p>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		async asyncData ({app}) {
			// return axios.post('https://proj6.thatsmags.com/thmartApi/Ads/Home/list')
		 //    .then((res) => {
		 //      return { title: res.data }
		 //    })
		 	const title = await app.$axios.post('https://proj6.thatsmags.com/thmartApi/Ads/Home/list')
  			return { title: title.data }
		},
		// middleware: 'userAuth',
		mounted() {
			
		},
		methods: {

		}
	}
</script>
<style scoped>
	.BaseSwiper img {
		width: 100%;
		display: block;
	}
	.el-carousel__item img {
	    width: 100%;
	  }
  
</style>