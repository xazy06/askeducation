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
    route('/news', 'news', {name: 'Новости'}),
    route('/about', 'about', {name: 'О нас'}),
    route('/lang', 'lang', {name: 'Языковые курсы'}),
    route('/middle', 'middle', {name: 'Среднее образование'}),
    route('/high', 'high', {name: 'Высшее образование'}),
    route('/contacts', 'contacts', {name: 'Контакты'}),
    route('/articles', 'articles', {name: 'Статьи'}),
    //route('/users', 'users', { requiresAuth: true })
    route('/users', 'users')
  ]
})
