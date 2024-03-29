import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import modal from './modules/modal'

export default new Vuex.Store({
  modules: [
    modal
  ]
})
