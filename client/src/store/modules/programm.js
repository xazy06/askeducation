import * as api from '@/services/programm'
import * as mutation from '@/store/types/mutationTypes'
import * as action from '@/store/types/actionTypes'

export default {
  namespaced: true,
  state: {
    programms: [],
    programm: {}
  },
  getters: {

  },
  mutations: {
    [mutation.PROGRAMMS] (state, items) {
      state.programms = items
    },
    [mutation.PROGRAMM] (state, programm) {
      state.programm = programm
    }
  },
  actions: {
    async [action.GET_PROGRAMM] ({ commit, getters }, params) {
      let response
      params = params || {}
      response = await api.get(params)

      commit(mutation.PROGRAMMS, response)
    },

    async [action.GET_PROGRAMM_BY_ID] ({ commit, getters }, params) {
      let response
      params = {id: params}
      response = await api.get(params)

      commit(mutation.PROGRAMM, response)
    },

    async [action.POST_PROGRAMM] ({ getters, state, commit }, data) {
      await api.post(data)
      await api.get()
    },

    async [action.DELETE_PROGRAMM] ({ getters, state, commit }, id) {
      await api.remove({id: id})
      await api.get()
    },

    async [action.PUT_PROGRAMM] ({ getters, state, commit }, data) {
      await api.put(data)
      await api.get()
    }
  }
}
