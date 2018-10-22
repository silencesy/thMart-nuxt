<template>
    <div class="nav">
        <div class="container">
            <div class="homeHead">
                <div class="left"><nuxt-link to="/"><img src="~static/images/thmart.png" alt=""></nuxt-link></div>
                <div class="center">
                    <i v-show="searchTipsTextShow" class="iconfont icon-sousuo"> What are you looking for?</i>
                    <input type="search" v-model="searchText" @focus="handleinput" @blur="blurinput" value="" name="" id="">
                    <button @click="searchBtn">Search</button>
                </div>
                <div class="right"><img src="~static/images/thmartCode.jpg" alt=""></div>
            </div> 
            <div class="homeNav">
                <ul>
                    <li>
                        <nuxt-link to="">
                            <el-dropdown style="width: 100%;height: 100%">
                                <!-- <i class="iconfont icon-fenlei"></i>All Categories -->
                                <el-button style="width: 100%;height: 100%;display: block">
                                    <i class="iconfont icon-fenlei"></i>All Categories
                                </el-button>
                                <el-dropdown-menu slot="dropdown">
                                    <div>
                                        <el-dropdown-item>黄金糕</el-dropdown-item>
                                        <el-dropdown-item>狮子头</el-dropdown-item>
                                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                        <el-dropdown-item>双皮奶</el-dropdown-item>
                                        <el-dropdown-item>蚵仔煎</el-dropdown-item>   
                                    </div>
                                    <div>
                                        <el-dropdown-item>黄金糕</el-dropdown-item>
                                        <el-dropdown-item>狮子头</el-dropdown-item>
                                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                        <el-dropdown-item>双皮奶</el-dropdown-item>
                                        <el-dropdown-item>蚵仔煎</el-dropdown-item>   
                                    </div>
                                </el-dropdown-menu>
                            </el-dropdown>                            
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link :class="{theme_color: $route.path == '/'}" to="/">Home</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link :class="{theme_color: $route.path == '/category/1'}" :to="{name: 'category-id',params: {id: 1}}">Ticketing</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="">Family</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link :class="{theme_color: $route.path == '/groupBuy/1'}" :to="{name: 'groupBuy-id',params: {id: 1}}">GroupBuy</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/article/articleList" :class="{theme_color: $route.path == '/article/articleList'}">Editor’s Pick</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link :class="{theme_color: $route.path == '/shop/shopList'}" to="/shop/shopList">Shops</nuxt-link>
                    </li>
                </ul>
            </div>
        </div> 
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchText: '',
                searchTipsTextShow: true,
                activeCategoryData: ''
            }
        },
        methods: {
            handleinput() {
                this.searchTipsTextShow = false;
            },
            blurinput() {
                if (this.searchText.length>0) {
                    this.searchTipsTextShow = false;
                } else {
                    this.searchTipsTextShow = true;  
                }
            },
            searchBtn() {
                this.$router.push({path: '/searchModeule/search',query: {searchInfo: this.searchText,classification: 'categories'}});
            },
            sss() {
                alert(123);
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
                @include wh(80px, 60px)
        .right
            float: right
            img
                @include wh(80px, 80px)
        .center
            position: relative
            margin-left: 23%
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
    .homeNav
        @include hh(40px, 40px)
        ul  
            overflow: hidden
            li 
                float: left
                a
                    padding: 0 50px 
                    display: inline-block
                    @include hh(40px, 40px)
            li:first-child
                @include wc(239px, center)
                background-color: $theme_color               
                a
                    color: #fff
                    padding: 0
                    width: 100% 
                i   
                    padding-right: 15px
            li:nth-child(2)
                a
                    padding-left: 100px
            li:last-child
                a 
                    padding-right: 0
    .nav
        .line
            border-bottom: 1px solid $theme_color
    .el-dropdown-menu 
        overflow: hidden
        background-color: rgba(0,0,0,.7)
        border: none
        >div 
            float: left
            width: 240px
            li 
                text-align: center
                color: #fff

</style>