import * as types from './mutationTypes'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  news: {
    list: [],
    startPage: 1,
    totalPages: 1
  }
}

const mutations = {
  [types.NEWS] (state, payload) {
    state.news.startPage++
    state.news.list = state.news.list.concat(payload.hits)
    state.news.totalPages = payload.nbPages
  },
  [types.NEWS_CLEAR] (state) {
    state.news = { list: [], startPage: 1, totalPages: 1 }
  }
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}
