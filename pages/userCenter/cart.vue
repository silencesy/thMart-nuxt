<template>
	<div class="cart">
		<div class="container">
    		<div class="cartBox" v-for="item in 2" :key="item">
    			<div class="title">
    				<div>
    					<span class="iconfont icon-weixuanzhong"></span>
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
    				<span>Edit</span>
    			</p>    			
	            <div class="cartOrder">
	                <div class="details">
	                	<div class="selectBox">
	                		<span class="iconfont icon-weixuanzhong"></span>
	                	</div>
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
                            <div class="goodsContent">
                                <el-input-number size="small" :min="1" v-model="num1"></el-input-number>
                            </div>
                        </div>
                        <div class="subtotal">
                            <div>
                                <span>¥99</span>
                            </div>
                        </div>
                        <div class="edit">
                            <div>
                                <span class="iconfont icon-shanchu"></span>
                            </div>
                        </div>
	                </div>
	                <div class="details">
	                	<div class="selectBox">
	                		<span class="iconfont icon-xuanzhong1"></span>
	                	</div>
                        <div class="goods">
                            <div><img src="~/static/images/flower.jpg" alt=""></div>
                            <div>
                                <p>Midea Air Fryer, Oil Free Design, Oil Free Design, Model: TN20A</p>
                                <span class="color">Color: Black</span>
                                <span class="fullCut">满100减10</span>
                            </div>
                        </div>
                        <div class="price">
                            <div>
                                <span>¥99</span>
                                <del>¥129</del>
                            </div>
                        </div>
                        <div class="quantity">
                            <div class="goodsContent">
                                <el-input-number size="small" :min="1" v-model="num2"></el-input-number>
                            </div>
                        </div>
                        <div class="subtotal">
                            <div>
                                <span>¥99</span>
                            </div>
                        </div>
                        <div class="edit">
                            <div>
                                <span class="iconfont icon-shanchu"></span>
                            </div>
                        </div>
	                </div>
	            </div>
    		</div>
    		<div class="checkAll">
    			<div class="left">
    				<i class="iconfont icon-weixuanzhong"></i>
    				<span>Select All</span>
    				<strong class="iconfont icon-shanchu"></strong>
    			</div>
    			<div class="right">
    				<span>Selected <i>1</i> Goods</span>
    				<span>Total: <i>¥ {{cartData.total}}</i></span>
    				<i v-if="cartData.reduceTotal!=0">优惠 <i>¥ {{cartData.reduceTotal}}</i></i>
    				<button>Checkout Now</button>
    			</div>
    		</div>
		</div>
	</div>
</template>
<script>
	// 接口API
	import interfaceApi from '~/plugins/interfaceApi'
	export default {
		layout: 'userHome',
		data() {
			return {
				num1: 1,
				num2: 1,
			}
		},
		middleware: 'userAuth',
		async asyncData ({app,params,store}) {
		 	const cartData = await app.$axios.post(interfaceApi.cartList);
  			return { cartData: cartData.data.data}
		},
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
	.cart 
		.container
			.cartBox
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
						@include wc(197px, center)
					span:first-child
						width: 380px
				.cartOrder
					.details
						overflow: hidden
						padding: 15px 0
						border-bottom: $border
						>div 
							float: left
						.selectBox
							@include whch(36px, 104px, center, 104px)
							cursor: pointer
							.iconfont
								font-size: 21px
							.icon-xuanzhong1
								color: $theme_color
						.goods
							overflow: hidden
							width: 345px
							padding-right: 15px
							cursor: pointer
							>div
								float: left
							div
							    img 
							    	@include wh(100px, 100px)
							    	margin-right: 15px
							div:nth-child(2)
								width: 215px
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
						.price, .quantity, .subtotal, .edit 
							width: 196px
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
						.edit 
							span
								color: #999
								cursor: pointer
					.details:last-child
						border-bottom: none
						padding-bottom: 0
			.checkAll
				border: $border
				padding: 10px 15px 10px 0
				overflow: hidden
				.left
					float: left
					margin-top: 6px
					i 
						font-size: 21px
						padding: 0 12px 0 22px
						cursor: pointer
					span 
						padding-right: 15px
					strong 
						color: #999
						font-weight: 400
						cursor: pointer
				.right
					float: right
					span 
						padding-right: 15px
					i 
						color: $theme_color
					button
						@include whch(120px, 36px, center, 36px)
						background-color: $theme_color
						color: #fff
						margin-left: 15px
						border-radius: $border_radius
</style>
