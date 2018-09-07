<template>
	<div class="search">
		<div class="container goodsListBox">
			<div class="goodsList">
				<div class="searchNav">
					
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
		layout: 'searchHome',
		data() {
			return {
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
		methods: {

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
</style>