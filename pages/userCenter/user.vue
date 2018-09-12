<template>
	<div class="user">
		<div class="container">
			<userLayout>
				<div class="" slot="userContent">
					<div class="userTitle">
		                <ul>
		                    <li>
		                        <nuxt-link to="/">All</nuxt-link>
		                    </li>
		                    <li>
		                        <nuxt-link to="/">Unpaid</nuxt-link>
		                    </li>
		                    <li>
		                        <nuxt-link to="/">Unshipped</nuxt-link>
		                    </li>
		                    <li>
		                        <nuxt-link to="/">In Progress</nuxt-link>
		                    </li>
		                    <li>
		                        <nuxt-link to="/">Shipped</nuxt-link>
		                    </li>
		                </ul>               
		            </div>
		            <div class="userCenter">
		            	<div>
		            		<div class="title">Delivery Status</div>
			            	<div class="status">
			            		<div>
			            			<div><img src="~/static/images/flower.jpg" alt=""></div>
			            			<div>
			            				<p>[上海市]快件离开上海已发往卢湾</p>
			            				<span>2018.08.15 07:21:45 <nuxt-link to="/">Tracking Your Order >></nuxt-link></span>
			            			</div>
			            		</div>
								<div>
			            			<div><img src="~/static/images/flower.jpg" alt=""></div>
			            			<div>
			            				<p>[上海市]快件离开上海已发往卢湾</p>
			            				<span>2018.08.15 07:21:45 <nuxt-link to="/">Tracking Your Order >></nuxt-link></span>
			            			</div>
			            		</div>
			            		<div>
			            			<div><img src="~/static/images/flower.jpg" alt=""></div>
			            			<div>
			            				<p>[上海市]快件离开上海已发往卢湾</p>
			            				<span>2018.08.15 07:21:45 <nuxt-link to="/">Tracking Your Order >></nuxt-link></span>
			            			</div>
			            		</div>
			            	</div>
			            </div>
			            <div>
			            	<div class="title">Wishlist</div>
			            	<div class="wishList">
			            		<div class="wishBox goods">
				            		<nuxt-link to="/" class="boxPer">
				            			<div>
					            			<div>
					            				<img src="~/static/images/flower.jpg" alt="">
					            			</div>
					            			<p>Maxtra Filter Cartridge Filter Cartridge</p>
					            			<span>¥14999</span>
					            		</div>
				            		</nuxt-link>
				            		<nuxt-link to="/" class="boxPer">
				            			<div>
					            			<div>
					            				<img src="~/static/images/flower.jpg" alt="">
					            			</div>
					            			<p>Maxtra Filter Cartridge Filter Cartridge</p>
					            			<span>¥14999</span>
					            		</div>
				            		</nuxt-link>
				            		<nuxt-link to="/" class="boxPer">
				            			<div>
					            			<div>
					            				<img src="~/static/images/flower.jpg" alt="">
					            			</div>
					            			<p>Maxtra Filter Cartridge Filter Cartridge</p>
					            			<span>¥14999</span>
					            		</div>
				            		</nuxt-link>
				            		<nuxt-link to="/" class="boxPer">
				            			<div>
					            			<div>
					            				<img src="~/static/images/flower.jpg" alt="">
					            			</div>
					            			<p>Maxtra Filter Cartridge Filter Cartridge</p>
					            			<span>¥14999</span>
					            		</div>
				            		</nuxt-link>									
				            	</div>
				            	<div class="wishBox shop">
				            		<nuxt-link to="/" class="boxPer">
				            			<div>
					            			<div>
					            				<img src="~/static/images/flower.jpg" alt="">
					            			</div>
					            			<p>Maxtra Filter Cartridge Filter Cartridge</p>
					            		</div>
				            		</nuxt-link>
				            		<nuxt-link to="/" class="boxPer">
				            			<div>
					            			<div>
					            				<img src="~/static/images/flower.jpg" alt="">
					            			</div>
					            			<p>Maxtra Filter Cartridge Filter Cartridge</p>
					            		</div>
				            		</nuxt-link>
				            		<nuxt-link to="/" class="boxPer">
				            			<div>
					            			<div>
					            				<img src="~/static/images/flower.jpg" alt="">
					            			</div>
					            			<p>Maxtra Filter Cartridge Filter Cartridge</p>
					            		</div>
				            		</nuxt-link>
				            		<nuxt-link to="/" class="boxPer">
				            			<div>
					            			<div>
					            				<img src="~/static/images/flower.jpg" alt="">
					            			</div>
					            			<p>Maxtra Filter Cartridge Filter Cartridge</p>
					            		</div>
				            		</nuxt-link>
				            	</div>
			            	</div> 
			            </div>
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
	.user 
		.container
			.userTitle
				background-color: #eee
				width: 968px
				overflow: hidden
				ul 
					overflow: hidden
				li 
					width: 20%
					float: left 
					text-align: center
					a 
						width: 100% 
						padding: 20px 0
						display: inline-block 
					a:after 
						content: "|"
						float: right
						color: #dfdfdf
				li:last-child
					a:after
						content: " "
			.userCenter
				overflow: hidden
				margin-top: 15px
				>div:first-child 
					margin-right: 15px
				>div
					float: left 
					border: $border
					width: 476px
					.title 
						@include hh(35px, 35px)
						padding-left: 15px
						border-bottom: $border 
					.status 
						overflow: hidden
						>div 
							overflow: hidden
							float: left
							padding: 15px
							width: 100%
							margin-bottom: 3px
							>div:first-child
								float: left
								@include wh(70px, 70px)
								margin-right: 10px
								img 
									@include wh(70px, 70px)
							>div:nth-child(2)
								float: left
								width: 363px
								p 
									display: inherit
									padding: 10px 0
								span 
									font-size: 14px
									color: #666
									a 
										color: $theme_color
					.wishList
						padding: 15px 
						.wishBox 
							overflow: hidden
							.boxPer
								float: left
								width: 99px
								text-align: center
								margin-right: 16px
								>div
									>div 
										@include wh(77px, 77px)
										margin-bottom: 5px
										text-align: center
										display: inline-block
										img 
											@include wh(77px, 77px)
									p 
										overflow: hidden
										text-overflow: ellipsis
										display: -webkit-box
										-webkit-box-orient: vertical
										-webkit-line-clamp: 2
										line-height: 22px
										min-height: 44px
										margin-bottom: 5px
									span 
										color: $theme_color
							.boxPer:last-child 
								margin-right: 0	
						.wishBox.shop
							margin-top: 20px
							.boxPer
								>div
									p
										overflow: hidden
										text-overflow: ellipsis
										white-space: nowrap
										display: block
										min-height: 22px
</style>
