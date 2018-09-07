<template>
	<div class="shopHome container">
		<rank @Sort = "Sort" :isShowObj="isShowObj" />
		<goodsItem />
		<div class="changePage">
			<el-pagination
			  	background
			  	layout="prev, pager, next"
			  	:total="300">
			</el-pagination>
		</div>
	</div>
</template>
<script>
	import rank from '~/components/base/rank'
	import goodsItem from '~/components/base/goodsItem'
	export default {
		layout: 'shopHome',
		data() {
			return {
				isShowObj: {
                    priceIsShow: true
				}
			}
		},
		components: {
			rank,
			goodsItem
		},
		mounted() {

			
		},
	  	computed: {  
		    
	  	},
		methods: {
			Sort(index) {
				console.log(index);
			}
		}
	}
</script>
<style lang='sass' scoped>
	@import '~/assets/sass/common.sass'



</style>