<template>
	<div class="aliPay">
		<div class="container">
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
						<span>¥ 398</span>
					</p>
					<div>
						<button class="iconfont icon-zhifubao"></button>
						<button class="iconfont icon-weixinzhifu"></button>
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
		middleware: 'userAuth',
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
	.aliPay
		.container
			.payBox
				margin: 10px 0 70px 0
				border: $border
				box-shadow: 0 0 5px #dfdfdf
				position: relative
				width: 100%
				height: 365px
				text-align: center
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
						.icon-weixinzhifu 
							background-color: #4caf50
							font-size: 29px

</style>
