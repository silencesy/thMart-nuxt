<template>
    <div>
        <div class="container">
            <div class="homeHead">
                <div class="left">
                    <img src="~static/images/thmart.png" alt="">
                    <div class="shopName">
                        <span>Amor flora</span>
                        <span><i class="iconfont icon-unreview"></i>Favourite</span>
                    </div>
                </div>
                <div class="center">
                    <i v-show="searchTipsTextShow" class="iconfont icon-sousuo"> What are you looking for?</i>
                    <input type="search" @focus="handleinput()" value="" name="" id="">
                    <button>Search</button>
                    <button class="btnShop">Shop</button>
                </div>
                <div class="right"><img src="~static/images/thmartCode.jpg" alt=""></div>
            </div> 
        </div>
        <div class="shopTopPic"><img src="~static/images/top-banner.png" alt=""></div>
        <div class="container shopContainer">
            <div class="shopTitle">
                <nuxt-link to="">Home</nuxt-link>
                <nuxt-link to="">All</nuxt-link>
                <nuxt-link to="">Sales</nuxt-link>
            </div>
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
        methods: {
            handleinput() {
                this.searchTipsTextShow = false
            },
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
                @include wh(75px, 45px)
                padding-right: 15px
                border-right: $border
            .shopName 
                float: right
                padding-left: 15px 
                @include whh(245px, 80px, 10px)
                span
                    display: block
                    font-size: 14px
                    padding-top: 20px
                span:first-child 
                    white-space: nowrap
                    overflow: hidden
                    text-overflow: ellipsis    
                span:nth-child(2)
                    color: #666
                    cursor: pointer 
                i
                    font-size: 14px
                    padding-right: 5px
        .right
            float: right
            img
                @include wh(80px, 80px)
        .center
            position: relative
            margin-left: 15px
            @include hh(80px, 80px)
            i
                position: absolute
                color: #999
                left: 13px
                top: 3px
                z-index: -1
            input
                @include whh(380px, 40px, 40px)
                color: $describe_color
                @include ttbb(4px, 0, 4px, 0) 
                padding: 0 10px 
                background: transparent  
                box-sizing: border-box
            button
                background-color: $theme_color
                @include sc(16px, #fff)
                @include whh(120px, 40px, 40px)
                @include ttbb(0, 4px, 0, 4px)
                cursor: pointer
                vertical-align: top
                margin-top: 21px
            button.btnShop 
                background-color: #FFB510
                border-radius: $border_radius
                margin-left: 15px
    .shopTopPic
        img
            width: 100%
    .container.shopContainer
        text-align: center
        padding: 10px 0
    .shopTitle 
        a:after
            @include line
        a:first-child:after
            padding-left: 15px
        a:nth-child(2)
            padding-left: 15px
        a:nth-child(2):after
            padding-left: 15px
        a:nth-child(3)
            padding-left: 15px
        a:last-child:after 
            content: ''
            padding: 0
        .icon-gouwuche
            padding-right: 5px
</style>