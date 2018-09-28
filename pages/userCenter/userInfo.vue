<template>
	<div class="user">
		<div class="container">
			<userLayout active="userInfo">
				<div class="userInfo" slot="userContent">
					<div class="title">Personal Info</div>
					<div class="info">
						<div>
							<span>Profile Photo :</span>
							<div class="photo">
								<div><img :src="$store.state.headimgurl" alt=""></div>
								<button class="photoBtn">Edit</button>
							</div>
						</div>
						<div>
							<span>Username :</span>
							<div class="name">
								<span>{{$store.state.nickname}}<i class="iconfont icon-bianji"></i></span>
							</div>
						</div>
						<div>
							<span>Change Password :</span>
							<div class="password">
								<span>Reset</span>
							</div>
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
		middleware: 'userAuth',
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
					padding-bottom: 13px 
					border-bottom: $border
				.info 
					margin-top: 20px
					>div 
						margin-bottom: 30px
						overflow: hidden 
						>span 
							float: left 
							width: 155px
							display: inline-block
						>div 
							float: left
							width: 810px
							color: #666
						.photo
							>div 
								overflow: hidden
								@include wh(80px, 80px)
								float: left
								img 
									@include wh(80px, 80px)
									border-radius: 50%
							.photoBtn 
								float: left
								@include whch(100px, 30x, center, 30px)
								background-color: #fff 
								@include sc(16px, #666)
								border: $border
								border-radius: $border_radius
								display: inline-block 
								margin-top: 30px
								margin-left: 30px
						.name, .password
							span 
								cursor: pointer
					>div:first-child 
						>span 
							margin-top: 35px
					.icon-bianji 
						padding-left: 30px


</style>
