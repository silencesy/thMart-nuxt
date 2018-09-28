<template>
	<div class="wishList">
		<div class="container">
			<userLayout>
				<div class="wish" slot="userContent">
					<div class="title">Wishlist</div>
					<div>
					  	<el-tabs v-model="activeName" @tab-click="handleClick">
						    <el-tab-pane label="Goods" name="goods" class="section">
								<div class="box" v-for="item in 10" :key="item">
									<nuxt-link to="/">
										<div><img src="~/static/images/flower.jpg" alt=""></div>
										<p>An Affectionate Encounter Bouquet / Flowers</p>
										<div class="bottom">
											<span>¥ 269</span>
											<i class="iconfont icon-review"></i>
										</div>
									</nuxt-link>
								</div>
								<!-- 没有收藏的情况 -->
								<!-- <div class="noWishlist"><p>No more wishlist</p></div> -->
						    </el-tab-pane>
						    <el-tab-pane label="Shops" name="shops" class="section">
								<div class="box" v-for="item in 10" :key="item">
									<nuxt-link to="/">
										<div><img src="~/static/images/flower.jpg" alt=""></div>
										<p>Fairmont Peace Hotel</p>
										<div class="bottom bottomStar">
											<i class="iconfont icon-review"></i>
										</div>
									</nuxt-link>
								</div>
								<!-- 没有收藏的情况 -->
								<!-- <div class="noWishlist"><p>No more wishlist</p></div> -->
						    </el-tab-pane>
					  	</el-tabs>
					</div>
				</div>
			</userLayout>
			<goodsItem :titleIsShow="titleIsShow" />
		</div>
	</div>
</template>
<script>
	import goodsItem from "~/components/base/goodsItem"
	import userLayout from "~/components/user/userLayout"
	export default {
		layout: 'userHome',
		data() {
			return {
				titleIsShow: true,
				activeName: 'goods'
			}
		},
		components: {
			goodsItem, 
			userLayout
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
	.wishList
		.container
			.wish
				.title
					padding-bottom: 15px 
					border-bottom: $border
				.section
	 				.box	 				
	 					border: $border
	 					@include wh(182px, 253px)
	 					float: left
	 					margin-right: 14px
	 					margin-bottom: 15px
	 					>a 
	 						display: inline-block
	 						padding: 15px
	 						@include wh(100%, 100%)
	 						>div 
	 							img 
	 								@include wh(150px, 150px)
							p 
								overflow: hidden
								text-overflow: ellipsis
								display: -webkit-box
								-webkit-box-orient: vertical
								-webkit-line-clamp: 2
								line-height: 22px 
								min-height: 44px
								text-align: center
							.bottom
								padding-top: 5px 
								overflow: hidden
								span 
									float: left
								i 
									float: right
									color: $theme_color
							.bottomStar.bottom
								text-align: center
								i 
									float: initial
				.section 
					overflow: hidden
					margin-right: -14px
					.box:nth-last-child(-n+5)
						margin-bottom: 0
	.noWishlist
		position: relative
		height: 330px
		p 
			@include center
			color: #999

</style>
