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
					<swiper :options="swiperOption"  ref="baseSwiper">
						<swiper-slide v-for="(item,index) in homeData.deal.data" :key="index">
							<!-- <div class="slide-item" :style="{backgroundImage:'url(' + item.pic + ')'}"></div> -->
							<!-- <img class="slide-item" :src="item.pic" alt=""> -->
							<div>
								<div>
									<img class="slide-item" :src="item.pic" alt="">
								</div>
								<div>
									<p>123</p>
								</div>
							</div>
						</swiper-slide>
						<div class="swiper-button-prev"></div><!--左箭头-->
    					<div class="swiper-button-next"></div><!--右箭头-->
					</swiper>
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
				swiperOption: {  
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					slidesPerView : 5,
  			// 		slidesPerGroup : 5,
					navigation: {
					    nextEl: '.swiper-button-next',
					    prevEl: '.swiper-button-prev',
					},
		        } 
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
		    swiper() {  
		      return this.$refs.baseSwiper.swiper;  
		    }  
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