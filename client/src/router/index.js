import Vue from 'vue'
import Router from 'vue-router'

let router

// Function to create routes
// Is default lazy but can be changed
function route (path, view, meta, children) {
  return {
    path: path,
    meta,
    component: resolve => import(`@/views/pages/${view}/index.vue`).then(resolve),
    children
  }
}

function children (path, view, meta) {
  return {
    path: path,
    meta,
    component: resolve => import(`@/views/pages/admin/${view}/index.vue`).then(resolve)
  }
}

Vue.use(Router)

router = new Router({
  mode: 'history',
  routes: [
    route('/', 'home', {banner: 'home.jpg'}),
    route('/news', 'news', {name: 'Новости', banner: 'article.jpg', breadcrumb: [{name: 'Новости', link: '/news'}]}),
    route('/news/:id', 'news/detail', {
      name: 'Новость',
      banner: 'article.jpg',
      breadcrumb: [{name: 'Новости', link: '/news'}]
    }),
    route('/about', 'about', {name: 'О нас', breadcrumb: [{name: 'О нас', link: '/about'}]}),
    route('/lang', 'lang', {
      name: 'Языковые курсы',
      banner: 'lang.jpg',
      breadcrumb: [{name: 'Языковые курсы', link: '/lang'}]
    }),
    route('/type/:type/lang/:id', 'lang', {
      name: 'Языковые курсы',
      banner: 'lang.jpg',
      breadcrumb: [{name: 'Языковые курсы', link: ''}]
    }),
    route('/middle', 'middle', {
      banner: 'middle.jpg',
      name: 'Среднее образование',
      breadcrumb: [{name: 'Среднее образование', link: '/middle'}]
    }),
    route('/middle/lang/:id', 'middle', {
      banner: 'middle.jpg',
      name: 'Среднее образование',
      breadcrumb: [{name: 'Среднее образование', link: '/'}]
    }),
    route('/high', 'high', {
      name: 'Высшее образование',
      banner: 'high.jpg',
      breadcrumb: [{name: 'Высшее образование', link: '/high'}]
    }),
    route('/high/lang/:id', 'high', {
      banner: 'middle.jpg',
      name: 'Высшее образование',
      breadcrumb: [{name: 'Высшее образование', link: '/high'}]
    }),
    route('/login', 'login', {name: 'login', breadcrumb: [{name: 'Login', link: '/login'}]}),
    route('/school/:id', 'school', {name: 'Школа', banner: 'high.jpg', breadcrumb: [{name: 'Школа', link: ''}]}),
    route('/contacts', 'contacts', {
      name: 'Контакты',
      banner: 'map-page.png',
      breadcrumb: [{name: 'Контакты', link: '/contacts'}]
    }),
    route('/articles', 'articles', {
      name: 'Статьи',
      banner: 'article.jpg',
      breadcrumb: [{name: 'Статьи', link: '/articles'}]
    }),
    route('/articles/:id', 'articles/detail', {
      name: 'Статьи',
      banner: 'article.jpg',
      breadcrumb: [{name: 'Статьи', link: '/articles'}]
    }),
    route('/high/schools/:type', 'schools', {
      name: 'Школы',
      banner: 'high.jpg',
      breadcrumb: [
        {name: 'Высшее образование', link: '/high'},
        {name: 'Каталог', link: ''}
      ]
    }),
    route('/high/school/:alias', 'school', {
      name: 'Школы',
      breadcrumb: [
        {name: 'Высшее образование', link: '/high'},
        {name: 'Школа', link: ''}
      ]
    }),
    route(
      '/admin',
      'admin',
      {
        requiresAuth: true,
        name: 'Admin',
        layout: 'admin',
        breadcrumb: [
          {name: 'admin', link: '/admin'}
        ]
      },
      [
        children('school', 'school', {
          name: 'Школы',
          layout: 'admin',
          breadcrumb: [
            {name: 'admin', link: '/admin'},
            {name: 'Школы', link: 'school'}
          ]
        }),
        children('news', 'news', {
          name: 'Новости',
          layout: 'admin',
          breadcrumb: [
            {name: 'admin', link: '/admin'},
            {name: 'Новости', link: 'news'}
          ]
        }),
        children('types', 'types', {
          name: 'Тип курсов',
          layout: 'admin',
          breadcrumb: [
            {name: 'admin', link: '/admin'},
            {name: 'Типы курсов', link: 'types'}
          ]
        }),
        children('articles', 'articles', {
          name: 'Статьи',
          layout: 'admin',
          breadcrumb: [
            {name: 'admin', link: '/admin'},
            {name: 'Статьи', link: 'articles'}
          ]
        }),
        children('langs', 'langs', {
          name: 'Языки',
          layout: 'admin',
          breadcrumb: [
            {name: 'admin', link: '/admin'},
            {name: 'языки', link: 'langs'}
          ]
        }),
        children('specs', 'specs', {
          name: 'Специализации',
          layout: 'admin',
          breadcrumb: [
            {name: 'admin', link: '/admin'},
            {name: 'специализации', link: 'specs'}
          ]
        }),
        children('countries', 'countries', {
          name: 'Страны',
          layout: 'admin',
          breadcrumb: [
            {name: 'admin', link: '/admin'},
            {name: 'страны', link: 'countries'}
          ]
        }),
        children('cities', 'cities', {
          name: 'Города',
          layout: 'admin',
          breadcrumb: [
            {name: 'admin', link: '/admin'},
            {name: 'города', link: 'cities'}
          ]
        })
      ])
  ]
})

router.beforeEach((to, from, next) => {
  let u
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: {nextUrl: to.fullPath}
      })
    } else {
      u = localStorage.getItem('user')
      if (u !== null && JSON.parse(unescape(decodeURI(u))).p === 'Admin-123') {
        next()
      }
    }
  } else {
    next()
  }
})

window.admin = function () {
  router.push('/admin')
}

export default router
