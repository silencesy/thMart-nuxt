<template>
	<div class="user">
		<div class="container">
			<userLayout active="userCenter">
				<div class="" slot="userContent">
					<div class="userTitle">
		                <ul>
		                    <li>
		                        <nuxt-link to="/userCenter/orderlist/all">All</nuxt-link>
		                    </li>
		                    <li>
		                        <nuxt-link to="/userCenter/orderlist/unpaid">Unpaid</nuxt-link>
		                    </li>
		                    <li>
		                        <nuxt-link to="/userCenter/orderlist/unshipped">Unshipped</nuxt-link>
		                    </li>
		                    <li>
		                        <nuxt-link to="/userCenter/orderlist/progress">In Progress</nuxt-link>
		                    </li>
		                    <li>
		                        <nuxt-link to="/userCenter/orderlist/shipped">Shipped</nuxt-link>
		                    </li>
		                </ul>               
		            </div>
		            <div class="userCenter">
		            	<div>
		            		<div class="title">Delivery Status</div>
			            	<div class="status">
			            		<div v-for="item in 3" :key="item">
			            			<div><img src="~/static/images/flower.jpg" alt=""></div>
			            			<div>
			            				<p>[上海市]快件离开上海已发往卢湾</p>
			            				<span>2018.08.15 07:21:45 <nuxt-link to="/">Tracking Your Order >></nuxt-link></span>
			            			</div>
			            		</div>
			            		<!-- 没有订单状态的情况 -->
			            		<!-- <div class="noOrder"><p>No more delivery status</p></div> -->
			            	</div>
			            </div>
			            <div>
			            	<div class="title">Wishlist</div>
			            	<div class="wishList">
			            		<div class="wishBox goods">
				            		<nuxt-link v-for="item in goodsList" :key="item.id" :to="{name: 'goods-id', params: {id: item.id}}"  class="boxPer">
				            			<div>
					            			<div>
					            				<img :src="item.pic" alt="">
					            			</div>
					            			<p>{{item.title}}</p>
					            			<span>¥{{item.price}}</span>
					            		</div>
				            		</nuxt-link>								
				            	</div>
				            	<div class="wishBox shop">
				            		<nuxt-link v-for="item in shopList" :key="item.contentId" :to="{name: 'shop-id',params: {id: item.contentId}}" class="boxPer">
				            			<div>
					            			<div>
					            				<img :src="item.pic" alt="">
					            			</div>
					            			<p>{{item.name}}</p>
					            		</div>
				            		</nuxt-link>
				            	</div>
				            	<!-- 没有收藏的情况 -->
				            	<!-- <div class="noWish"><p>No more wishlist</p></div> -->
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
	// 接口API
	import interfaceApi from '~/plugins/interfaceApi'
	export default {
		layout: 'userHome',
		data() {
			return {
				titleIsShow: true,
			}
		},
		middleware: 'userAuth',
		async asyncData ({app}) {
			const goodsPara = {
				type: 1,
				page: 1,
				pageSize: 4
			}
			const shopPara = {
				type: 2,
				page: 1,
				pageSize: 4
			}
		 	const goodsList = await app.$axios.post(interfaceApi.CollectList,goodsPara);
		 	const shopList = await app.$axios.post(interfaceApi.CollectList,shopPara);
  			return { 
  				goodsList: goodsList.data.data.data,
  				shopList: shopList.data.data.data
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
	.noOrder
		position: relative
		height: 305px
		p 
			@include center
			color: #999
	.noWish
		position: relative
		height: 279px
		p 
			@include center
			color: #999
</style>
