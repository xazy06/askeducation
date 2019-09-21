import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import handler from 'vuex-handler'
import {ERROR, CLEAR_ERROR} from './types/mutationTypes'

Vue.use(Vuex)

export function createStore () {
  const store = new Vuex.Store({
    modules,

    plugins: [handler],

    state: {
      errorMessage: ''
    },

    getters: {
      isError: state => {
        return state.errorMessage.length > 0
      }
    },

    mutations: {
      [ERROR] (state, error) {
        state.errorMessage = error.message
      },

      [CLEAR_ERROR] (state) {
        state.errorMessage = ''
      }
    },

    actions: {
      actionsError ({commit}, error) {
        commit(ERROR, error || 'ERROR')
        setTimeout(() => {
          commit(CLEAR_ERROR)
        }, 5000)
      }
    }

  })

  store.handler = {
    onSuccess (result, type, params, options) {
      // console.log(result, 'onSuccess')
      return result
    },
    onFailure (error, type, params, options) {
      // console.log(error, 'ERROR store')
      if (error) {
        if (process.browser && error.message === 'Передан невалидный авторизационынй токен') {
          localStorage.clear()
          window.location.href = '/'
        }

        store.dispatch('actionsError', error)
      }
    }
  }

  return store
}
