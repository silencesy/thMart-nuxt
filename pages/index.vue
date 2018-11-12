<template>
	<div class="home">
		<mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">

			<!-- 轮播图 -->
			<SwiperComponent :swiperData="homeData.figure"/>
			<!-- today's deal -->
			<div class="deal">
				<div class="container">
					<nuxt-link to="/deals/1">
						<div class="deal-logo" :style="{backgroundImage:'url(' + homeData.deal.pic + ')'}"></div>
					</nuxt-link>
					<div class="deal-swiper">
					    <swiper :options="swiperOption">
					      	<swiper-slide class="swiper-slide" v-for="(item,index) in homeData.ticketing.data" :key="index">
								<nuxt-link :to="{name: 'goods-id', params: {id: item.id}}">
									<div class="dealSwiper">
										<div><img v-lazy="item.pic" alt=""></div>
										<div class="dealTxt">
											<p>{{item.title}}</p>
											<div>
												<span>¥{{item.price}}</span>
												<del v-if="item.originalPrice">¥{{item.originalPrice}}</del>
											</div>
										</div>
									</div>
								</nuxt-link>
					      	</swiper-slide>
					    </swiper>
						<div class="swiper-pagination"></div>
					
					    <div class="swiper-button-next"></div>
					    <div class="swiper-button-prev"></div>
					</div>
				</div>
			</div>
			<div class="homeSection container">
				<!-- 商户组 -->
				<div class="hotShops">
					<div class="title">
						<img src="~static/images/shops.png" alt="">
						<nuxt-link to="/shop/shopList">More<i class="iconfont icon-combinedshapefuben"></i></nuxt-link>
					</div>
					<div class="pic">
						<nuxt-link v-for="item in homeData.shop.data" :key="item.id" :to="{name: 'shop-id',params: {id: item.id}}"><img v-lazy="item.pic" :alt="item.title"></nuxt-link>
					</div>
				</div>
				<!-- 团购组 -->
				<div class="groupBuy">
					<div class="title">
						<img src="~static/images/groupBuy.png" alt="">
						<nuxt-link to="/groupBuy/1">More<i class="iconfont icon-combinedshapefuben"></i></nuxt-link>
					</div>
					<div class="goods">
						<nuxt-link to="/" v-show="index<8" v-for="(item,index) in homeData.groupBuying.data" :key="index">
							<b class="hot"><i>HOT</i></b>
							<div><img v-lazy="item.pic" alt=""></div>
							<p>{{item.title}}</p>
							<span>¥{{item.price}}</span>
							<del v-if="item.originalPrice">¥{{item.originalPrice}}</del>
						</nuxt-link>
					</div>
				</div>
			</div>
			
			<!-- <div class="homeAd container"><img src="~static/images/ad.jpg" alt=""></div> -->
			<!-- <floor :floorData="homeData.ticketing"/>
			<floor :floorData="homeData.flowers"/>
			<floor :floorData="homeData.thDispatcher"/>
			<floor :floorData="homeData.homeWare"/>
			<floor :floorData="homeData.babyProduct"/>
			<floor :floorData="homeData.toys"/>
			<floor :floorData="homeData.coupon"/>
			<floor :floorData="homeData.electronic"/> -->
			<floor v-for="(item,index) in homeData.category" :key="index"  :floorData="item"/>
			<div class="editor container">
				<div class="title">
					<img src="~static/images/editor.png" alt="">
					<nuxt-link to="/article/articleList">More<i class="iconfont icon-combinedshapefuben"></i></nuxt-link>
				</div>
				<div class="articlePer">
					<nuxt-link v-for="(item,index) in homeData.article.data" :key="item.id" v-if="index<6" :to="{name: 'article-id',params: {id: item.id}}">
						<p><img v-lazy="item.pic" alt=""></p> 
						<div class="per">
							<p>{{item.title}}</p>
							<span>{{item.createTime}}</span>
						</div>
					</nuxt-link>
				</div>
			</div>
			<goodsItem :hotData='hotData' :titleIsShow="titleIsShow" />

    	</mescroll-vue>
		
	</div>
</template>
<script>
	// 引入mescroll的vue组件
	import MescrollVue from '~/components/home/mescroll.js/mescroll.vue'
	import SwiperComponent from "~/components/base/Swiper"
	import floor from '~/components/home/floor'
	import goodsItem from '~/components/base/goodsItem'
	// 接口API
	import interfaceApi from '~/plugins/interfaceApi'
	export default {
		layout: 'indexHome',
		layout (context) {
			return 'indexHome'
		},
		data() {
			return {
				//Deals轮播
				swiperOption: {
			      	autoplay: 3000,
			      	slidesPerView: 5,
			      	spaceBetween: 0,
			      	navigation: {
			        	nextEl: '.swiper-button-next',
			        	prevEl: '.swiper-button-prev',
			   	  	}
			    },
				// 上拉加载数据
				hotData: [],
				hotGoodsPara: {
					id: 12,
					pageSize: 6,
					page: 0,
					sort: 'order_asc'
				},
				totalPage: -1,
				mescrollDown: {
					isLock: true
				},
				mescrollUp: {
					callback: this.upCallback,
					offset: 500,
					page: {
						num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
						size: 18, //每页数据条数,默认10
					}
				},
				mescroll: null,
				titleIsShow: true
			}
		},
		async asyncData ({app,store}) {
		 	const homeData = await app.$axios.post(interfaceApi.home,{terminal: 'PC'});
		 	// 获取分类
		 	const categoryList = await app.$axios.post(interfaceApi.categoryList,{fname: 0})
		 	store.commit('SET_CATEGORYLIST',categoryList.data.data);
		 	store.commit('SET_TOPBANNER',homeData.data.data.topBanner);
  			return { homeData: homeData.data.data}
		},
		components: {
			SwiperComponent,
			floor,
			goodsItem,
			MescrollVue
		},
	  	computed: {  
		    
	  	},
	  	beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
			next(vm => {
				vm.$refs.mescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
			})
		},
		beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
			this.mescroll.destroy() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
			next()
		},
		methods: {
			mescrollInit (mescroll) {
			    this.mescroll = mescroll
			},
			upCallback (page, mescroll) {
				console.log(page)
				var that = this;
				that.hotGoodsPara.page = page.num;
				that.hotGoodsPara.pageSize = page.size;
				that.$axios.post('Ads/list',that.hotGoodsPara).then(res=> {
					mescroll.endSuccess(res.data.data.data.length)
					that.totalPage = res.data.data.totalPage;
					that.hotData = that.hotData.concat(res.data.data.data);

				})
			}
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
			background-color: #fff
			.deal-logo
				float: left
				@include wh(240px,274px)
			.deal-swiper
				float: left
				overflow: hidden
				@include wh(960px,274px)
				background-color: #fff
				position: relative
				.slide-item
					@include wh(100%,100%)

	.homeAd
		img 
			width: 100%
			margin-top: 15px 
	.editor 
		padding: 0 15px 
		border: $border 
		margin-top: 15px
		.title 
			border-bottom: $border
			overflow: hidden
			@include hh(60px, 60px)
			img
				float: left
				vertical-align: middle
				margin-top: 3px
			a 
				float: right
				vertical-align: middle
				.icon-combinedshapefuben 
					padding-left: 5px
		.articlePer  
			overflow: hidden

			a
				float: left
				display: inline-block
				overflow: hidden
				padding: 15px
				border-right: $border 
				border-bottom: $border
				>p 					
					float: left
					@include wh(100px, 66px)
					margin-right: 15px
					img 
						@include wh(100px, 66px)
				.per 
					float: left
					width: 253px
					p 
						overflow: hidden 
						text-overflow: ellipsis 
						display: -webkit-box 
						-webkit-box-orient: vertical
						-webkit-line-clamp: 2 
						line-height: 22px 
						height: 44px
						
					span 
						@include sc(14px, #999)
						display: inline-block 
						margin-top: 5px
			a:first-child 
				padding-left: 0
				padding-right: 15px
			a:nth-child(3) 
				padding-right: 0 
				border-right: 0
			a:nth-child(4) 
				border-bottom: 0 
				padding-left: 0
			a:nth-child(5) 
				border-bottom: 0 
			a:nth-child(6) 
				padding-right: 0 
				border-right: 0
				border-bottom: 0 
	.homeSection
		overflow: hidden
		margin-top: 15px
		overflow: hidden
		.hotShops	
			float: left	
			width: 590px 
			height: 510px
			border: $border	
			padding: 0 15px 15px 15px 
			margin-right: 20px
			.title 
				border-bottom: $border
				overflow: hidden
				@include hh(60px, 60px)
				img
					float: left
					vertical-align: middle
					margin-top: 14px
				a 
					float: right
					vertical-align: middle
					.icon-combinedshapefuben 
						padding-left: 5px
			.pic 
				width: 558px 
				padding-top: 15px
				a
					margin-right: 7px
					margin-bottom: 7px
					display: inline-block
					img 	
						width: 134px 
						height: 134px
				a:nth-child(4)
					margin-right: 0
				a:nth-child(8)
					margin-right: 0
				a:nth-child(12)
					margin-right: 0 
		.groupBuy
			float: left		
			width: 590px 
			height: 510px
			border: $border	
			padding: 0 15px 15px 15px 
			.title 
				border-bottom: $border
				overflow: hidden
				@include hh(60px, 60px)
				img
					float: left
					vertical-align: middle
					margin-top: 15px
				a 
					float: right
					vertical-align: middle
					.icon-combinedshapefuben 
						padding-left: 5px 
			.goods 
				overflow: hidden
				margin-top: 15px
				a 
					float: left
					width: 134px
					min-height: 205px
					position: relative
					margin-right: 7px
					margin-bottom: 12px
					div
						@include wh(134px, 134px)
						img
							@include wh(134px, 134px)
					p 
						overflow: hidden
						text-overflow: ellipsis 
						display: -webkit-box 
						-webkit-box-orient: vertical 
						-webkit-line-clamp: 2
						line-height: 22px 
						height: 44px 
						margin-top: 4px
						margin-bottom: 5px
						text-align: center
						padding: 0 5px
					span 
						color: $theme_color 
					del 
						@include sc(14px, #999)
						position: absolute 
						bottom: 0 
						right: 8px 
					b 
						position: absolute 
						background-color: $theme_color
						@include whch(38px, 18px, center, 18px)
						border-radius: $border_radius
						left: 5px
						top: 5px
						i 
							@include sc(12px, #fff) 
				a:nth-child(4) 
					margin-right: 0 
				a:nth-child(8) 
					margin-right: 0		
	.swiper-slide
		@include wh(192px, 274px)
		border-right: $border
		a
			display: block
			@include wh(100%, 100%)
			.dealSwiper
				padding: 0 7px
				>div:first-child
					@include wh(176px,176px)
					margin-bottom: 10px 
					img 
						@include wh(100%, 100%)
				.dealTxt
					p
						overflow: hidden
						text-overflow: ellipsis
						display: -webkit-box
						-webkit-box-orient: vertical
						-webkit-line-clamp: 2
						height: 44px
						line-height: 22px
						text-align: center
					>div 
						overflow: hidden
						padding: 10px 5px 0
						>span 
							color: #f9421e
						del 
							@include sc(14px, #999)
							float: right
	.swiper-button-next
		background-image: url("~/static/images/ar.png")
	.swiper-button-prev
		background-image: url("~/static/images/al.png")
	.swiper-button-next, .swiper-button-prev
		background-color: rgba(31, 45, 61, .25)
		@include wh(40px, 40px)
		background-size: auto
		top: 44%
	.swiper-button-next:active, .swiper-button-prev:active
		outline: none
	.swiper-button-next:focus, .swiper-button-prev:focus
		outline: none
	.swiper-button-next:hover, .swiper-button-prev:hover
		background-color: rgba(31, 45, 61, .45)
</style>