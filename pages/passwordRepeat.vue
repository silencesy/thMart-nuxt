<template>
	<div class="">
		<passwordStep flag="2" />
		<div class="pW">
			<div class="password">
				<input type="text" placeholder="Enter password" name="" value="">
			</div>
			<div class="rePassword">
				<input type="text" placeholder="Please re-enter your password" value="" name="">
			</div>
			<div class="btn">
				<button>Next Step</button>
			</div>
		</div>
	</div>
</template>
<script>
	import passwordStep from '~/components/layout/passwordStep.vue'
	export default {
		layout: 'passwordHome',
		data() {
			return {
				
			}
		},
		components: {
			passwordStep
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
	.pW
		width: 413px
		margin: 0 auto
		padding-left: 5px
		.password
			overflow: hidden
			input
				float: left
				@include wh(400px, 36px)
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
		.rePassword
			input
				@include wh(400px, 36px)
				padding-left: 10px
				margin-top: 15px
				border-radius: $border_radius 
		.btn 
			@include whch(400px, 36px, center, 36px)
			background-color: $theme_color
			margin-top: 25px
			margin-bottom: 200px
			border-radius: $border_radius
			button
				color: #fff
				background: no-repeat
				font-size: 16px
</style>