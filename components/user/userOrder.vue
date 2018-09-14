<template>
    <div class="userOrder">
        <div class="orderDetail">
            <div class="date">
                <span>2018-08-16 13:94:23</span>
                <span>Order No. : 2018081523865897</span>
                <span><i class="iconfont icon--dianpu"></i> Amor flor</span>
                <div class="dateRight">
                    <span :class="{status: type=='unpaid'}">Unpaid</span>
                    <span class="del" :class="{status: type=='closed'}"><i class="iconfont icon-shanchu"></i> Closed</span>
                    <span :class="{status: type=='unshipped'}">Unshipped</span>
                    <span :class="{status: type=='progress'}">In Progress</span>
                    <span class="del" :class="{status: type=='shipped'}"><i class="iconfont icon-shanchu"></i> Shipped</span>
                </div>
            </div>
            <div class="details">
                <div class="detailsLeft">
                    <div class="listPer">
                        <div class="goods">
                            <nuxt-link to="/">
                                <div><img src="~/static/images/flower.jpg" alt=""></div>
                                <div>
                                    <p>Midea Air Fryer, Oil Free Design, Oil Free Design, Model: TN20A</p>
                                    <span>Color: Black</span>
                                </div>
                            </nuxt-link>
                        </div>
                        <div class="price">
                            <div>
                                <span>¥99</span>
                                <del>¥129</del>
                            </div>
                        </div>
                        <div class="number price">
                            <div>
                                <span>2</span>
                            </div>
                        </div>
                    </div>
                    <div class="listPer">
                        <div class="goods">
                            <nuxt-link to="/">
                                <div><img src="~/static/images/flower.jpg" alt=""></div>
                                <div>
                                    <p>Midea Air Fryer, Oil Free Design, Oil Free Design, Model: TN20A</p>
                                    <span>Color: Black</span>
                                </div>
                            </nuxt-link>
                        </div>
                        <div class="price">
                            <div>
                                <span>¥99</span>
                                <del>¥129</del>
                            </div>
                        </div>
                        <div class="number price">
                            <div>
                                <span>2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detailsRight">
                    <div class="right">
                        <div>
                            <p>¥198</p>
                            <span>含快递费¥10</span>
                        </div>
                    </div>
                    <div class="right rightBtn">
                        <div :class="{statusBtn: flag=='pay'}">
                            <button class="redColor">Pay</button>
                            <button class="greyColor">Details</button>  
                        </div>
                        <div :class="{statusBtn: flag=='details'}">
                            <button class="greyColor">Details</button>
                        </div>
                        <div :class="{statusBtn: flag=='track'}">
                            <button class="greyColor">Details</button>
                            <nuxt-link to="/" >Tracking your Order >></nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
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
    .userOrder
        .orderDetail
            margin-top: 15px
            border: $border
            .date
                @include hh(36px, 36px)
                background-color: #f9421e0d
                padding: 0 15px
                span 
                    padding-right: 100px
                    @include sc(14px, #666)
                    .icon--dianpu 
                        padding-right: 5px
                .dateRight
                    float: right
                    span
                        padding-right: 0
                        display: none
                        color: #F9421E
                    span.del
                        cursor: pointer
                        color: #666
                        .icon-shanchu 
                            color: #AAA
                    .status
                        display: block
            .details 
                overflow: hidden 
                .detailsLeft
                    float: left
                    overflow: hidden
                    .listPer
                        overflow: hidden
                        border-bottom: $border
                        >div 
                            float: left
                        .goods
                            overflow: hidden
                            margin-left: 15px
                            padding-right: 15px
                            @include wh(325px, 114px) 
                            border-right: $border
                            a 
                                display: inline-block 
                                padding: 15px 0
                                >div 
                                    float: left
                                >div:first-child
                                    @include wh(80px, 80px)
                                    margin-right: 10px
                                    img 
                                        @include wh(80px, 80px)
                                >div:nth-child(2)
                                    width: 200px
                                    p 
                                        overflow: hidden
                                        text-overflow: ellipsis
                                        display: -webkit-box
                                        -webkit-box-orient: vertical
                                        -webkit-line-clamp: 2
                                        line-height: 22px
                                        min-height: 44px
                                    span 
                                        display: block
                                        @include sc(14px, #666)
                                        padding-top: 15px
                        .price 
                            @include wh(160px, 114px)
                            text-align: center
                            border-right: $border
                            position: relative
                            >div
                                @include center 
                                span 
                                    display: block
                                    color: $theme_color
                                del 
                                    @include sc(14px, #666)
                                    display: inline-block
                                    padding-top: 10px
                        .number.price 
                            >div 
                                span 
                                    color: #666
                    .listPer:last-child 
                        border-bottom: none
                .detailsRight 
                    overflow: hidden
                    float: left
                    .right 
                        float: left
                        @include wh(152px, 229px) 
                        position: relative
                        >div
                            @include center
                    .right:first-child
                        border-right: $border
                        text-align: center 
                        p 
                            color: $theme_color
                            margin-bottom: 10px
                        span 
                            @include sc(14px, #666)
                            display: block
                            width: 130px
                    .rightBtn
                        >div
                            display: none 
                            button
                                @include whch(100px, 30px, center, 30px)
                                border-radius: $border_radius
                                margin-bottom: 15px
                            .redColor
                                background-color: $theme_color
                                @include sc(16px, #fff)
                            .greyColor
                                background-color: #fff 
                                border: $border
                                font-size: 16px
                            a 
                                @include sc(14px, $theme_color)
                                display: inline-block
                                padding-left: 8px
                        .statusBtn
                            display: block                           					
</style>