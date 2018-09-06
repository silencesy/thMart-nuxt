<template>
	<div class="articleContent">
		<div class="bread">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '~pages/index' }">Home</el-breadcrumb-item>
			  <el-breadcrumb-item>Editor’s Pick</el-breadcrumb-item>
			  <el-breadcrumb-item>Get Premium Italian Coffee …</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container articleDetails">
			<div class="articlePer">
				<div class="content">
					<h3>Get Premium Italian Coffee Delivered Right to Your Doorstep</h3>
					<span>2018.08.08</span>
					<div class="text">
						<p>Looking to mix up your morning coffee routine? thMart has you covered with a range of products from Italian coffee brand Illy.</p>
						<div><img src="~static/images/flower.jpg" alt=""></div>
						<p>Here are some Illy Coffee products currently available on thMart...</p>
						<p>No need to run to the store to pick up your ground coffee, it can now be delivered right to your home. Illy Coffee Drip Grind is available in medium and dark roasts, and each set comes in packs of four. Start your morning the right way with this drip coffee, which is easy to use and allows you to brew single cups of coffee.</p>
					</div>
					<div class="goods">
						<div><img src="~static/images/flower.jpg" alt=""></div>
						<div>
							<p>MEE HOTG Honey Refill Bundle, 3 Flavors, 21 Bags in 3 Refill Packs</p>
							<div>
								<span>¥14999</span>
								<button>Buy Now</button>
							</div>
						</div>						
					</div>
				</div>
			</div>
			<moreArticle />
		</div>
	</div>
</template>
<script>
	import moreArticle from "~/components/base/moreArticle"
	export default {
		layout: 'indexHome',
		data(){
            return{

	        }
        },
		components: {
			moreArticle
		},
		mounted() {

			
		},
	  	computed: {  
		    
	  	},
		methods:{

        }
	}
</script>
<style lang='sass' type="text/css" scoped>
	@import '~/assets/sass/common.sass'
	.articleContent
		.bread 
			width: 100%
			background-color: #eee
			margin-bottom: 15px
			.el-breadcrumb
				@include hh(36px, 36px)
				width: 1200px
				margin: 0 auto
		.articleDetails 
			overflow: hidden
			.articlePer	
				float: left
				width: 942px
				border: $border
				border-radius: $border_radius
				padding: 15px
				.content 
					width: 750px
					margin: 0 auto
					h3 
						font-size: 24px                                                         
						font-weight: 500
						text-align: center
					span 
						@include sc(14px, #666)
						display: block
						margin: 20px 0
						text-align: center
					.text 
						div
							width: 750px
							text-align: center
							img 
								max-width: 100%
								display: inline-block
								margin: 15px 0
						p 
							@include sc(14px, #666)
							line-height: 24px
					.goods
						overflow: hidden
						background-color: #eee
						@include wh(750px, 120px)
						padding: 15px
						margin-top: 15px
						>div 
							float: left
						div:first-child
							@include wh(88px, 88px)
							margin-right: 15px
							img 
								@include wh(88px, 88px)
						div:last-child
							overflow: hidden
							width: 616px
							p 
								overflow: hidden
								text-overflow: ellipsis
								display: -webkit-box
								-webkit-box-orient: vertical
								-webkit-line-clamp: 2
								line-height: 22px
								min-height: 44px
							div
								overflow: hidden
								span
									float: left
									@include sc(16px, $theme_color)
								button
									float: right
									@include whch(180px, 40px, center, 40px)
									@include sc(16px, #fff)
									border-radius: $border_radius
									background-color: $theme_color
									margin-top: 7px



</style>