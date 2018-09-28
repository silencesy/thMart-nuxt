<template>
	<div class="addAddress">
		<div class="container">
			<userLayout>
				<div class="addInfo" slot="userContent">
					<div class="title">Address Book</div>
					<div>
						<div>
							<label><b>*</b></label>
							<input type="text">
						</div>
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
	.addAddress
		.container
			.addInfo
				.title
					padding-bottom: 13px 
					border-bottom: $border



</style>
