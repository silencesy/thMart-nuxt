 <template>
	<div class="login">
		<div class="container">
			<div class="loginBox">
				 <el-tabs v-model="activeName" @tab-click="handleClick">
				    <el-tab-pane label="Login via password" name="first">
						<h1>1111</h1>
				    </el-tab-pane>
				    <el-tab-pane label="Login via SMS" name="second">Login via SMS</el-tab-pane>
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
</style>