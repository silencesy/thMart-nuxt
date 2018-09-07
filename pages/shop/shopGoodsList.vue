<template>
	<div class="shopHome container">
		<rank @alert = "alert" :isShowObj="isShowObj" />
		<goodsItem />
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
					rankSearchIsShow: false,
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
			alert() {
				alert(1)
			}
		}
	}
</script>
<style lang='sass' scoped>
	@import '~/assets/sass/common.sass'



</style>