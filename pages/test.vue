<template>
	<div class="test" style="overflow:hidden">
		<p>test页面</p>
		<div class="groupBuy container">
			<div class="goods">
				<nuxt-link to="/">
					<div><img src="~static/images/flower.jpg" alt=""></div>
					<p>BRITA Marella 3.5L(blue)+Maxtra Filter Cartridge</p>
					<span>¥1499</span>
					<del>¥1599</del>
				</nuxt-link>
			</div>
		</div>
        <div class="listTop container">
            <div class="ttt">
                <nuxt-link to="/">
                    <p>BRITA Marella 3.5L(blue)+Maxtra Filter Cartridge</p>
                    <span>¥1499</span>
                    <img src="~static/images/flower.jpg" alt="">
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
	    components: {

	    }
	}
</script>
<style lang='sass' scoped>
	@import '~/assets/sass/common.sass'
	.groupBuy	
		height: 510px
		border: $border	
		padding: 0 15px 15px 15px  
		.goods 
			overflow: hidden
			a 
				float: left
				width: 134px
				div
					@include wh(134px, 134px)
					img
						@include wh(134px, 134px)
				p 
					overflow: hidden !important
				    text-overflow: ellipsis !important
				    display: -webkit-box !important
				    -webkit-box-orient: vertical !important
				    -webkit-line-clamp: 2 !important
				    line-height: 24px
				    min-height: 44px
	.listTop 
		width: 960px 
		height: 240px            
		.ttt 
			position: relative
			a 
				display: inline-block
				width: 50px
				p 
					overflow: hidden
					text-overflow: ellipsis
					display: -webkit-box
					-webkit-box-orient: vertical
					-webkit-line-clamp: 2


            
     
                   
            	
		
</style>