import * as api from '@/services/articles'
import * as mutation from '@/store/types/mutationTypes'
import * as action from '@/store/types/actionTypes'

export default {
  namespaced: true,
  state: {
    articles: [],
    item: {}
  },
  getters: {

  },
  mutations: {
    [mutation.ARTICLES] (state, items) {
      state.articles = items
    },
    [mutation.ARTICLE] (state, item) {
      state.item = item
    }
  },
  actions: {
    async [action.GET_ARTICLES] ({ commit, getters }, params) {
      let response
      params = params || {}
      response = await api.get(params)

      commit(mutation.ARTICLES, response)
    },

    async [action.GET_ARTICLE_ITEM_BY_ID] ({ commit, getters }, params) {
      let response
      params = {id: params}

      response = await api.get(params)

      commit(mutation.ARTICLE, response)
    },

    async [action.POST_ARTICLES] ({ getters, state, commit }, data) {
      await api.post(data)
      await api.get()
    },

    async [action.DELETE_ARTICLES] ({ getters, state, commit }, id) {
      await api.remove({id: id})
      await api.get()
    },

    async [action.PUT_ARTICLES] ({ getters, state, commit }, data) {
      await api.put(data)
      await api.get()
    }
  }
}
