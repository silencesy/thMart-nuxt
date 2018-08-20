<template>
	<div>
		{{project}}
		<div @click="aaa">123123</div>
		{{project2}}
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				project: {},
				project2: {}
			}
		},
		asyncData (context) {
		    return axios.post('https://proj6.thatsmags.com/thmartApi/Ads/Home/list')
		    .then((res) => {
			    return { project: res.data }
    		})
		},
		methods: {
			aaa() {
				axios.post('https://proj6.thatsmags.com/thmartApi/Ads/Home/list')
			    .then((res) => {
				    this.project2 = res.data;
	    		})
			}
		}
	}
</script>
<style scoped>
	div {
		color: $theme_color;
		width: 100px;
		height: 100px;
	}
</style>