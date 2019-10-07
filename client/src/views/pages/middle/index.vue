<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">Среднее образование</h1>
    </page-top>
    <page>
      <div class="s-mb_100">
        <lang-filter :filters="filters"></lang-filter>
        <div v-for="school in schools" v-bind:key="school._id">
          <school-list-item :school="school"></school-list-item>
        </div>
      </div>
      <contact-form/>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import schoolListItem from '@/views/components/schoolListItem'
import langFilter from '@/views/components/langFilter'
import contactForm from '@/views/components/contactForm'
import * as action from '@/store/types/actionTypes'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'middle',
  components: {
    pageTop,
    page,
    schoolListItem,
    langFilter,
    contactForm
  },
  computed: {
    ...mapState('school', ['schools'])
  },
  methods: {
    ...mapActions('school', {
      get: action.GET_SCHOOL
    })
  },
  data () {
    return {
      filters: {
        country: true
      }
    }
  },
  mounted () {
    this.get()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .c-200 {
    width: 200px;
  }
</style>
