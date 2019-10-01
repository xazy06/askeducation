import * as api from '@/services/langs'
import * as mutation from '@/store/types/mutationTypes'
import * as action from '@/store/types/actionTypes'

export default {
  namespaced: true,
  state: {
    langs: []
  },
  getters: {

  },
  mutations: {
    [mutation.LANGS] (state, items) {
      state.langs = items
    }
  },
  actions: {
    async [action.GET_LANGS] ({ commit, getters }, params) {
      let response
      params = params || {}
      response = await api.get(params)

      commit(mutation.LANGS, response)
    },

    async [action.POST_LANGS] ({ getters, state, commit }, data) {
      await api.post(data)
      await api.get()
    },

    async [action.DELETE_LANGS] ({ getters, state, commit }, id) {
      await api.remove({id: id})
      await api.get()
    },

    async [action.PUT_LANGS] ({ getters, state, commit }, data) {
      await api.put(data)
      await api.get()
    }
  }
}
