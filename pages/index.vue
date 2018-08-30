<template>
	<div class="home">
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
		<div class="homeSection container">
			<div class="hotShops">
				<div class="title">
					<img src="~static/images/shops.png" alt="">
					<nuxt-link to="/">More<i class="iconfont icon-combinedshapefuben"></i></nuxt-link>
				</div>
				<div class="pic">
					<nuxt-link to="/"><img src="~static/images/clorox.jpg" alt=""></nuxt-link>
					<nuxt-link to="/"><img src="~static/images/clorox.jpg" alt=""></nuxt-link>
					<nuxt-link to="/"><img src="~static/images/clorox.jpg" alt=""></nuxt-link>
					<nuxt-link to="/"><img src="~static/images/clorox.jpg" alt=""></nuxt-link>
					<nuxt-link to="/"><img src="~static/images/clorox.jpg" alt=""></nuxt-link>
					<nuxt-link to="/"><img src="~static/images/clorox.jpg" alt=""></nuxt-link>
					<nuxt-link to="/"><img src="~static/images/clorox.jpg" alt=""></nuxt-link>
					<nuxt-link to="/"><img src="~static/images/clorox.jpg" alt=""></nuxt-link>
					<nuxt-link to="/"><img src="~static/images/clorox.jpg" alt=""></nuxt-link>
					<nuxt-link to="/"><img src="~static/images/clorox.jpg" alt=""></nuxt-link>
					<nuxt-link to="/"><img src="~static/images/clorox.jpg" alt=""></nuxt-link>
					<nuxt-link to="/"><img src="~static/images/clorox.jpg" alt=""></nuxt-link>
				</div>
			</div>
			<div class="groupBuy">
				<div class="title">
					<img src="~static/images/groupBuy.png" alt="">
					<nuxt-link to="/">More<i class="iconfont icon-combinedshapefuben"></i></nuxt-link>
				</div>
				<div class="goods">
					<nuxt-link to="/">
						<b class="hot"><i>HOT</i></b>
						<div><img src="~static/images/flower.jpg" alt=""></div>
						<p>BRITA Marella 3.5L(blue)+Maxtra Filter Cartridge</p>
						<span>¥1499</span>
						<del>¥1599</del>
					</nuxt-link>
					<nuxt-link to="/">
						<b class="hot"><i>HOT</i></b>
						<div><img src="~static/images/flower.jpg" alt=""></div>
						<p>BRITA Marella 3.5L(blue)+Maxtra Filter Cartridge</p>
						<span>¥1499</span>
						<del>¥1599</del>
					</nuxt-link>
					<nuxt-link to="/">
						<div><img src="~static/images/flower.jpg" alt=""></div>
						<p>BRITA Marella 3.5L(blue)+Maxtra Filter Cartridge</p>
						<span>¥1499</span>
						<del>¥1599</del>
					</nuxt-link>
					<nuxt-link to="/">
						<b class="hot"><i>HOT</i></b>
						<div><img src="~static/images/flower.jpg" alt=""></div>
						<p>BRITA Marella 3.5L(blue)+Maxtra Filter Cartridge</p>
						<span>¥1499</span>
						<del>¥1599</del>
					</nuxt-link>
					<nuxt-link to="/">
						<div><img src="~static/images/flower.jpg" alt=""></div>
						<p>BRITA Marella 3.5L(blue)+Maxtra Filter Cartridge</p>
						<span>¥1499</span>
						<del>¥1599</del>
					</nuxt-link>
					<nuxt-link to="/">
						<b class="hot"><i>HOT</i></b>
						<div><img src="~static/images/flower.jpg" alt=""></div>
						<p>BRITA Marella 3.5L(blue)+Maxtra Filter Cartridge</p>
						<span>¥1499</span>
						<del>¥1599</del>
					</nuxt-link>
					<nuxt-link to="/">
						<div><img src="~static/images/flower.jpg" alt=""></div>
						<p>BRITA Marella 3.5L(blue)+Maxtra Filter Cartridge</p>
						<span>¥1499</span>
						<del>¥1599</del>
					</nuxt-link>
					<nuxt-link to="/">
						<b class="hot"><i>HOT</i></b>
						<div><img src="~static/images/flower.jpg" alt=""></div>
						<p>BRITA Marella 3.5L(blue)+Maxtra Filter Cartridge</p>
						<span>¥1499</span>
						<del>¥1599</del>
					</nuxt-link>
				</div>
			</div>
		</div>
		<floor/>
		<div class="homeAd container"><img src="~static/images/ad.jpg" alt=""></div>
		<floor/> 
		<floor/>
		<floor/>
		<div class="editor container">
			<div class="title">
				<img src="~static/images/editor.png" alt="">
				<nuxt-link to="/">More<i class="iconfont icon-combinedshapefuben"></i></nuxt-link>
			</div>
			<div class="articlePer">
				<nuxt-link to="/">
					<p><img src="~static/images/lays.jpg" alt=""></p> 
					<div class="per">
						<p>Tackle Your Next Toilet Emergency with These Handy Tissue Packs Tissue Packs</p>
						<span>2018-08-29</span>
					</div>
				</nuxt-link>
				<nuxt-link to="/">
					<p><img src="~static/images/lays.jpg" alt=""></p> 
					<div class="per">
						<p>Tackle Your Next Toilet Emergency with These Handy Tissue Packs Tissue Packs</p>
						<span>2018-08-29</span>
					</div>
				</nuxt-link>
				<nuxt-link to="/">
					<p><img src="~static/images/lays.jpg" alt=""></p> 
					<div class="per">
						<p>Tackle Your Next Toilet Emergency with These Handy Tissue Packs Tissue Packs</p>
						<span>2018-08-29</span>
					</div>
				</nuxt-link>
				<nuxt-link to="/">
					<p><img src="~static/images/lays.jpg" alt=""></p> 
					<div class="per">
						<p>Tackle Your Next Toilet Emergency with These Handy Tissue Packs Tissue Packs</p>
						<span>2018-08-29</span>
					</div>
				</nuxt-link>
				<nuxt-link to="/">
					<p><img src="~static/images/lays.jpg" alt=""></p> 
					<div class="per">
						<p>Tackle Your Next Toilet Emergency with These Handy Tissue Packs Tissue Packs</p>
						<span>2018-08-29</span>
					</div>
				</nuxt-link>
				<nuxt-link to="/">
					<p><img src="~static/images/lays.jpg" alt=""></p> 
					<div class="per">
						<p>Tackle Your Next Toilet Emergency with These Handy Tissue Packs Tissue Packs</p>
						<span>2018-08-29</span>
					</div>
				</nuxt-link>
			</div>
		</div>
		<hotProducts/>
	</div>
</template>
<script>
	import SwiperComponent from "~/components/base/Swiper"
	import floor from '~/components/home/floor.vue'
	import hotProducts from '~/components/home/hotProducts.vue'
	export default {
		layout: 'indexHome',
		layout (context) {
			return 'indexHome'
		},
		data() {
			return {
				
			}
		},
		async asyncData ({app}) {
		 	const homeData = await app.$axios.post('https://proj6.thatsmags.com/thmartApi/Ads/Home/list')
  			return { homeData: homeData.data.data }
		},
		components: {
			SwiperComponent,
			floor,
			hotProducts
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
						line-height: 24px 
						min-height: 44px
						
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
						line-height: 24px 
						min-height: 44px 
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
						i 
							@include sc(12px, #fff) 
				a:nth-child(4) 
					margin-right: 0 
				a:nth-child(8) 
					margin-right: 0		
</style>