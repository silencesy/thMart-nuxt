<template>
    <div class="container">
        <div class="homeHead">
            <div class="left"><img src="~static/images/thmart.png" alt=""></div>
            <div class="center">
                <i v-show="searchTipsTextShow" class="iconfont icon-sousuo"> What are you looking for?</i>
                <input type="search" v-model="searchText" value="" name="" id="">
                <button>Search</button>
            </div>
            <div class="right"><img src="~static/images/thmartCode.jpg" alt=""></div>
        </div> 
    </div>
</template>
<script>
    export default {
        data() {
            return {
                searchText: '',
                searchTipsTextShow: true
            }
        },
        watch: {
            searchText: function(newVal,oldVal) {
                newVal.length>0?this.searchTipsTextShow = false:this.searchTipsTextShow = true
            }
        }
    }
</script>
<style lang='sass' type="text/css" scoped>
    @import '~/assets/sass/common.sass'
    .homeHead
        margin: 15px 0
        overflow: hidden
        @include hh(80px, 80px)
        >div
            float: left
        .left, .right
            img
                vertical-align: middle
        .left
            img
                @include wh(60px, 45px)
        .right
            float: right
            img
                @include wh(80px, 80px)
        .center
            position: relative
            margin-left: 23%
            i
                position: absolute
                color: #999
                left: 13px
                top: 3px
                z-index: -1
            button
                background-color: $theme_color
                border: 1px solid $theme_color
                @include sc(16px, #fff)
                padding: 11px 35px
                @include ttbb(0, 4px, 0, 4px)
                cursor: pointer
            input
                @include whh(380px, 41px, 41px)
                color: $describe_color
                @include ttbb(4px, 0, 4px, 0) 
                padding: 0 10px 
                background: transparent  
</style>