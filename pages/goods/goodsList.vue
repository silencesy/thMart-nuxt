<template>
	<div class="goodsContent">
		<div class="bread">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item to="/">Home</el-breadcrumb-item>
			  <el-breadcrumb-item>Flowers
			  </el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container goodsListBox">
			<div class="goodsList">
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
			</div>
			<moreGoods />
		</div>
	</div>
</template>
<script>
	import moreGoods from "~/components/base/moreGoods"
	import rank from "~/components/base/rank"
	import goodsItem from "~/components/base/goodsItem"
	export default {
		layout: 'indexHome',
		props: {

	    },
		data(){
            return{
            	num1: 1,
				goodsItemStyleObj: {
					width: '172px',
					height: '275px'
				}
	        }
        },
		components: {
			moreGoods,
			rank,
			goodsItem
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
		.goodsListBox 
			overflow: hidden
			.goodsList
				float: left
				width: 942px

</style>