<template>
	<div class="shopHome">
		<!-- 轮播图 -->
		<SwiperComponent :swiperData="shopData.figure"/>
		<div class="container">
			<div class="conPic">
				<!-- <img src="~static/images/flower.jpg" alt="">
				<img src="~static/images/flower.jpg" alt=""> -->
				<a v-for="(item,index) in shopData.content" :href="item.url" :key="index">
					<img :src="item.pic" alt="">
				</a>
			</div>
		</div>
	</div>
</template>
<script>
	import SwiperComponent from "~/components/base/Swiper"
	// 接口API
	import interfaceApi from '~/plugins/interfaceApi'
	export default {
		layout: 'shopHome',
		validate ({ params }) {
		// Must be a number
			return /^\d+$/.test(params.id)
		},
		// head: {
  //   		title: this.shopData.name,
  // 		},
		data() {
			return {
				
			}
		},
		async asyncData ({app,params}) {
		 	const shopData = await app.$axios.post(interfaceApi.shop,{
		 		id: params.id
		 	})
  			return { shopData: shopData.data.data}
		},
		components: {
			SwiperComponent
		},
		mounted() {
			console.log(this.$api);
			
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