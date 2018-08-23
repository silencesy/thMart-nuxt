<template>
    <div class="nav">
        <div class="container homeNav">
            <ul>
                <li>
                    <nuxt-link to=""><i class="iconfont icon-fenlei"></i>All Categories</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="">Ticketing</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="">Family</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="">GroupBuy</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="">Editor’s Pick</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="">Shops</nuxt-link>
                </li>
            </ul>
        </div> 
        <div class="line"></div>
    </div>
</template>

<style lang='sass' type="text/css" scoped>
    @import '~/assets/sass/common.sass'
    .homeNav
        @include hh(40px, 40px)
        ul  
            overflow: hidden
            li 
                float: left
                a
                    padding: 0 51px 
                    display: inline-block
                    @include hh(40px, 40px)
            li:first-child
                @include wc(240px, center)
                background-color: $theme_color               
                a
                    color: #fff
                    padding: 0
                    width: 100% 
                i   
                    padding-right: 15px
            li:nth-child(2)
                a
                    padding-left: 99px
            li:last-child
                a 
                    padding-right: 0
    .nav
        .line
            border-bottom: 1px solid $theme_color

</style>