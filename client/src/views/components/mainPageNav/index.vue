<template>
  <div class="container-fluid b-p-nav-filters-wrapper">
    <div class="b-p-nav-filters row">

      <div class="col-md-3 col-6">
        <list-item title="Язык<br/>Летом" link="/type/letom" :icons="['sun']" :list="langs"></list-item>
      </div>

      <div class="col-md-3 col-6">
        <list-item title="Язык<br/>круглый год" link="/type/krugly_god" :icons="['sun', 'umbrella', 'snow', 'leaf']" :list="langs"></list-item>
      </div>

      <div class="col-md-3 col-6">
        <list-item title="Средняя<br/>школа" link="/middle"  :icons="['stamp']" :list="langs"></list-item>
      </div>

      <div class="col-md-3 col-6">
        <list-item title="университет" link="/high" :icons="['crown']" :list="langs"></list-item>
      </div>
    </div>
  </div>
</template>

<script>
import * as action from '@/store/types/actionTypes'
import listItem from './listItem'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'mainPageNav',
  components: {
    listItem
  },
  computed: {
    ...mapState('langs', ['langs'])
  },
  methods: {
    ...mapActions('langs', {
      getLangs: action.GET_LANGS
    })
  },
  data () {
    return {

    }
  },
  mounted () {
    this.getLangs()
  }
}
</script>

<style scoped lang="scss">

  .b-p-nav {
    &-filters {
      &-wrapper {
        padding-bottom: 169px;
        height: 369px;
        overflow: hidden;

        @media all and (max-width: 575px) {
          /*margin-bottom: 40px;*/
          height: 100%;
          padding-bottom: 0;
        }
      }
    }
  }
</style>
