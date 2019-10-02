import * as api from '@/services/countries'
import * as mutation from '@/store/types/mutationTypes'
import * as action from '@/store/types/actionTypes'

export default {
  namespaced: true,
  state: {
    countries: []
  },
  getters: {

  },
  mutations: {
    [mutation.COUNTRIES] (state, items) {
      state.countries = items
    }
  },
  actions: {
    async [action.GET_COUNTRIES] ({ commit, getters }, params) {
      let response
      params = params || {}
      response = await api.get(params)

      commit(mutation.COUNTRIES, response)
    },

    async [action.POST_COUNTRIES] ({ getters, state, commit }, data) {
      await api.post(data)
      await api.get()
    },

    async [action.DELETE_COUNTRIES] ({ getters, state, commit }, id) {
      await api.remove({id: id})
      await api.get()
    },

    async [action.PUT_COUNTRIES] ({ getters, state, commit }, data) {
      await api.put(data)
      await api.get()
    }
  }
}
