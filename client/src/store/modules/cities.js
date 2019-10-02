import * as api from '@/services/cities'
import * as mutation from '@/store/types/mutationTypes'
import * as action from '@/store/types/actionTypes'

export default {
  namespaced: true,
  state: {
    cities: []
  },
  getters: {

  },
  mutations: {
    [mutation.CITIES] (state, items) {
      state.cities = items
    }
  },
  actions: {
    async [action.GET_CITIES] ({ commit, getters }, params) {
      let response
      params = params || {}
      response = await api.get(params)

      commit(mutation.CITIES, response)
    },

    async [action.POST_CITIES] ({ getters, state, commit }, data) {
      await api.post(data)
      await api.get()
    },

    async [action.DELETE_CITIES] ({ getters, state, commit }, id) {
      await api.remove({id: id})
      await api.get()
    },

    async [action.PUT_CITIES] ({ getters, state, commit }, data) {
      await api.put(data)
      await api.get()
    }
  }
}
