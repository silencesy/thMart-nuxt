<template>
	<div class="shopHome">
		<!-- 轮播图 -->
		<SwiperComponent :swiperData="homeData.figure"/>
		<div class="container">
			<div class="conPic">
				<img src="~static/images/flower.jpg" alt="">
				<img src="~static/images/flower.jpg" alt="">
			</div>
		</div>
	</div>
</template>
<script>
	import SwiperComponent from "~/components/base/Swiper"
	export default {
		layout: 'shopHome',
		data() {
			return {
				
			}
		},
		async asyncData ({app}) {
		 	const homeData = await app.$axios.post('https://proj6.thatsmags.com/thmartApi/Ads/Home/list')
  			return { homeData: homeData.data.data }
		},
		components: {
			SwiperComponent
		},
		mounted() {

			
		},
	  	computed: {  
		    
	  	},
		methods: {

		}
	}
</script>
<style lang='sass' scoped>
	@import '~/assets/sass/common.sass'
	.conPic
		text-align: center
		img
			width: 750px


</style>