import Vue from 'vue'
import Vuex from 'vuex'
import utils from '~/utils/utils'
Vue.use(Vuex)

// window.fetch() 的 Polyfill
// require('whatwg-fetch')

const store = () => new Vuex.Store({


  state: {
    token: null
  },

  mutations: {
    
    SET_USER: function (state, token) {
      state.token = token
    }
  },

  actions: {
    nuxtServerInit ({ commit }, { req }) {
      // 获取token
      if (req.headers.cookie) {
        commit('SET_USER', utils.getcookiesInServer(req).token)
      }
      
    }
  }

})

export default store