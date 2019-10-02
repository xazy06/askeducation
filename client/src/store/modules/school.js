import * as api from '@/services/school'
import * as mutation from '@/store/types/mutationTypes'
import * as action from '@/store/types/actionTypes'

export default {
  namespaced: true,
  state: {
    schools: []
  },
  getters: {

  },
  mutations: {
    [mutation.SCHOOL] (state, items) {
      state.schools = items
    }
  },
  actions: {
    async [action.GET_SCHOOL] ({ commit, getters }, params) {
      let response
      params = params || {}
      response = await api.get(params)

      commit(mutation.SCHOOL, response)
    },

    async [action.POST_SCHOOL] ({ getters, state, commit }, data) {
      await api.post(data)
      await api.get()
    },

    async [action.DELETE_SCHOOL] ({ getters, state, commit }, id) {
      await api.remove({id: id})
      await api.get()
    },

    async [action.PUT_SCHOOL] ({ getters, state, commit }, data) {
      await api.put(data)
      await api.get()
    }
  }
}
