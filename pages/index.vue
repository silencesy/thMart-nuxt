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
	
  
</style>