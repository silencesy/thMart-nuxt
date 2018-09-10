<template>
	<div class="articleBox">
        <div class="articleList">
            <div class="list">
                <nuxt-link to="">
                    <div>
                        <img src="~/static/images/flower.jpg" alt="">
                    </div>
                    <div>                        
                        <p>Tackle Your Next Toilet Emergency with These Handy Tissue Packs</p>
                        <span>Be prepared with handy tissue packs from Tempo</span>
                        <i>2018-08-29</i>                       
                    </div>
                </nuxt-link>
            </div>
            <div class="list">
                <nuxt-link to="">
                    <div>
                        <img src="~/static/images/flower.jpg" alt="">
                    </div>
                    <div>                        
                        <p>Tackle Your Next Toilet Emergency with These Handy Tissue Packs</p>
                        <span>Be prepared with handy tissue packs from Tempo</span>
                        <i>2018-08-29</i>                       
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
	export default {
        data() {
            return {

            }
        },
	}
</script>
<style lang='sass' type="text/css" scoped>
    @import '~/assets/sass/common.sass' 
    .articleBox 
        overflow: hidden
        .articleList
            overflow: hidden
            width: 942px
            .list 
                width: 463px
                float: left
                border: $border
                border-radius: $border_radius
                margin-top: 15px
                overflow: hidden
                padding: 15px  
                margin-right: 15px
                a 
                    display: inline-block 
                    >div 
                        float: left
                    >div:first-child
                        @include wh(160px, 105px)
                        img 
                            @include wh(160px, 105px)
                    >div:nth-child(2)
                        width: 260px
                        p 
                            overflow: hidden
                            text-overflow: ellipsis
                            display: -webkit-box
                            -webkit-box-orient: vertical
                            -webkit-line-clamp: 2
                            line-height: 22px
                            min-height: 44px
                        span 
                            display: inline-block
                            overflow: hidden
                            text-overflow: ellipsis
                            display: -webkit-box
                            -webkit-box-orient: vertical
                            -webkit-line-clamp: 2
                            line-height: 22px
                            min-height: 44px
                            @include sc(14px, #666)
                        i 
                            display: block
                            @include sc(14px, #999)
            .list:nth-child(even)
                margin-right: 0
            .list:hover
                box-shadow: 0 0 10px #dfdfdf
                transition: all .2s
                -webkit-transition: all .2s
                -moz-transition: all .2s
                -o-transition: all .2s

</style>