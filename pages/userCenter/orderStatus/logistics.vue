<template>
	<div class="logistics">
		<div class="statusInfo container">
			<p>
				<span><img src="~/static/images/icon-yuandian.png" alt="">2018-08-17 14:37:13</span>
				<span>您的订单在【上海青浦分拣中心】发货完成，准备送往【上海望云站】</span>
			</p>
			<p>
				<span><i class="iconfont icon-dot"></i>2018-08-17 14:22:13</span>
				<span>You have placed the order. Please make your payment within 15 minutes, or otherwise the order will be cancelled.</span>
			</p>
		</div>
	</div>
</template>
<script>
	export default {
		layout: 'userHome',
		data() {
			return {
				
			}
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
	.logistics
		.statusInfo
			margin-bottom: 400px
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
