import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:'https://api.mall.thatsmags.com/Public/ckfinder/images/grey.jpg',
    loading:'https://api.mall.thatsmags.com/Public/ckfinder/images/grey.jpg'
})