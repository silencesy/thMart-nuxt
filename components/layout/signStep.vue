<template>
    <div class="step container">
        <ul>
        	<li>
				<i :class="{green: flag==1 || flag==2 || flag==3}">1</i>
				<span>验证手机</span>
        	</li>
        	<p></p>
        	<li>
        		<i :class="{green: flag==2 || flag==3}">2</i>
        		<span>设置密码</span>
        	</li>
        	<p class="plusLine"></p>
        	<li>
        		<i :class="{green: flag==3}">3</i>
        		<span>注册成功</span>
        	</li>
        </ul>
    </div>
</template>
<script>
	export default {
		props: {
			flag: {
				type: [Number,String],
				default: 1
			}
		}
	}
</script>
<style lang='sass' type="text/css" scoped>
    @import '~/assets/sass/common.sass'

    .step
    	width: 413px 
    	margin: 0 auto
    	ul 
    		overflow: hidden
    		position: relative
    		margin: 30px 0
    		li
    			float: left
    			margin-right: 110px
    			text-align: center
    			i
    				color: #999
    				border: $border
    				border-radius: 50% 
    				@include whch(24px, 24px, center, 24px)
    				display: inline-block
    				margin-bottom: 8px
    			.green 
    				color: #fff 
    				background-color: #13A230
    			span
    				display: block
    				color: #666
    		li:last-child
    			margin-right: 0
    		p
    			position: absolute
    			width: 120px
    			border-top: 1px dashed #dfdfdf
    			top: 13px
    			left: 58px
    		.plusLine
    			left: 233px

	


</style>