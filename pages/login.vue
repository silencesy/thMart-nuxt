 <template>
	<div class="login">
		<div class="container">
			<div class="loginBox">
				 <el-tabs v-model="activeName" @tab-click="handleClick">
				    <el-tab-pane label="Login via password" name="first">
						<el-input placeholder="Phone">
							<i slot="prefix" class="iconfont icon-zhanghao"></i>
						</el-input>
						<el-input placeholder="Password">
							<i slot="prefix" class="iconfont icon-mima1"></i>
						</el-input>
						<button class="btn">Login</button>
						<div class="foot">
							<nuxt-link to="/signPhone">Sign Up</nuxt-link>
							<nuxt-link to="/passwordPhone">Forgot Password</nuxt-link>	
						</div>
						<div class="wechat">
							<span class="iconfont icon-weixin1"></span>
						</div>
				    </el-tab-pane>
				    <el-tab-pane label="Login via SMS" name="second">
						<el-input placeholder="Enter phone number">
							<i slot="prefix" class="iconfont icon-zhanghao"></i>
						</el-input>
						<button class="codeBtn">Send Code</button>
						<el-input placeholder="Enter verification code">
							<i slot="prefix" class="iconfont icon-mima1"></i>
						</el-input>
						<button class="btn">Login</button>
						<div class="foot">
							<nuxt-link to="/signPhone">Sign Up</nuxt-link>
							<nuxt-link to="/passwordPhone">Forgot Password</nuxt-link>	
						</div>
						<div class="wechat">
							<span class="iconfont icon-weixin1"></span>
						</div>
				    </el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>
<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.4.6/lib/index.js"></script>
<script>
	export default {
	 	layout: 'loginHome',
	    data() {
	      return {
	        activeName: 'first'
	      };
	    },
	    methods: {
	      handleClick(tab, event) {
	        console.log(tab, event);
	      }
	    }
	}
</script>
<style lang='sass' scoped>
	@import '~/assets/sass/common.sass'
	.login
		@include wh(100%, 500px)
		background: url("~static/images/lu.jpg") no-repeat
		background-size: cover 
		overflow: hidden
		.container
			overflow: hidden
			.loginBox
				float: right
				margin-top: 100px
				@include wh(350px, 300px)
				background-color: #fff
		.btn 
			@include whch(310px, 36px, center, 36px)
			@include sc(16px, #fff) 
			background-color: $theme_color
			border-radius: $border_radius
		.foot 
			overflow: hidden 
			a 
				float: left
				@include sc(14px, #666)
				padding: 15px 0 5px 0
			a:last-child 
				float: right
		.wechat 
			text-align: center
			.icon-weixin1 
				color: #4CAF50
				font-size: 25px
		.codeBtn 
			position: absolute
			@include whch(80px, 30px, center, 30px)
			@include sc(16px, #fff)
			background-color: $theme_color
			border-radius: $border_radius
			right: 5px 
			top: 5px
</style>