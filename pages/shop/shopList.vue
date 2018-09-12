<template>
	<div class="shopList">
		<div class="container shopListBox">
			<div class="box">
				<div class="featured">
					<div class="title">Featured Shops</div>
					<div class="shops">
						<div>
							<nuxt-link to="/"><img src="~/static/images/flower.jpg" alt=""></nuxt-link>
							<nuxt-link to="/"><img src="~/static/images/flower.jpg" alt=""></nuxt-link>
							<nuxt-link to="/"><img src="~/static/images/flower.jpg" alt=""></nuxt-link>
							<nuxt-link to="/"><img src="~/static/images/flower.jpg" alt=""></nuxt-link>
							<nuxt-link to="/"><img src="~/static/images/flower.jpg" alt=""></nuxt-link>
						</div>
						<p><span>More</span></p>
					</div>
				</div>
				<rank :isShowObj="isShowObj" />
				<div class="normalShop">
					<div>
						<nuxt-link to="/"><img src="~/static/images/flower.jpg" alt=""></nuxt-link>
						<nuxt-link to="/"><img src="~/static/images/flower.jpg" alt=""></nuxt-link>
						<nuxt-link to="/"><img src="~/static/images/flower.jpg" alt=""></nuxt-link>
						<nuxt-link to="/"><img src="~/static/images/flower.jpg" alt=""></nuxt-link>
						<nuxt-link to="/"><img src="~/static/images/flower.jpg" alt=""></nuxt-link>
						<nuxt-link to="/"><img src="~/static/images/flower.jpg" alt=""></nuxt-link>
					</div>
				</div>
				<div class="changePage">
					<el-pagination
					  	background
					  	layout="prev, pager, next"
					  	:total="300">
					</el-pagination>
				</div>
			</div>
			<moreGoods />
		</div>
	</div>
</template>
<script>
	import moreGoods from "~/components/base/moreGoods"
	import rank from "~/components/base/rank"
	export default {
		layout: 'indexHome',
		data() {
			return {
				isShowObj: {
                    priceIsShow: false,
                    saleIsShow: false,
                    rankSearchIsShow: true
				},
			}
		},
		components: {
			moreGoods,
			rank
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
	.shopList 
		.shopListBox 
			margin-top: 15px
			overflow: hidden
			.box
				float: left
				width: 944px
				.featured
					width: 944px
					border: $border
					margin-bottom: 15px
					.title 
						background-color: #eee 
						@include whch(942px, 35px, center, 35px)
					.shops 
						overflow: hidden
						padding: 15px 0 15px 15px
						>div
							overflow: hidden
							a 
								@include wh(172px, 172px)
								display: inline-block
								float: left
								border: $border
								margin-right: 13px
								margin-bottom: 15px
								img 
									@include wh(170px, 170px)
						>p 
							width: 100%
							text-align: center
							span 
								padding-top: 15px
								display: inline-block
								width: 150px
								cursor: pointer
								width: 200px
								@include sc(14px, #666)
				.normalShop
					overflow: hidden 
					margin-top: 15px
					>div
						overflow: hidden
						margin-right: -10px
						a 
							float: left
							display: inline-block
							border: $border
							@include wh(149px, 149px)
							margin-right: 10px
							margin-bottom: 10px
							img 
								@include wh(147px, 147px) 
					
</style>