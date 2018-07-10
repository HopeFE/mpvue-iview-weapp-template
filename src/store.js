// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import news from '@/pages/news/modules/store'

Vue.use(Vuex)
const store = new Vuex.Store({})

store.registerModule('news', news)
// Vue.prototype.$store = store
export default store
