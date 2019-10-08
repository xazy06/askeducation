<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">Высшее образование<br/>
        <span>за рубежом
          <br/>
          <span v-if="filters.countryModel">{{countryName(filters.countryModel)}}</span>
        </span>
      </h1>
    </page-top>
    <page>
      <div class="s-mb_100">
        <lang-filter :filters="filters"></lang-filter>

        <div class="s-p_0-15">
          <div v-for="school in schools" v-bind:key="school._id">
            <school-list-item :school="school"></school-list-item>
          </div>
        </div>
      </div>
      <contact-form/>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import langFilter from '@/views/components/langFilter'
import contactForm from '@/views/components/contactForm'
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
    langFilter,
    contactForm
  },
  computed: {
    ...mapState('school', ['schools']),
    ...mapState('countries', ['countries'])
  },
  methods: {
    ...mapActions('school', {
      get: action.GET_SCHOOL
    }),
    countryName (id) {
      if (!id || !this.countries.length) {
        return ''
      }

      return this.countries.find(item => item._id === id).name
    }
  },
  data () {
    return {
      filters: {
        countryModel: ''
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
