<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">Высшее образование<br/>за рубежом</h1>
    </page-top>
    <page>
      <div class="">
        <lang-filter :filters="filters"></lang-filter>

        <div class="s-p_0-15">
          <div v-for="school in schools" v-bind:key="school._id">
            <school-list-item :school="school"></school-list-item>
          </div>
        </div>
      </div>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import langFilter from '@/views/components/langFilter'
import page from '@/views/components/page'
import schoolListItem from '@/views/components/schoolListItem'
import * as action from '@/store/types/actionTypes'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'schools',
  components: {
    pageTop,
    page,
    schoolListItem,
    langFilter
  },
  computed: {
    ...mapState('school', ['schools']),
    ...mapState('countries', ['countries'])
  },
  methods: {
    ...mapActions('countries', {
      getCountries: action.GET_COUNTRIES
    }),
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
    this.getCountries()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .c-200 {
    width: 200px;
  }
</style>
