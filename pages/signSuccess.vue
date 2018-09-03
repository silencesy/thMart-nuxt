 <template>
	<div class="">
		<signStep flag="3"/>
		<div class="sign">
			<div>
				<i class="iconfont icon-chenggongcopy-"></i>
				<p>注册成功，<nuxt-link to="">开始购物！</nuxt-link></p>
			</div>
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
		>div
			text-align: center
			margin-bottom: 240px
			i 
				display: block
				@include sc(36px, #6EA55D)
			p 
				margin-top: 20px
				a 
					color: $theme_color

</style>