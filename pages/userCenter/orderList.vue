<template>
	<div class="user">
		<div class="container">
			<userLayout>
				<div class="" slot="userContent">
					<div class="userTitle">
		                <ul>
		                    <li>
		                        <nuxt-link to="/">All</nuxt-link>
		                    </li>
		                    <li>
		                        <nuxt-link to="/">Unpaid</nuxt-link>
		                    </li>
		                    <li>
		                        <nuxt-link to="/">Unshipped</nuxt-link>
		                    </li>
		                    <li>
		                        <nuxt-link to="/">In Progress</nuxt-link>
		                    </li>
		                    <li>
		                        <nuxt-link to="/">Shipped</nuxt-link>
		                    </li>
		                </ul>               
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
			.userTitle
				background-color: #eee
				width: 968px
				overflow: hidden
				ul 
					overflow: hidden
				li 
					width: 20%
					float: left 
					text-align: center
					a 
						width: 100% 
						padding: 20px 0
						display: inline-block 
					a:after 
						content: "|"
						float: right
						color: #dfdfdf
				li:last-child
					a:after
						content: " "

</style>
