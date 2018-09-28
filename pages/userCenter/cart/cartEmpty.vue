<template>
	<div class="cart">
		<div class="container">
			<div class="cartEmptyBox">
				<div class="cartEmpty">
					<p>Your cart is currently emity</p>
					<nuxt-link to="/">Start Shopping</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		layout: 'userHome',
		// head: {
		//     title: 'thmart',
		//     meta: [
		//       { hid: 'description', name: 'description', content: 'Nuxt.js project' }
		//     ]
		// },
		// middleware: 'userAuth',
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
	.cart 
		.container			
			.cartEmptyBox
				position: relative
				width: 100%
				height: 600px
				text-align: center
				.cartEmpty					
					@include center
					p
						@include sc(14px, #999)
						margin-bottom: 20px
					a
						display: inline-block 
						@include whch(120px, 36px, center, 36px)
						background-color: $theme_color
						color: #fff
						border-radius: $border_radius
</style>
