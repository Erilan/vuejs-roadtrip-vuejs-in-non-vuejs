import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter/store'
import basket from './modules/basket/store'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    counter,
    basket
  },
  strict: debug
})
