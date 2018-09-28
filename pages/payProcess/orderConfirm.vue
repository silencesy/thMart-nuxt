<template>
	<div class="orderConfirm">
		<div class="container">
			<div class="confirmBox">
				<div class="confirmAddress">
					<div class="title">
						<span>Shipping Address</span>
						<button>Add Address</button>
					</div>
					<div class="address">
						<div class="box defaultBox">
							<p><span>Amanda</span><span>13614539894</span></p>
							<p>Amanda@gamil.com</p>
							<p>上海市黄浦区打浦桥街道蒙自路169号智造</p>
							<div>
								<span><i class="iconfont icon-bianji"></i>Edit</span>
								<span>Default</span>
							</div>
						</div>
						<div class="box" v-for="item in 3" :key="item">
							<p><span>Amanda</span><span>13614539894</span></p>
							<p>Amanda@gamil.com</p>
							<p>上海市黄浦区打浦桥街道蒙自路169号智造</p>
							<div>
								<span><i class="iconfont icon-bianji"></i>Edit</span>
							</div>
						</div>
					</div>
					<div class="more"><span>More</span></div>					
				</div>
				<div class="confirmGoods">
					<div class="title">Order Confirmation</div>
					<div class="goodsBox">
			    		<div class="shopPer" v-for="item in 2" :key="item">
			    			<div class="title">
			    				<div>
			    					<span class="iconfont icon--dianpu"></span>
			    					<span>Shop Name</span>
			    				</div>
			    				<div class="iconfont icon-combinedshapefuben"></div>
			    			</div>
			    			<p class="titleList">
			    				<span>Product Name</span>
			    				<span>Price</span>
			    				<span>Quantity</span>			    				
			    				<span>Subtotal</span>
			    			</p>    			
				            <div class="goodsInfo">
				                <div class="details" v-for="item in 2" :key="item">
			                        <div class="goods">
			                            <div><img src="~/static/images/flower.jpg" alt=""></div>
			                            <div>
			                                <p>Midea Air Fryer, Oil Free Design, Oil Free Design, Model: TN20A</p>
			                                <span class="color">Color: Black</span>
			                            </div>
			                        </div>
			                        <div class="price">
			                            <div>
			                                <span>¥99</span>
			                                <del>¥129</del>
			                            </div>
			                        </div>
			                        <div class="quantity">
			                            <div>
			                                <span>2</span>
			                            </div>
			                        </div>
			                        <div class="subtotal">
			                            <div>
			                                <span>¥99</span>
			                            </div>
			                        </div>
				                </div>
				            </div>
			    		</div>
					</div>
					<div class="payItem">
						<div class="left">
							<div>
								<span>Remark :</span>
								<textarea name="" id=""></textarea>
							</div>
							<p>* Please Turn Off Your VPN</p>
						</div>
						<div class="right">
							<div>
								<span>Shipping :</span>
								<span>¥ 10</span>
							</div>
							<div>
								<span>Quantity Discount :</span>
								<span>- ¥ 5</span>
							</div>
							<div>
								<span class="CouponSelect">
									<span>thMart-Coupons :</span>
									<div>
										<!-- Coupon for RMB 10
										<el-dropdown split-button>
										  <el-dropdown-menu slot="dropdown">
										    <el-dropdown-item>Coupon for RMB 10</el-dropdown-item>
										    <el-dropdown-item>Don’t use Coupon</el-dropdown-item>
										  </el-dropdown-menu>
										</el-dropdown> -->
										<el-dropdown>
											<el-button>
											    Coupon for RMB 10<i class="el-icon-arrow-down el-icon--right"></i>
											</el-button>
											<el-dropdown-menu slot="dropdown">
											    <el-dropdown-item>Coupon for RMB 10</el-dropdown-item>
											    <el-dropdown-item>Don’t use Coupon</el-dropdown-item>
											</el-dropdown-menu>
										</el-dropdown>				
									</div>
								</span>
								<span>- ¥ 10</span>				
							</div>
						</div>
					</div>
					<div class="finalPrice">
						<span>Final Price :</span>
						<span>¥ 193</span>
					</div>
					<div class="btn">
						<button>Place Your Order</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		layout: 'payHome',
		data() {
			return {

			}
		},
		// middleware: 'userAuth',
		components: {

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
	.orderConfirm
		.container
			.confirmBox
				.confirmAddress
					border: $border
					padding: 15px 15px 0 15px
					.title 
						overflow: hidden 
						padding-bottom: 10px 
						margin-bottom: 15px
						border-bottom: $border
						span 
							float: left
							font-size: 18px
							padding-top: 3px
						button 
							float: right
							@include whch(100px, 26px, center, 26px)
							@include sc(14px, #fff)
							background-color: #F9421E
							border-radius: $border_radius
					.address 
						overflow: hidden
						.box 
							border: $border
							border-radius: $border_radius
							@include wh(280px, 150px)
							float: left
							padding: 15px
							margin-right: 16px
							overflow: hidden
							p 
								@include sc(14px, #666)
								margin-bottom: 10px
							>div 
								overflow: hidden
								.icon-bianji
									padding-right: 5px
								span:first-child
									float: left
									@include sc(14px, #666)
									cursor: pointer
								span:nth-child(2)
									float: right
									@include sc(14px, $theme_color)
						.box:last-child
							margin-right: 0
						.box.defaultBox
							border: 1px solid $theme_color
					.more 
						width: 100%
						text-align: center
						padding: 15px 0
						cursor: pointer
						@include sc(14px, #666)
					.more:hover, .more:active 
						color: $theme_color
				.confirmGoods
					margin-top: 20px
					border: $border
					padding: 15px 
					.title 
						border-bottom: $border 
						padding-bottom: 10px
						font-size: 18px
						margin-bottom: 15px
					.goodsBox 
						.shopPer
							border: $border
							padding: 0 15px 15px 15px
							margin-bottom: 20px
							.title 
								padding-top: 15px
								padding-bottom: 10px
								border-bottom: $border
								cursor: pointer
								overflow: hidden
								div:first-child
									float: left
									span 
										font-size: 16px
									.icon-weixuanzhong 
										font-size: 21px
										padding-left: 7px
										padding-right: 15px
										vertical-align: middle
									.icon--dianpu
										padding-right: 10px
										font-size: 21px
								div:nth-child(2)
									float: right
							.titleList
								padding: 15px 0
								border-bottom: $border
								span
									display: inline-block
									@include wc(227px, center)
								span:first-child
									width: 450px
							.goodsInfo
								.details
									overflow: hidden
									padding: 15px 0
									border-bottom: $border
									>div 
										float: left
									.goods
										overflow: hidden
										width: 450px
										padding-right: 15px
										cursor: pointer
										>div
											float: left
										div
										    img 
										    	@include wh(100px, 100px)
										    	margin-right: 15px
										div:nth-child(2)
											width: 310px
											p 
												overflow: hidden
												text-overflow: ellipsis
												display: -webkit-box
												-webkit-box-orient: vertical
												-webkit-line-clamp: 2
												line-height: 22px
												min-height: 44px
											.color									
												@include sc(14px, #666)
												padding: 15px 0 5px 0
												display: block
											.fullCut
												@include sc(14px, $theme_color)
									.price, .subtotal, .quantity
										width: 227px
										height: 104px
										text-align: center
										position: relative
										>div 
											@include center
									.price, .subtotal
										>div
											span, del 
												display: block
												margin-bottom: 10px
											span 
												color: $theme_color
											del 
												color: #666
								.details:last-child
									border-bottom: none

									padding-bottom: 0
					.payItem
						overflow: hidden
						border-top: $border 
						border-bottom: $border
						.left, .right 
							float: left
							width: 50%
						.left 
							border-right: $border
							>div 
								padding: 15px 0
								overflow: hidden
								span, textarea 
									float: left
								span 
									width: 75px 
									color: #666
								textarea
									@include wh(495px, 80px)
							>p 
								@include sc(14px, $theme_color)
								margin: 29px 0 10px 0
						.right 
							>div 
								border-bottom: $border
								overflow: hidden
								@include hh(55px, 55px)
								padding: 0 15px
								>span:first-child 
									float: left
									color: #666
									width: 170px
									text-align: right
								>span:nth-child(2)
									float: right
									color: $theme_color
							>div:first-child
								>span:nth-child(2)
									color: #666
							>div:last-child 
								border-bottom: none
								span.CouponSelect
									overflow: hidden
									width: 425px
									>span 
										display: inline-block
										float: left
										width: 170px
									>div 
										float: left
										display: inline-block
										width: 255px
										text-align: left
										padding-left: 10px
					.finalPrice
						background-color: #eee 
						text-align: right
						@include whh(100%, 40px, 40px)
						margin: 15px 0
						padding: 0 15px
						>span:first-child
							color: #666
						>span:nth-child(2)
							color: $theme_color
							padding-left: 30px
							font-size: 21px
					.btn 
						text-align: right
						button 
							@include whch(180px, 40px, center, 40px)
							background-color: $theme_color
							color: #fff
							border-radius: $border_radius
	.el-dropdown-selfdefine
		padding: 7px 8px
		border: $border
		text-align: left
	.el-dropdown-selfdefine:hover
		background-color: #fff
		color: rgb(96, 98, 102)
	.el-dropdown-menu__item:hover
		background-color: #fff
		color: $theme_color
	.el-dropdown-menu__item
		padding: 0 20px
	.el-icon-arrow-down.el-icon--right
		padding-left: 5px
</style>
