<template>
	<div class="goodsContent">
		<!-- banner图 -->
		<div class="bannerPic"><img v-lazy="goodsListData.banner[0].pic" alt=""></div>
		<div class="bread">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item to="/">Home</el-breadcrumb-item>
			  <el-breadcrumb-item>GroupBuy
			  </el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container goodsListBox">
			<div class="goodsList">
				<div class="item">
					<rank :isShowObj="isShowObj" @Sort = "Sort"/>
				</div>
				<groupBuyItem :styleObj="goodsItemStyleObj" :hotData="goodsListData.data"/>
				<div class="changePage">
					<el-pagination
					  	background
					  	layout="prev, pager, next"
					  	:current-page.sync="currentPage"
						@size-change="handleSizeChange"
	      				@current-change="handleCurrentChange"
					  	:total="goodsListData.totalPage * 10">
					</el-pagination>
				</div>
			</div>
			<moreGroupGoods />
		</div>
	</div>
</template>
<script>
	import moreGroupGoods from "~/components/base/moreGroupGoods"
	import rank from "~/components/base/rank"
	import groupBuyItem from "~/components/base/groupBuyItem"
	// 接口API
	import interfaceApi from '~/plugins/interfaceApi'
	export default {
		layout: 'indexHome',
		head () {
    		return {
      			title: 'GroupBuy'
        	}
  		},
		validate ({ params }) {
		// Must be a number
			return /^\d+$/.test(params.id)
		},
		props: {

	    },
		data(){
            return{ 
            	num1: 1,
            	isShowObj: {
                    rankSearchIsShow: false,
                    priceIsShow: true,
                    saleIsShow: false
				},
				goodsItemStyleObj: {
					width: '178.5px',
					height: '275px'
				},
				currentPage: 1,
				param: {
	        		page: 1,
	        		pageSize: 10,
	        		sort: 'createTime_desc',
	        		terminal: 'PC'
				},
	        }
        },
        async asyncData ({app,params,store}) {
        	const param = {
        		page: 1,
        		pageSize: 10,
        		sort: 'createTime_desc',
        		terminal: 'PC'
        	}
		 	const goodsListData = await app.$axios.post(interfaceApi.groupBuying,param);
		 	// 获取分类
		 	const categoryList = await app.$axios.post(interfaceApi.categoryList,{fname: 0})
		 	store.commit('SET_CATEGORYLIST',categoryList.data.data);
  			return { goodsListData: goodsListData.data.data }
		},
		components: {
			moreGroupGoods,
			rank,
			groupBuyItem
		},
		mounted() {

			
		},
	  	computed: {  
		    
	  	},
		methods:{

			// 初始化参数
			initParam() {
				this.param.page = 1;
			},
			// 改变排序
			changeSortParam(sort) {
				console.log(sort)
				this.param.sort = sort;
				this.currentPage = 1;
				console.log(0);
			},
			// 获取数据
			getData() {
				var that = this;
				that.$axios.post(interfaceApi.groupBuying,that.param).then(res=> {
					console.log(res);
					that.goodsListData = res.data.data;
				})
			},
			// 回到顶部
			goBackTop() {
				document.body.scrollTop = 0
				document.documentElement.scrollTop = 0
			},
			// 改变页数
			handleSizeChange(val) {
		        this.param.page = val;
		        this.getData();
		    },
		    // 上下页
		    handleCurrentChange(val) {
		        this.param.page = val;
		        this.goBackTop();
		        this.getData();
		    },
		    // 排序方式
			Sort(index) {
				// console.log(index);
				var that = this;
				that.goBackTop();
				that.initParam();
				that.changeSortParam(index);
				that.getData();
			},
        }
	}
</script>
<style lang='sass' type="text/css" scoped>
	@import '~/assets/sass/common.sass'
	.goodsContent
		.bread 
			width: 100%
			background-color: #eee
			margin-bottom: 15px
			.el-breadcrumb
				@include hh(36px, 36px)
				width: 1200px
				margin: 0 auto
		.goodsListBox 
			overflow: hidden
			.goodsList
				float: left
				width: 942px
	.bannerPic 
		width: 100%
		margin-bottom: 12px
		img 
			width: 100%
</style>