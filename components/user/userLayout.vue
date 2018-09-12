<template>
    <div class="userLayout">
        <div class="userLeft">
            <ul>
                <li>
                    <nuxt-link to="/">
                        <img src="~/static/images/flower.jpg" alt=""> 
                        <p>UserName</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">User Center</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Personal Info</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Orders</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Cart</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Wishlist</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">thMart-Coupons</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Address Book</nuxt-link>
                </li>
            </ul>
        </div>
        <div class="userRight">
            <slot name="userContent"></slot>           
        </div>
    </div>
</template>
<script>
	export default {
		data() {
            return {

            }
        }
	}
</script>
<style lang='sass' type="text/css" scoped>
    @import '~/assets/sass/common.sass' 
    .userLayout 
        overflow: hidden
        .userLeft
            background-color: #eee
            @include wh(200px, 450px)
            float: left
            text-align: center
            padding-top: 20px 
            ul 
                li
                    padding: 11px 0 
                    a 
                        display: inline-block
                        width: 100%
                        img 
                            @include wh(80px, 80px)
                            border-radius: 50%
                            text-align: center
                            margin-bottom: 5px
                        p 
                            white-space: nowrap
                            text-overflow: ellipsis
                            overflow: hidden
                            padding: 0 15px
                li:first-child 
                    border-bottom: 1px solid #dfdfdf
        .userRight  
            width: 1000px
            float: left 
            border: $border
            padding: 15px
            min-height: 450px
    					
</style>