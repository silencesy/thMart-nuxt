<template>
    <div class="thTop">
        <div class="container">
            <div class="top">
                <div class="left">
                    <span>That’s making your life easier !</span> 
                    <!-- <div class="login">
                        <nuxt-link to="">Login</nuxt-link>
                        <nuxt-link to="">Sign up</nuxt-link>
                    </div> -->
                    <div class="logged">
                        <el-dropdown>
                            <nuxt-link to="/" class="el-dropdown-link">
                                Username<i class="el-icon-arrow-down el-icon--right"></i>
                            </nuxt-link>
                            <el-dropdown-menu slot="dropdown">
                                <div class="dropdownBox">
                                    <nuxt-link to="/" class="userPic">
                                        <img src="~/static/images/lays.jpg" alt="">
                                    </nuxt-link>
                                    <nuxt-link to="/" class="info">
                                        <p>Username</p>
                                        <p>Log out</p>
                                    </nuxt-link>
                                </div>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
                <div class="right">
                    <nuxt-link to="" class="cart">
                        <i class="iconfont icon-gouwuche"></i>Cart
                        <span class="number">12</span>
                    </nuxt-link>
                    <nuxt-link to="">My Order</nuxt-link>
                    <nuxt-link to="">Do Business With Us</nuxt-link>
                </div>
            </div> 
        </div>
        <div class="topLine"></div>
    </div>
</template>

<style lang='sass' type="text/css" scoped>
    @import '~/assets/sass/common.sass'
    .top
        padding: 10px 0  
        overflow: hidden  
        .left
            float: left
            span
                @include sc(14px, $describe_color)
                margin-right: 50px
            .login
                display: inline-block
                a
                    @include sc(14px, $describe_color)     
                a:after
                    @include line
                    padding-left: 15px
                a:last-child:after 
                    content: ''
                a:last-child
                    padding-left: 15px
            .logged 
                display: inline-block
                .el-dropdown 
                    cursor: pointer
                .el-icon--right
                    padding-left: 5px
                .popper__arrow
                    display: none                       
        .right  
            float: right
            a
                @include sc(14px, $describe_color)
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
            .cart
                position: relative
                .number
                    position: absolute
                    left: 48px
                    top: -5px
                    font-size: 12px
                    background-color: $theme_color
                    color: #fff
                    border-radius: 50%
                    @include whch(16px, 16px, center, 16px)
    .topLine
        border-bottom: $border_bottom
    .dropdownBox
        overflow: hidden
        padding: 5px
        a 
            float: left
            display: inline-block
        .userPic
            margin-right: 10px
            img 
                @include wh(60px, 60px)
                border-radius: 50%
        .info
            p:first-child
                margin-top: 10px
            p:last-child
                @include sc(14px, #999)
                margin-top: 10px


</style>