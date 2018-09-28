<template>
    <div class="thTop">
        <div class="container">
            <div class="top">
                <div class="left">
                    <span>That’s making your life easier !</span> 
                    <div class="login" v-if="!$store.state.token">
                        <nuxt-link :to="{name: 'loginModule-login'}">Login</nuxt-link>
                        <nuxt-link :to="{name: 'loginModule-signPhone'}">Sign up</nuxt-link>
                    </div>
                    <div class="logged" v-if="$store.state.token">
                        <el-dropdown>
                            <nuxt-link to="/userCenter/user" class="el-dropdown-link">
                                {{$store.state.nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
                            </nuxt-link>
                            <el-dropdown-menu slot="dropdown">
                                <div class="dropdownBox">
                                    <nuxt-link to="/userCenter/user" class="userPic">
                                        <div class="headImg"><img :src="$store.state.headimgurl" alt=""></div>
                                    </nuxt-link>
                                    <nuxt-link to="/userCenter/user" class="info">
                                        <p>{{$store.state.nickname}}</p>
                                    </nuxt-link>
                                    <p @click="logout">Log out</p>
                                </div>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
                <div class="right">
                    <nuxt-link to="/userCenter/cart" class="cart">
                        <i class="iconfont icon-gouwuche"></i>Cart
                        <span class="number">12</span>
                    </nuxt-link>
                    <nuxt-link to="/userCenter/orderList/all">My Order</nuxt-link>
                    <nuxt-link to="">Do Business With Us</nuxt-link>
                </div>
            </div> 
        </div>
        <div class="topLine"></div>
    </div>
</template>
<script>
    import Cookie from 'js-cookie'
    export default {
        methods: {
            login() {
                this.user.SetComebackAddress();
                this.$router.push({name: 'login'});
            },
            logout() {
                // 下线
                Cookie.remove('token');
                this.$store.commit('SET_USER','');
                Cookie.remove('nickname');
                Cookie.remove('headimgurl');
                this.$store.commit('NICKNAME','');
                this.$store.commit('HEADIMGURL','');
            }
        }
    }
</script>
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
                    cursor: pointer
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
        p
            @include sc(14px, #999)
            margin-top: 30px
            cursor: pointer
        a 
            float: left
            display: inline-block
        .userPic
            margin-right: 10px
            .headImg
                display: inline-block 
                @include wh(60px, 60px)
                img 
                    @include wh(60px, 60px)
                    border-radius: 50%
        .info
            p:first-child
                margin-top: 10px

                


</style>