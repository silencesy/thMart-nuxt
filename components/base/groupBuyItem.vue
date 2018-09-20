<template>
    <div class="hotProducts" :class="{container: styleObj.container}">
    	<div class="hotTitle" v-if="titleIsShow"><img src="~static/images/hot.png" alt=""></div>
    	<div class="products">
			<nuxt-link :to="{name: 'goods-id', params: {id: item.id}}" v-for="item in hotData" :key="item.id" :style="styleObj">
                <b class="hot"><i>SALE</i></b>
                <div class="hasImg" :style="imgBox"><img :style="imgBox" :src="item.pic" alt=""></div>
                <p>{{item.title}}</p>
                <span class="groupPrice">¥{{item.price}}</span>
                <del v-if="item.originalPrice">¥{{item.originalPrice}}</del>
                <div class="countDown">
                    <span>15</span><i>:</i><span>35</span><i>:</i><span>20</span><i>:</i><span>24</span>
                </div>
			</nuxt-link>
		</div>
        <div v-if="hotData.length == 0" class="no-result">No result</div>
    </div>
</template>
<script>
	export default {
		props: {
			hotData: {
				type: Array,
				default: function() {
					return []
				}
			},
            styleObj: {
                type: Object,
                default: function() {
                    return {
                        width: '190px',
                        height: '285px',
                        container: true
                    }
                }
            },
            titleIsShow: {
                type: Boolean,
                default: false
            }
		},
        computed: {
            imgBox: function() {
                let imgBoxstyleObj = {};
                imgBoxstyleObj['width'] = (parseInt(this.styleObj.width) - 2) + 'px';
                imgBoxstyleObj['height'] = (parseInt(this.styleObj.width) - 2) + 'px';
                console.log(imgBoxstyleObj)
                return imgBoxstyleObj;
            }
        }
	}
</script>
<style lang='sass' type="text/css" scoped>
    @import '~/assets/sass/common.sass' 
    .hotProducts
    	.hotTitle
    		text-align: center
    		margin: 25px 0 15px 0
    	.products 
    		overflow: hidden
    		margin: 0 -6px
    		a
    			display: inline-block
    			position: relative
    			border-radius: $border_radius
    			float: left
    			border: $border
    			margin: 6px
    			.hasImg 
    				margin-bottom: 9px
    			p
    				overflow: hidden 
    				text-overflow: ellipsis
    				display: -webkit-box
    				-webkit-box-orient: vertical
    				-webkit-line-clamp: 2
    				line-height: 22px
    				min-height: 44px
    				text-align: center
    				padding: 0 15px
    			.groupPrice 
    				padding-left: 15px
    				color: $theme_color
    				display: inline-block 
    				margin-top: 10px
    			del 
    				position: absolute
    				right: 15px
    				bottom: 15px
    				@include sc(14px, #999)
    			b
    				position: absolute
    				top: 0
    				left: 0
    				background-color: $theme_color
    				@include whch(38px, 18px, center, 18px)
    				border-radius: $border_radius 
    				i 
    					@include sc(12px, #fff)
    		a:hover
    			box-shadow: 0 0 10px #dfdfdf
    			transition: all .2s
    			-webkit-transition: all .2s
    			-moz-transition: all .2s
    			-o-transition: all .2s
    .hotProducts
        .products 
            padding-top: 5px
    .products
        .countDown
            @include whch(100%, 26px, center, 26px)
            position: absolute
            top: 150px
            background-color: #FFB510
            color: #fff
            span
                @include whch(20px, 20px, center, 21px)
                background-color: #0000005c
                font-size: 14px
                border-radius: $border_radius
                display: inline-block
            i 
                padding: 0 5px
</style>