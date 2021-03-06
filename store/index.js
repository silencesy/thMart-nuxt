import Vue from 'vue'
import Vuex from 'vuex'
import utils from '~/assets/js/utils'
Vue.use(Vuex)

// window.fetch() 的 Polyfill
// require('whatwg-fetch')

const store = () => new Vuex.Store({


  state: {
    token: null,
    nickname: null,
    headimgurl: null,
    // 搜索文字
    searchText: '',
    classification: 'categories',
    shopInfo: {},
    dialogFormVisible: false,
    // 分类数据
    categoryList: [],
    // 首页顶部广告
    topBanner: []
  },

  mutations: {
    // 设置用户token
    SET_USER: function (state, token) {
      state.token = token;
    },
    // 设置用户昵称
    NICKNAME: function (state, nickname) {
      state.nickname = nickname;
    },
    // 设置用户头像地址
    HEADIMGURL: function (state, headimgurl) {
      state.headimgurl = headimgurl;
    },
    // 搜索页设置搜索文字
    SET_SEARCH: function (state, text) {
      state.searchText = text;
    },
    // 搜索页设置搜索分类
    SET_CLASSIFICATION: function (state, text) {
      state.classification = text;
    },
    // 设置商户信息
    SET_SHOP_INFO: function(state,obj) {
      state.shopInfo = obj;
    },
    // 弹出框
    LOGIN: function(state,flag) {
      state.dialogFormVisible = flag;
    },
    // 分类数据
    SET_CATEGORYLIST: function(state,arr) {
      state.categoryList = arr;
    },
    // 分类数据
    SET_TOPBANNER: function(state,arr) {
      state.topBanner = arr;
    }
  },

  actions: {
    nuxtServerInit ({commit}, {route,req, redirect}) {
      // 获取token
      if (req.headers.cookie) {
        commit('SET_USER', decodeURIComponent(utils.getcookiesInServer(req).token))
        commit('NICKNAME', decodeURIComponent(utils.getcookiesInServer(req).nickname))
        commit('HEADIMGURL', decodeURIComponent(utils.getcookiesInServer(req).headimgurl))
      }
    }
  }

})

export default store