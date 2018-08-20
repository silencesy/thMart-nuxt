<template>

	<div v-if="project">
	<el-carousel indicator-position="outside">
    <el-carousel-item v-for="(item,index) in project" :key="index">
	      <img :src="item.pic" alt="">
	    </el-carousel-item>
	  </el-carousel>
		
		<el-switch
		  v-model="value2"
		  active-color="#13ce66"
		  inactive-color="#ff4949">
		</el-switch>

	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				value1: true,
        value2: true,
		       	project: []
			}
		},
		async asyncData () {
			let data=await axios.post('https://proj6.thatsmags.com/thmartApi/Ads/Home/list')
      		return {project: data.data.data.article.data}
		},
		middleware: 'userAuth',
		methods: {
			
		}
	}
</script>
<style scoped>
	.BaseSwiper img {
		width: 100%;
		display: block;
	}
	.el-carousel__item img {
	    width: 100%;
	  }
  
</style>