// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import { createStore } from '@/store'
import router from './router'
import './custom.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

const store = createStore()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
