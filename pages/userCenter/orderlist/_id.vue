<template>
	<div class="user">
		<div class="container">
			<userLayout active="orderList">
				<div class="" slot="userContent">
					<div class="userTitle">
		                <ul>
		                    <li :class="{active: active=='all'}">
		                        <nuxt-link to="/userCenter/orderlist/all">All</nuxt-link>
		                    </li>
		                    <li :class="{active: active=='unpaid'}">
		                        <nuxt-link to="/userCenter/orderlist/unpaid">Unpaid</nuxt-link>
		                    </li>
		                    <li :class="{active: active=='unshipped'}">
		                        <nuxt-link to="/userCenter/orderlist/unshipped">Unshipped</nuxt-link>
		                    </li>
		                    <li :class="{active: active=='progress'}">
		                        <nuxt-link to="/userCenter/orderlist/progress">In Progress</nuxt-link>
		                    </li>
		                    <li :class="{active: active=='shipped'}">
		                        <nuxt-link to="/userCenter/orderlist/shipped">Shipped</nuxt-link>
		                    </li>
		                </ul>               
		            </div>
					<div class="orderTitle">
						<span>Product Name</span>
						<span>Price</span>
						<span>Quantity</span>
						<span>Final Price</span>
						<span>Status</span>
					</div>
					<div v-for="item in orderList" :key="item.orderNumber">
						<div v-if="item.status == 0">
							<userOrder :orderDataList="item" flag="pay" type="unpaid" />
						</div>
						<div v-else-if="item.status == 1">
							<userOrder :orderDataList="item" flag="details" type="unshipped" />
						</div>
						<div v-else-if="item.status == 2">
							<userOrder :orderDataList="item" flag="track" type="progress" />
						</div>
						<div v-else-if="item.status == 3">
							<userOrder :orderDataList="item" flag="track" type="shipped" />
						</div>
						<div v-else-if="item.status == 4">
							<userOrder :orderDataList="item" flag="details" type="closed" />
						</div>
						<!-- <userOrder flag="pay" type="unpaid" />
						<userOrder flag="details" type="closed" />
						<userOrder flag="details" type="unshipped" />
						<userOrder flag="track" type="progress" />
						<userOrder flag="track" type="shipped" /> -->
					</div>
					
				</div>
			</userLayout>
			<goodsItem :titleIsShow="titleIsShow" />
		</div>
	</div>
</template>
<script>
	// 接口API
	import interfaceApi from '~/plugins/interfaceApi'
	import goodsItem from "~/components/base/goodsItem"
	import userLayout from "~/components/user/userLayout"
	import userOrder from "~/components/user/userOrder"
	export default {
		layout: 'userHome',
		middleware: 'userAuth',
		validate ({ params }) {
		// Must be a number
			return params.id == 'all' || params.id == 'unpaid' || params.id == 'unshipped' || params.id == 'progress' || params.id == 'shipped';
		},
		data() {
			return {
				titleIsShow: true,
				status: ''
			}
		},
		async asyncData ({app,params}) {
			// 确定订单类型
			let status;
			if (params.id == 'all') {
				status = '';
			} else if (params.id == 'unpaid') {
				status = 0;
			} else if (params.id == 'unshipped') {
				status = 1;
			} else if (params.id == 'progress') {
				status = 2;
			} else if (params.id == 'shipped') {
				status = 3;
			}
			const param = {
				status: status,
				page: 1,
				pageSize: 100
			}
		 	// const goodsList = await app.$axios.post(interfaceApi.CollectList,goodsPara);
		 	const orderList = await app.$axios.post(interfaceApi.orderList,param);
  			return {
  				active: params.id,
  				status: status,
  				orderList: orderList.data.data.data
  			}
		},
		components: {
			goodsItem, 
			userLayout,
			userOrder
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
				li.active
					a
						color: $theme_color
			.orderTitle 
				border-bottom: $border
				span 
					width: 155px
					text-align: center
					display: inline-block
					padding: 15px 0 
				span:first-child 
					width: 320px
</style>
