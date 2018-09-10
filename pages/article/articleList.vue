<template>
	<div class="articleContent">
		<div class="container articleListBox">
			<div class="articleList">
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
			</div>
			<moreGoods />
		</div>
	</div>
</template>
<script>
	import moreGoods from "~/components/base/moreGoods"
	import rank from "~/components/base/rank"
	import articleItem from "~/components/base/articleItem"
	export default {
		layout: 'indexHome',
		props: {

	    },
		data(){
            return{
            	num1: 1,
			
	        }
        },
		components: {
			moreGoods,
			rank,
			articleItem
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
		.articleListBox 
			overflow: hidden
			margin-top: 15px
			.articleList
				float: left
				width: 942px

</style>