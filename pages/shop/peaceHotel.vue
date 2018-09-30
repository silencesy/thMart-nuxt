<template>
	<div class="shopHome peaceHotel">
		<div class="peaceLunbo">
		  	<el-carousel :interval="4000" type="card" height="410px">
		    	<el-carousel-item>
		      		<img src="~/static/images/banner_01.jpg" alt="">
		    	</el-carousel-item>
		    	<el-carousel-item>
		      		<img src="~/static/images/banner_02.jpg" alt="">
		    	</el-carousel-item>
		    	<el-carousel-item>
		      		<img src="~/static/images/banner_03.jpg" alt="">
		    	</el-carousel-item>
		  	</el-carousel>			
		</div>		
		<div class="hotelContop">
			<div class="container">
				<div class="">
					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    import shopNav from '~/components/layout/shopNav.vue'
	export default {
		layout: 'shopHome',
		data() {
			return {

			}
		},
		components: {
			shopNav,
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


</style>