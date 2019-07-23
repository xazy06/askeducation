import Vue from 'vue'
import Router from 'vue-router'

// Function to create routes
// Is default lazy but can be changed
function route (path, view, meta) {
  return {
    path: path,
    meta,
    component: resolve => import(`@/views/pages/${view}/index.vue`).then(resolve)
  }
}

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    route('/', 'home'),
    route('/news', 'news'),
    route('/about', 'about'),
    route('/programs', 'programs'),
    route('/lang', 'programs'),
    route('/middle', 'programs'),
    route('/high', 'programs'),
    route('/contacts', 'contacts'),
    route('/sheets', 'contacts'),
    //route('/users', 'users', { requiresAuth: true })
    route('/users', 'users')
  ]
})
