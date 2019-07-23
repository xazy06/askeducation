<template>
  <div class="b-menu-wrapper">
    <ul class="b-menu">
      <li v-for="item in items" class="b-menu-item">
        <router-link class="b-menu-item_a" :to="item.to" active-class="active" exact>
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "bmenu",
    data() {
        return {
            items: [
                {
                    name: 'Программы',
                    to: 'programs'
                },
                {
                    name: 'Языковые курсы',
                    to: 'lang'
                },
                {
                    name: 'Среднее образование',
                    to: 'middle'
                },
                {
                    name: 'Высшее образование',
                    to: 'high'
                },
                {
                    name: 'Новости',
                    to: 'news'
                },
                {
                    name: 'Статьи',
                    to: 'sheets'
                },
                {
                    name: 'О нас',
                    to: 'about'
                },
                {
                    name: 'Контакты',
                    to: 'contacts'
                }
            ]
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
      color: rgb(35,0,0);
      font-family: "Formular-bold", sans-serif;
      font-weight: bold;
      padding: 8px 0;

      &.active {
        color: rgb(240,78,35);
      }
    }
  }
</style>