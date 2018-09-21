<template>
	<div class="user">
		<orderStatus type="3" :orderDetails="orderDetails">
			<div slot="statusInfo" class="statusInfo">
				<p>
					<span><img src="~/static/images/icon-yuandian.png" alt="">2018-08-17 14:37:13</span>
					<span>您的订单在【上海青浦分拣中心】发货完成，准备送往【上海望云站】</span>
				</p>
				<p>
					<span><i class="iconfont icon-dot"></i>2018-08-17 14:22:13</span>
					<span>您提交了订单，请在15分钟内支付，否则该笔订单将关闭。</span>
				</p>
			</div>
		</orderStatus>
	</div>
</template>
<script>
	// 接口API
	import interfaceApi from '~/plugins/interfaceApi'
	import orderStatus from "~/components/user/orderStatus"
	export default {
		layout: 'userHome',
		data() {
			return {
				
			}
		},
		middleware: 'userAuth',
		async asyncData ({app,query}) {
        	console.log(query.orderNumber)
			let param = {
				orderNumber: query.orderNumber,
			}
		 	const orderDetails = await app.$axios.post(interfaceApi.OrderDetail,param);
  			return { 
  				orderDetails: orderDetails.data.data
  			}
		},
		components: {
			orderStatus
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
		.statusInfo
			margin-left: 25px
			p 
				margin-bottom: 15px
				overflow: hidden 
				span 
					float: left
				span:first-child
					color: #666
					padding-right: 20px
					width: 193px
					line-height: 24px
					img 
						@include wh(13px, 13px)
						margin-right: 10px
					i.icon-dot
						color: #dfdfdf
						margin-right: 10px
						font-size: 13px
				span:nth-child(2)
					width: 500px
</style>
