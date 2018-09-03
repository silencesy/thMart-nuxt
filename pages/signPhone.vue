<template>
	<div class="">
		<signStep />
		<div class="sign">
			<div class="phone">
				<input type="text" placeholder="Enter phone number" name="" value="">
				<button>Send Code</button>
			</div>
			<div class="code">
				<input type="text" placeholder="Enter verification code" value="" name="">
			</div>
			<div class="btn">
				<button>Next Step</button>
			</div>
			<p>Have an account already? <nuxt-link to="">Log in</nuxt-link></p>
		</div>
	</div>
</template>
<script>
	import signStep from '~/components/layout/signStep.vue'
	export default {
		layout: 'signHome',
		data() {
			return {
				
			}
		},
		components: {
			signStep
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
	.sign 
		width: 413px
		margin: 0 auto
		padding-left: 5px
		.phone
			overflow: hidden
			input
				float: left
				@include wh(298px, 36px)
				padding-left: 10px
				border-radius: $border_radius
			button
				float: left
				background-color: $theme_color
				@include whch(90px, 36px, center, 36px)
				font-size: 14px
				color: #fff
				border-radius: $border_radius
				margin-left: 15px
		.code
			input
				@include wh(400px, 36px)
				padding-left: 10px
				margin-top: 15px
				border-radius: $border_radius 
		.btn 
			@include whch(400px, 36px, center, 36px)
			background-color: $theme_color
			margin-top: 25px
			border-radius: $border_radius
			button
				color: #fff
				background: no-repeat
				font-size: 16px
		p 
			@include sc(14px, $describe_color)
			text-align: center
			margin-top: 20px
			margin-bottom: 200px
			a 
				@include sc(14px, $theme_color)
</style>