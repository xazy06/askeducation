import * as api from '@/services/specs'
import * as mutation from '@/store/types/mutationTypes'
import * as action from '@/store/types/actionTypes'

export default {
  namespaced: true,
  state: {
    specs: []
  },
  getters: {

  },
  mutations: {
    [mutation.SPECS] (state, specs) {
      state.specs = specs
    }
  },
  actions: {
    // HOME TICKETS TABS
    async [action.GET_SPECS] ({ commit, getters }, params) {
      let response
      params = params || {}
      response = await api.get(params)

      commit(mutation.SPECS, {
        specs: response.value
      })
    }

  }
}
