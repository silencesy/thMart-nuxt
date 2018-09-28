<template>
	<div class="coupons">
		<div class="container">
			<userLayout>
				<div class="couponsContent" slot="userContent">
					<div class="title">thMart-Coupons</div>
					<div class="noCoupons">
						<p>More coupons are on the way!</p>
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
	.coupons 
		.container
			.couponsContent
				.title
					padding-bottom: 15px 
					border-bottom: $border
				.noCoupons 
					position: relative
					height: 385px
					p 
						@include center
						color: #999



</style>
