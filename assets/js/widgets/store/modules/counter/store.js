import * as types from './types'
import actions from './actions'

const state = {
  totalCount: 0
}

const mutations = {
  [types.ADD_COUNT](state) {
    state.totalCount = state.totalCount + 1
  }
}

export default {
  state,
  mutations,
  actions
}
