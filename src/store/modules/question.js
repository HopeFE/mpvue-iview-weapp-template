const state = {
  question: '最好别惹我'
}

const mutations = {
  updatequestion (state, question) {
    const obj = state
    obj.question = question
  }
}

const actions = {
  updatequestion ({ commit }) {
    commit('updatequestion')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
