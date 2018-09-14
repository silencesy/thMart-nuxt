let api = {
	// 登录接口（密码登录和验证码登录）
	login: 'User/mobileLogin',
	// 获取验证码
	UsermobileCode: 'User/mobileCode',
	// 验证码判断是否正确
	UserMobileRegisterByPc: 'User/mobileRegisterByPc',
	// 手机验证码 验证
	mobileRegisterByPc: 'User/mobileRegisterByPc',
	// 手机注册
	mobileRegister: 'User/mobileRegister',
	// 重置密码获取短信
	checkMobileAndCode: 'User/checkMobileAndCode',
	// 重置密码
	resetPassword: 'User/resetPassword',
	// 商户首页
	shop: 'Brand/detail',
	// 商品列表页
	goodsList: 'Item/list',
	// 文章列表
	articleList: 'Article/list',
	// 文章详情页
	articleDetail: 'Article/detail',
	/**
	 * 广告位置id，5：推荐品牌；12：首页热销商品；17：首页促销商品；34：thDispatcher
	 */
	adsList: 'Ads/list',
	// 商品详情页
	goodsDeatail: 'Item/detail',
	// 获取单个sku
	getSkuInfo: 'Sku/detail'
}
export default api