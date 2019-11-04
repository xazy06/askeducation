<template>
  <div class="b-menu-wrapper">
    <ul class="b-menu">
      <li v-bind:key="item.to" v-for="item in items" class="b-menu-item">
        <router-link class="b-menu-item_a" :to="item.to" active-class="active" exact>
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['admin'],
  name: 'bmenu',
  data () {
    return {
      menuItems: [
        {
          name: 'Языковые курсы',
          to: '/lang'
        },
        {
          name: 'Среднее образование',
          to: '/middle'
        },
        {
          name: 'Высшее образование',
          to: '/high'
        },
        {
          name: 'Новости',
          to: '/news'
        },
        {
          name: 'Статьи',
          to: '/articles'
        },
        {
          name: 'О нас',
          to: '/about'
        },
        {
          name: 'Контакты',
          to: '/contacts'
        }
      ],
      adminMenuItems: [
        // {
        //   name: 'Языковые курсы',
        //   to: 'lang'
        // },
        // {
        //   name: 'Среднее образование',
        //   to: 'middle'
        // },
        // {
        //   name: 'Высшее образование',
        //   to: 'high'
        // },
        {
          name: 'Школы',
          to: '/admin/school'
        },
        {
          name: 'Новости',
          to: '/admin/news'
        },
        {
          name: 'Статьи',
          to: '/admin/articles'
        },
        {
          name: 'Города',
          to: '/admin/cities'
        },
        {
          name: 'Страны',
          to: '/admin/countries'
        },
        {
          name: 'Специализации',
          to: '/admin/specs'
        },
        {
          name: 'Программы',
          to: '/admin/programm'
        },
        {
          name: 'Языки',
          to: '/admin/langs'
        },
        {
          name: 'Типы курсов',
          to: '/admin/types'
        },
        {
          name: 'Статика',
          to: '/admin/statics'
        }
      ]
    }
  },
  computed: {
    items () {
      return this.admin ? this.adminMenuItems : this.menuItems
    }
  }
}
</script>

<style scoped lang="scss">
  .b-menu {
    list-style: none;
    padding-left: 0;
    padding-right: 0;

    &-wrapper {
      margin-bottom: 40px;
    }

    &-item {

    }

    &-item_a {
      text-transform: uppercase;
      font-size: 19px;
      letter-spacing: 2px;
      color: rgb(35, 0, 0);
      font-family: "Formular-bold", sans-serif;
      font-weight: bold;
      padding: 8px 0;

      @media all and (max-width: 575px) {
        font-size: 12px;
      }

      &.active {
        color: rgb(240, 78, 35);
      }
    }
  }
</style>
