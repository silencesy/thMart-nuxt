<template>
	<div class="goodsContent">
		<div class="bread">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '~pages/index' }">Home</el-breadcrumb-item>
			  <el-breadcrumb-item>Amor flora</el-breadcrumb-item>
			  <el-breadcrumb-item>Summer Berry Afternoon Tea…</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="productDetails container">
			<div class="goodsDetails">
				<div class="goodsDetailsBox">
					<!-- 左边 -->
					<div class="goodImg goodsLeft"> 
					    <img src="~static/images/flower.jpg" alt="">
					</div>
					<!-- 右边 -->
					<div class="goodsRight">
						<p>Summer Berry Afternoon Tea, Fairmont Peace Hotel Summer Berry Afternoon Tea, Fairmont Peace Hotel</p>
						<div class="box">
							<ul class="list">
								<li>
									<span>Price</span>
									<div>
										<el-badge value="new" class="item">
										  	<el-button size="small">¥ 14999</el-button>
										</el-badge>
										<del>¥ 15999</del>
									</div>
								</li>
								<li>
									<span>Shipping</span>
									<div>
										<span>¥ 10.00</span>
										<span>99元免运费</span>
									</div>
								</li>
								<li>
									<span class="type">Type</span>
									<div class="btn">
										<span class="selected">RMB199 / Month</span>
										<span>RMB299 / Month</span>
										<span class="soldOut">RMB299 / Month</span>
									</div>
								</li>
								<li>
									<span class="type">Delivered time</span>
									<div class="btn">
										<span class="selected">Monday</span>
										<span>Saturday</span>
									</div>
								</li>
								<li>
									<span class="type">Quantity</span>
									<div>
										<el-input-number size="small" :min="1" v-model="num1"></el-input-number>
									</div>
								</li>
								<li class="buy">
									<button>Buy Now</button>
									<button>Add To Cart</button>
								</li>
								<li class="tips">
									<span><i class="iconfont icon-unreview"></i>favourite</span>
									<span><i class="iconfont icon-kefu"></i>Add To Cart</span>
								</li>
							</ul>						
						</div>
					</div>
				</div>
				<div class="detailsPic">
					<div class="title">Details</div>
					<div class="imgBox">
						<img src="~static/images/goods.jpg" alt="">
					</div>
				</div>
			</div>

			<moreGoods />
		</div>
	</div>
</template>
<script>
	import moreGoods from "~/components/base/moreGoods"
	export default {
		layout: 'shopHome',
		props: {

	    },
		data(){
            return{
            	num1: 1,
	        }
        },
		components: {
			moreGoods
		},
		mounted() {

			
		},
	  	computed: {  
		    
	  	},
		methods:{

        }
	}
</script>
<style lang='sass' type="text/css" scoped>
	@import '~/assets/sass/common.sass'
	.goodsContent
		.bread 
			width: 100%
			background-color: #eee
			margin-bottom: 15px
			.el-breadcrumb
				@include hh(36px, 36px)
				width: 1200px
				margin: 0 auto
		.productDetails  
			overflow: hidden
			.goodsDetails 
				float: left
				overflow: hidden 
				border: $border
				border-radius: $border_radius
				padding: 15px
				.goodsDetailsBox
					overflow: hidden
					.goodsLeft 
						float: left
						img 
							@include wh(400px, 400px)
					.goodsRight 
						float: left
						width: 510px 
						p 
							font-size: 16px
							line-height: 24px
						.box 
							width: 510px	
							.list
								overflow: hidden
								li:first-child 
									background-color: #eee
									height: 48px
									span
										margin-top: 17px
										@include sc(14px, #666)
									>div 
										margin-top: 13px
										del 
											@include sc(14px, #999)
											margin-left: 75px

								li
									margin-top: 20px
									overflow: hidden
									span 
										width: 115px
										float: left
										padding-left: 10px
										@include sc(14px, #666)
									>div 
										float: left
										span 
											padding-left: 0
									>.type 
										margin-top: 10px
									>.btn
										width: 380px
										span
											width: auto
											border: $border
											padding: 10px
											border-radius: $border_radius
											cursor: pointer 
											margin-right: 15px
											margin-bottom: 15px
										.selected 
											color: $theme_color
											border: 1px solid $theme_color
										.soldOut 
											background-color: #eee
											border: 1px solid #eee 
											color: #999
								.buy 
									margin: 30px 0 15px 0
									button 
										@include whch(180px, 40px, center, 40px)
										background-color: $theme_color
										@include sc(16px, #fff)
										border-radius: $border_radius
									button:first-child 
										margin-right: 40px
								.tips 
									span 
										width: 180px
										text-align: center
										cursor: pointer
										i 
											padding-right: 5px
									span:first-child
										margin-right: 25px
				.detailsPic
					.title 
						@include hh(40px, 40px)
						background-color: #eee
						margin: 20px 0
						color: $theme_color
						padding-left: 15px
					.imgBox
						width: 910px
						text-align: center
						img
							width: 750px
									

</style>