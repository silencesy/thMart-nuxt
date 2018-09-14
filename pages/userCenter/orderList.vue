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
					<div class="orderTitle">
						<span>Product Name</span>
						<span>Price</span>
						<span>Quantity</span>
						<span>Final Price</span>
						<span>Status</span>
					</div>
					<userOrder flag="pay" type="unpaid" />
					<userOrder flag="details" type="closed" />
					<userOrder flag="details" type="unshipped" />
					<userOrder flag="track" type="progress" />
					<userOrder flag="track" type="shipped" />
				</div>
			</userLayout>
			<goodsItem :titleIsShow="titleIsShow" />
		</div>
	</div>
</template>
<script>
	import goodsItem from "~/components/base/goodsItem"
	import userLayout from "~/components/user/userLayout"
	import userOrder from "~/components/user/userOrder"
	export default {
		layout: 'userHome',
		data() {
			return {
				titleIsShow: true,

			}
		},
		components: {
			goodsItem, 
			userLayout,
			userOrder
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
			.orderTitle 
				border-bottom: $border
				span 
					width: 155px
					text-align: center
					display: inline-block
					padding: 15px 0 
				span:first-child 
					width: 320px
</style>
