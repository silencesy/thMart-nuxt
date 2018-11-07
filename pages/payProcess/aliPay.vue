<template>
	<div class="aliPay">
		<div class="container">
			<payNav :isShowObj="isShowObj" />
			<div class="payBox">
				<div>
					<p>
						<span>Order No. : </span>
						<span>{{details.orderNumber}}</span>
					</p>
					<p>
						<span>Ordered : </span>
						<span>{{details.orderTime}}</span>
					</p>
					<p>
						<span>Receiver : </span>
						<span>{{details.fullName}} {{details.phone}}</span>
					</p>
					<p>
						<span>Address : </span>
						<span>{{details.province}}{{details.city}}{{details.regionDetail}}</span>
					</p>
					<p>
						<span>Final Price :</span>
						<span class="theme_color">¥ {{details.priceTotal}}</span>
					</p>
					<div>
						<button class="iconfont icon-zhifubao" @click="alipay"></button>
						<button class="iconfont icon-weixinzhifu"></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	// 接口API
	import interfaceApi from '~/plugins/interfaceApi'
	//支付进度条组件
	import payNav from '~/components/layout/payNav.vue'
	export default {
		layout: 'payHome',
		data() {
			return {
				isShowObj: {
                    oneIsShow: false,
                    twoIsShow: true,
                    threeIsShow: false
				},
			}
		},
		middleware: 'userAuth',
		async asyncData ({app,query}) {
			let param = {
				orderNumber: query.orderNumber,
			}
		 	const details = await app.$axios.post(interfaceApi.payOrderDetail,param);
  			return { 
  				details: details.data.data
            }
		},
		components: {
			payNav
		},
		mounted() {
			if (window.history && window.history.pushState) {
				history.pushState(null, null, document.URL);
				window.addEventListener('popstate', this.goBack, false);
			}
		},
		destroyed(){
			window.removeEventListener('popstate', this.goBack, false);
		},
	  	computed: {  
		    
	  	},
		methods: {
			alipay() {
				window.location.href = "http://proj6.thatsmags.com/thmartApi/Alipay/alipayapiPc?orderNumber=" + this.details.orderNumber;
			},
			goBack(){
			    this.$router.replace({path: '/payProcess/unPaid', query: {orderNumber: this.details.orderNumber}});
			}

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
						span
							float: left
						span:first-child
							width: 105px
							padding-right: 15px
							text-align: right
						span:nth-child(2)
							width: 270px
							text-align: left
					>div 
						width: 100%
						padding-left: 63px
						padding-top: 5px
						button
							display: block
							color: #fff
							@include whch(250px, 40px, center, 40px)
						.icon-zhifubao
							background-color: #2196f3 
							margin-bottom: 15px
							font-size: 28px
							color: #fff
							border-radius: 4px
						.icon-weixinzhifu 
							background-color: #4caf50
							font-size: 29px
							border-radius: 4px

</style>
