import Vue from 'vue'
import Vuex from 'vuex'
import common from '@/common/store'
import createLogger from 'vuex/dist/logger'
import news from '@/pages/news/modules/store'

Vue.use(Vuex)
const store = new Vuex.Store({
  // Log集成
  plugins: [createLogger()]
})

store.registerModule('common', common)
store.registerModule('news', news)
export default store
