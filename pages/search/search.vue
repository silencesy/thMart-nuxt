<template>
	<div class="search">
		<div class="container goodsListBox">
			<div class="goodsList">
				<div class="searchNav tabBox">
					<el-tabs v-model="activeName" @tab-click="handleClick">
						<!-- 搜索商品 -->
					    <el-tab-pane label="All Categories" name="categories">
							<div class="item">
								<rank />
							</div>
							<goodsItem :goodsItemStyleObj="goodsItemStyleObj" />
							<div class="changePage">
								<el-pagination
								  	background
								  	layout="prev, pager, next"
								  	:total="300">
								</el-pagination>
							</div>
					    </el-tab-pane>
					    <!-- 搜索商户 -->
					    <el-tab-pane label="Shops" name="shops">
					    	<div class="searchShop">
					    		<div class="shopList">
					    			<div>
					    				<p><img src="~/static/images/flower.jpg" alt=""></p>
					    				<span>Shops name</span>
					    			</div>
					    			<div>
					    				<button>Enter</button>
					    			</div>
					    		</div>
					    		<div class="shopList">
					    			<div>
					    				<p><img src="~/static/images/flower.jpg" alt=""></p>
					    				<span>Shops name</span>
					    			</div>
					    			<div>
					    				<button>Enter</button>
					    			</div>
					    		</div>
					    	</div>
							<div class="item">
								<rank />
							</div>
							<goodsItem :goodsItemStyleObj="goodsItemStyleObj" />
							<div class="changePage">
								<el-pagination
								  	background
								  	layout="prev, pager, next"
								  	:total="300">
								</el-pagination>
							</div>
					    </el-tab-pane>
					    <!-- 搜索文章 -->
					    <el-tab-pane label="Editor’s Pick" name="article">
							<div class="item">
								<rank />
							</div>
							<articleItem />
							<div class="changePage">
								<el-pagination
								  	background
								  	layout="prev, pager, next"
								  	:total="300">
								</el-pagination>
							</div>
					    </el-tab-pane>
					</el-tabs>
				</div>
			</div>
			<moreGoods />
		</div>
	</div>
</template>
<script>
	import moreGoods from "~/components/base/moreGoods"
	import rank from "~/components/base/rank"
	import goodsItem from "~/components/base/goodsItem"
	import articleItem from "~/components/base/articleItem"
	export default {
		layout: 'searchHome',
		data() {
			return {
				activeName: 'categories',
				goodsItemStyleObj: {
					width: '172px',
					height: '275px'
				}
			}
		},
		components: {
			moreGoods,
			rank,
			goodsItem,
			articleItem
		},
		mounted() {

			
		},
	  	computed: {  
		    
	  	},
		methods: {
			handleClick(tab, event) {
	        	console.log(tab, event);
	      	}
		}
	}
</script>

<style lang='sass' scoped>
	@import '~/assets/sass/common.sass'
	.search
		.goodsListBox 
			overflow: hidden
			.goodsList
				float: left
				width: 942px
	.searchShop
		border: $border
		border-radius: $border_radius
		margin-bottom: 15px
		width: 942px
		padding: 15px
		overflow: hidden
		.shopList
			overflow: hidden
			background-color: #eee 
			padding: 15px
			margin-bottom: 15px
			>div:first-child
				float: left
				p 
					@include wh(60px, 60px)	
					display: inline-block
					img
						@include wh(60px, 60px)
				span
					padding-left: 20px
					display: inline-block 
					vertical-align: top 
					margin-top: 25px
			>div:nth-child(2)
				float: right
				margin-top: 20px
				button
					@include whch(100px, 30px, center, 30px)
					@include sc(16px, #fff)
					background-color: $theme_color
					border-radius: $border_radius
		.shopList:last-child
			margin-bottom: 0

</style>