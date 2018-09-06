<template>
    <div class="moreArticle">
    	<div class="moreTitle">Related Articles</div>
    	<div class="products">
			<nuxt-link to="/">
				<div><img src="~static/images/flower.jpg" alt=""></div>
				<p>Kellogg's Corn Flake Copy 5</p>
			</nuxt-link>
            <nuxt-link to="/">
                <div><img src="~static/images/flower.jpg" alt=""></div>
                <p>Kellogg's Corn Flake Copy 5</p>
            </nuxt-link>
		</div>
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
			}
		}
	}
</script>
<style lang='sass' type="text/css" scoped>
    @import '~/assets/sass/common.sass' 
    .moreArticle
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
                @include wh(210px, 225px)
                position: relative
                float: left 
                padding: 15px 0
                margin: 0 15px
                border-bottom: $border
                div
                    @include wh(210px, 140px) 
                    margin-bottom: 9px
                    img 
                        @include wh(210px, 140px) 
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
            a:last-child
                border-bottom: none
    					
</style>