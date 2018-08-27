<template>
	<div class=home>
		<!-- 轮播图 -->
		<SwiperComponent :swiperData="homeData.figure"/>
		<!-- today's deal -->
		<div class="deal">
			<div class="container">
				<nuxt-link to="/">
					<div class="deal-logo" :style="{backgroundImage:'url(' + homeData.deal.pic + ')'}"></div>
				</nuxt-link>
				<div class="deal-swiper">
					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import SwiperComponent from "~/components/base/Swiper"
	export default {
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
	.deal
		padding: 15px 0
		background-color: #eee
		.container
			height: 274px
			background-color: pink
			.deal-logo
				float: left
				@include wh(240px,274px)
			.deal-swiper
				float: left
				@include wh(960px,274px)
				background-color: red
				.slide-item
					@include wh(100%,100%)
					
				

		
</style>