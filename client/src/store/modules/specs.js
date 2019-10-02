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
    [mutation.SPECS] (state, items) {
      state.specs = items
    }
  },
  actions: {
    async [action.GET_SPECS] ({ commit, getters }, params) {
      let response
      params = params || {}
      response = await api.get(params)

      commit(mutation.SPECS, response)
    },

    async [action.POST_SPECS] ({ getters, state, commit }, data) {
      await api.post(data)
      await api.get()
    },

    async [action.DELETE_SPECS] ({ getters, state, commit }, id) {
      await api.remove({id: id})
      await api.get()
    },

    async [action.PUT_SPECS] ({ getters, state, commit }, data) {
      await api.put(data)
      await api.get()
    }
  }
}
