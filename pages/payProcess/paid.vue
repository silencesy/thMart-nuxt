<template>
	<div class="aliPay">
		<div class="container">
			<payNav :isShowObj="isShowObj" />
			<div class="payBox">
				<div>
					<p>
						<span>Order No. : </span>
						<span>2017121245326</span>
					</p>
					<p>
						<span>Ordered : </span>
						<span>2018-08-08 15:23:45</span>
					</p>
					<p>
						<span>Receiver : </span>
						<span>Amanda 136****3567</span>
					</p>
					<p>
						<span>Address : </span>
						<span>上海市黄浦区蒙自路169号智造局一期 2号楼305</span>
					</p>
					<p>
						<span>Final Price :</span>
						<span class="price">¥ 398</span>
					</p>
					<p>
						<span class="iconfont icon-duihao"></span>
						<span class="paid">Payment successful</span>
					</p>
					<div>
						<button class="backOrder">Order List</button>
						<button class="backHome">Home</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	//支付进度条组件
	import payNav from '~/components/layout/payNav.vue'
	export default {
		layout: 'payHome',
		data() {
			return {
				isShowObj: {
                    oneIsShow: false,
                    twoIsShow: false,
                    threeIsShow: true
				},
			}
		},
		middleware: 'userAuth',
		components: {
			payNav
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
	.aliPay
		background: url(~static/images/bg.png) no-repeat
		@include wh(100%, 100%)
		background-size: 100% 100%
		.container
			.payBox
				margin: 10px 0 70px 0
				border: $border
				box-shadow: 0 0 5px #dfdfdf
				position: relative
				width: 100%
				height: 365px
				text-align: center
				background: #fff
				>div 
					@include center
					>p 
						overflow: hidden
						margin-bottom: 15px
						margin-left: 10px
						span
							float: left
						span:first-child
							width: 105px
							padding-right: 15px
							text-align: right
						span:nth-child(2)
							width: 270px
							text-align: left
						.price 
							color: $theme_color
						.icon-duihao
							color: #00B700
							font-weight: 600
							font-size: 18px
						.paid
							font-size: 18px
					>div 
						width: 100%
						padding-top: 5px
						overflow: hidden
						button
							display: block
							color: #fff
							@include whch(180px, 40px, center, 40px)
							background-color: $theme_color
							border-radius: $border_radius
							float: left
						.backHome
							margin-left: 30px

</style>
