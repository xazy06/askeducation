import * as api from '@/services/news'
import * as mutation from '@/store/types/mutationTypes'
import * as action from '@/store/types/actionTypes'

export default {
  namespaced: true,
  state: {
    news: [],
    item: {}
  },
  getters: {

  },
  mutations: {
    [mutation.NEWS] (state, items) {
      state.news = items
    },
    [mutation.NEWS_ITEM] (state, item) {
      state.item = item
    }
  },
  actions: {
    async [action.GET_NEWS] ({ commit, getters }, params) {
      let response
      params = params || {}
      response = await api.get(params)

      commit(mutation.NEWS, response)
    },

    async [action.GET_NEWS_ITEM_BY_ID] ({ commit, getters }, params) {
      let response
      params = {id: params}
      response = await api.get(params)

      commit(mutation.NEWS_ITEM, response)
    },

    async [action.POST_NEWS] ({ getters, state, commit }, data) {
      await api.post(data)
      await api.get()
    },

    async [action.DELETE_NEWS] ({ getters, state, commit }, id) {
      await api.remove({id: id})
      await api.get()
    },

    async [action.PUT_NEWS] ({ getters, state, commit }, data) {
      await api.put(data)
      await api.get()
    }
  }
}
