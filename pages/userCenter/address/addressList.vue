<template>
	<div class="address">
		<div class="container">
			<userLayout>
				<div class="addressList" slot="userContent">
					<div class="title">
						<span>Address Book</span>
						<nuxt-link to="/">+ Add New Shipping Address</nuxt-link>
					</div>
					<div class="addressBox">
						<div class="box">
							<div class="left">
								<p>
									<span>Name</span>
									<span>鞋带</span>
								</p>
								<p>
									<span>Phone</span>
									<span>176021471111</span>
								</p>
								<p>
									<span>Address</span>
									<span>上海市黄浦区蒙自路169号</span>
								</p>
							</div>
							<div class="right">
								<!-- 去掉default这个class 取消默认 -->
								<p class="default noselect"><i class="iconfont icon-duihao"></i> Default</p>
								<p class="noselect edit"><i class="iconfont icon-bianji"></i> Edit</p>
								<p class="noselect delete"><i class="iconfont icon-shanchu"></i> Delete</p>
							</div>
						</div>
					</div>
					<!-- 没有地址的情况 -->
					<!-- <div class="noAddress"><p>No more address</p></div> -->
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
	.address
		.container
			.addressList
				.title
					overflow: hidden
					border-bottom: $border
					padding-bottom: 15px
					span
						float: left
						display: inline-block 
						padding-top: 5px
					a
						float: right
						padding: 3px 7px
						border: $border
						color: #666
						border-radius: $border_radius
					a:hover 
						color: $theme_color
						border: 1px solid $theme_color
				.box 
					background-color: #eee
					margin-top: 15px
					overflow: hidden
					padding-left: 0
					.left
						float: left
						p 
							margin: 15px 0 15px 15px
							span:first-child
								display: inline-block
								width: 75px
							span:nth-child(2)
								font-size: 14px
								color: #666
						p:last-child
							margin-bottom: 0
					.right 
						float: right
						p 
							font-size: 14px
							color: #666
							cursor: pointer
							i 
								font-size: 16px
								padding-right: 5px
						p.default 
							color: $theme_color
							padding: 15px 15px 7px 15px
						p.edit 
							padding: 8px 15px 7px 15px
						p.delete 
							padding: 8px 15px 15px 15px
			.noAddress
				position: relative
				height: 376px
				p
					@include center
					color: #999
</style>
