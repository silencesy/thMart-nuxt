<template>
	<div class="goodsContent">
		<div class="bread">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '~pages/index' }">Home</el-breadcrumb-item>
			  <el-breadcrumb-item>Amor flora</el-breadcrumb-item>
			  <el-breadcrumb-item>Summer Berry Afternoon Tea…</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="productDetails container">
			<div class="goodsDetails">
				<!-- 左边 -->
				<div class="goodImg goodsLeft"> 
				    <img src="~static/images/flower.jpg" alt="">
				</div>
				<!-- 右边 -->
				<div class="goodsRight">
					<p>Summer Berry Afternoon Tea, Fairmont Peace Hotel Summer Berry Afternoon Tea, Fairmont Peace Hotel</p>
					<div class="box">
						<ul class="list">
							<li>
								<span>Price</span>
								<div>
									<el-badge value="new" class="item">
									  	<el-button size="small">¥ 14999</el-button>
									</el-badge>
									<del>¥ 15999</del>
								</div>
							</li>
							<li>
								<span></span>
								<div>
									
								</div>
							</li>
						</ul>						
					</div>
				</div>
			</div>
			<moreGoods />
		</div>
	</div>
</template>
<script>
	import moreGoods from "~/components/base/moreGoods"
	export default {
		layout: 'shopHome',
		props: {

	    },
		data(){
            return{

	        }
        },
		components: {
			moreGoods
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
	.goodsContent
		.bread 
			width: 100%
			background-color: #eee
			margin-bottom: 15px
			.el-breadcrumb
				@include hh(36px, 36px)
				width: 1200px
				margin: 0 auto
		.productDetails 
			overflow: hidden 
			.goodsDetails 
				float: left
				overflow: hidden 
				.goodsLeft 
					float: left
					img 
						@include wh(400px, 400px)
				.goodsRight 
					float: left
					width: 496px 
					p 
						font-size: 16px
						line-height: 24px
					.box 
						width: 498px	
						.list
							overflow: hidden
							li:first-child 
								background-color: #eee
								height: 48px
								span
									margin-top: 15px
									@include sc(14px, #666)
								>div 
									margin-top: 13px
									del 
										@include sc(14px, #999)
										margin-left: 75px

							li
								margin-top: 20px
								span 
									width: 115px
									float: left
									padding-left: 10px
								>div 
									float: left







</style>