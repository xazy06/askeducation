<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">Языковые курсы</h1>
    </page-top>
    <page>
      <lang-filter></lang-filter>

      <group-header sub="интенсив">Язык летом</group-header>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import langFilter from '@/views/components/langFilter'
import groupHeader from '@/views/components/groupHeader'
import * as action from '@/store/types/actionTypes'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'lang',
  components: {
    pageTop,
    page,
    langFilter,
    groupHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState('tickets', ['statuses', 'static'])
  },

  methods: {
    ...mapActions('tickets', {
      getNotifications: action.GET_NOTIFICATIONS,
      getStatic: action.GET_STATIC,
      getDetails: action.GET_DETAILS,
      getComments: action.GET_COMMENTS
    }),
    showDetails (item) {
      this.getDetails(item)
      this.getComments(item)
      this.$modal.show('not-available')
    }
  },
  created () {
    console.log('tickets created')
  },
  mounted () {
    this.getStatic()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
