<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">Языковые курсы</h1>
    </page-top>
    <page>
      <lang-filter></lang-filter>

      <div v-for="item in items" v-bind:key="item._id">
        <router-link to="/">
          <group-header sub="">{{item.name}}</group-header>
        </router-link>
      </div>

      <contact-form/>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import langFilter from '@/views/components/langFilter'
import groupHeader from '@/views/components/groupHeader'
import contactForm from '@/views/components/contactForm'
import * as action from '@/store/types/actionTypes'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'lang',
  components: {
    pageTop,
    page,
    langFilter,
    groupHeader,
    contactForm
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState('types', ['items']),
    ...mapState('langs', ['langs']),
    ...mapState('countries', ['countries'])
  },

  methods: {
    ...mapActions('types', {
      get: action.GET_TYPES
    }),
    ...mapActions('langs', {
      getLangs: action.GET_LANGS
    }),
    ...mapActions('countries', {
      getCountries: action.GET_COUNTRIES
    })
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
    this.get()
    this.getLangs()
    this.getCountries()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
