<template>
	<div class="user">
		<div class="container">
			<userLayout>
				<div class="userInfo" slot="userContent">
					<div class="title">Personal Info</div>
					<div>
						
					</div>
				</div>
			</userLayout>
			<goodsItem :titleIsShow="titleIsShow" />
		</div>
	</div>
</template>
<script>
	import goodsItem from "~/components/base/goodsItem"
	import userLayout from "~/components/user/userLayout"
	export default {
		layout: 'userHome',
		data() {
			return {
				titleIsShow: true,
			}
		},
		components: {
			goodsItem, 
			userLayout
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
	.user 
		.container
			.userInfo
				.title
					padding-bottom: 15px 
					border-bottom: $border



</style>
