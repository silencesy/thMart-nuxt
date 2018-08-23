<template>
    <div class="container">
        <div class="top">
            <div class="left">
                <span>That’s making your life easier !</span> 
                <div class="login">
                    <nuxt-link to="">Login</nuxt-link>
                    <nuxt-link to="">Sign up</nuxt-link>
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
</template>

<style lang='sass' type="text/css" scoped>
    @import '~/assets/sass/common.sass'
    .top
        padding: 5px 0  
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
                a:last-child:after 
                    content: ''
        .right  
            float: right
            a
                @include sc(14px, $describe_color)
            a:after
                @include line
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
                    font-size: 12px
                    background-color: $theme_color
                    color: #fff
                    border-radius: 50%
                    @include whch(16px, 16px, center, 16px)

</style>