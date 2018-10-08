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
	getSkuInfo: 'Sku/detail',
	// 购物车列表
	cartList: 'Cart/list',
	// 收藏
	Collect: 'Collect/collect',
	// 收藏列表
	CollectList: 'Collect/list',
	// 订单列表
	orderList: 'Order/list',
	// 订单详情页
	OrderDetail: 'Order/detail',
	/**
	 * 购物车
	 */
	changeSelectAndTotalPrice: 'Cart/changeSelectAndTotalPrice',
	// 修改购物车数量
	editNumber: 'Cart/editNumber',
	// 添加购物车
	addCart: 'Cart/edit',
	// 删除
	cartDelete: 'Cart/delete',
	/**
	 * 订单模块
	 */
	prepareOrder: 'Order/prepareOrder',
	/**
	 * 地址模块
	 */
	// 地址列表
	addressList: 'User/Address/list',
	// 修改默认地址
	changeDefault: 'User/Address/changeDefault'
}
export default api