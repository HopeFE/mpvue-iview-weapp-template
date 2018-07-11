const state = {
  system: {}
}

const actions = {
  getSystemInfo: ({ state, commit }) => {
    wx.getSystemInfo({
      success (res) {
        commit('SYSTEM', res)
      }
    })
  }
}

const getters = {
  System: (state, getters, rootState) => {
    return rootState.common.system
  }
}

const mutations = {
  'SYSTEM' (state, data) {
    state.system = data
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
