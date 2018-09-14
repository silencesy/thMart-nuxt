<template>
    <div class="userStatus">
        <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item to="/userCenter/user">User Center</el-breadcrumb-item>
              <el-breadcrumb-item>Orders</el-breadcrumb-item>
              <el-breadcrumb-item>Order No. :2018081523864839</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container statusContainer">
            




        </div>
    </div>
</template>
<script>
	export default {
        props: {
            flag: {
                type: [Number,String],
                default: 'pay'
            },
            type: {
                type: [Number,String],
                default: 'unpaid'
            },
        },
	   data() {
            return {

            }
        }
	}
</script>
<style lang='sass' type="text/css" scoped>
    @import '~/assets/sass/common.sass' 
    .userStatus
        .bread 
            width: 100%
            background-color: #eee
            margin-bottom: 15px
            .el-breadcrumb
                @include hh(36px, 36px)
                width: 1200px
                margin: 0 auto
        .statusContainer
            border: $border
            margin-bottom: 15px

</style>