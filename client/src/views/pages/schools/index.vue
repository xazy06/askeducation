<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">Экономика за рубежом</h1>
    </page-top>
    <page>
      <div class="b-p__inner">
        <h2>Каталог</h2>

        <div v-for="school in schools" v-bind:key="school._id">
          <school-list-item :school="school"></school-list-item>
        </div>
      </div>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import schoolListItem from '@/views/components/schoolListItem'
import * as action from '@/store/types/actionTypes'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'contacts',
  components: {
    pageTop,
    page,
    schoolListItem
  },
  computed: {
    ...mapState('specs', ['specs'])
  },
  methods: {
    ...mapActions('specs', {
      getSpecs: action.GET_SPECS
    })
  },
  data () {
    return {
      schools: [{
        _id: 0,
        name: 'St. Clare’s Oxford',
        language: 'Английский язык',
        country: 'Англия',
        city: 'Оксфордшир',
        age: '12-17 лет',
        cost: 'от 735 $ за неделю'
      }]
    }
  },
  mounted () {
    this.getSpecs()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
