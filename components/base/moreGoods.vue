<template>
    <div class="moreProducts">
    	<div class="moreTitle">Featured Products</div>
    	<div class="products">
			<nuxt-link :to="{name: 'goods-id', params: {id: item.id}}" v-for="(item,index) in featuredGoods" :key="index">
				<b class="hot"><i>SALE</i></b>
				<div><img v-lazy="item.pic" alt=""></div>
				<p>{{item.title}}</p>
				<span>¥{{item.price}}</span>
				<del v-show="item.originalPrice">¥{{item.originalPrice}}</del>
			</nuxt-link>
		</div>
    </div>
</template>
<script>
	export default {
		props: {
			featuredGoods: {
				type: Array,
				default: function() {
					return []
				}
			}
		}
	}
</script>
<style lang='sass' type="text/css" scoped>
    @import '~/assets/sass/common.sass' 
    .moreProducts
        width: 240px 
        border-radius: $border_radius 
        border: $border 
        float: right
        .moreTitle
            @include whch(238px, 35px, center, 35px)
            background-color: #eee
        .products
            overflow: hidden           
            a 
                display: inline-block
                @include wh(210px, 320px)
                position: relative
                float: left 
                padding: 15px 0
                margin: 0 15px
                border-bottom: $border
                div
                    @include wh(210px, 210px) 
                    margin-bottom: 9px
                    img 
                        @include wh(210px, 210px) 
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
                span 
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
                    top: 15px
                    left: 0
                    background-color: $theme_color 
                    @include whch(38px, 18px, center, 18px) 
                    border-radius: $border_radius 
                    i 
                        @include sc(12px, #fff) 
            a:last-child
                border-bottom: none
    					
</style>