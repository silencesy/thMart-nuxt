<template>
	<div class="user">
		<orderStatus />
	</div>
</template>
<script>
	import orderStatus from "~/components/user/orderStatus"
	export default {
		layout: 'userHome',
		data() {
			return {
				titleIsShow: true,
			}
		},
		components: {
			orderStatus
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
