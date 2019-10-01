import * as api from '@/services/types'
import * as mutation from '@/store/types/mutationTypes'
import * as action from '@/store/types/actionTypes'

export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {

  },
  mutations: {
    [mutation.TYPES] (state, items) {
      state.items = items
    }
  },
  actions: {
    async [action.GET_TYPES] ({ commit, getters }, params) {
      let response
      params = params || {}
      response = await api.get(params)

      commit(mutation.TYPES, response)
    },

    async [action.POST_TYPES] ({ getters, state, commit }, data) {
      await api.post(data)
      await api.get()
    },

    async [action.DELETE_TYPES] ({ getters, state, commit }, id) {
      await api.remove({id: id})
      await api.get()
    },

    async [action.PUT_TYPES] ({ getters, state, commit }, data) {
      await api.put(data)
      await api.get()
    }
  }
}
