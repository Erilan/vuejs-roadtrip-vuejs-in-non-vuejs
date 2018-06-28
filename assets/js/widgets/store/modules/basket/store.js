import * as types from './types'
import actions from './actions'

const state = {
  products: []
}

const mutations = {
  [types.ADD_PRODUCT](state, {productId, productName}) {
    state.products.push({
      id: productId,
      name: productName
    })
  },
  [types.REMOVE_PRODUCT](state, productId) {
    state.products = state.products.filter((item) => {
      return item.id !== productId
    })
  }
}

export default {
  state,
  mutations,
  actions
}
