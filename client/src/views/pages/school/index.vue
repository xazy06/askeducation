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
    ...mapState('school', ['schools']),
    ...mapState('specs', ['specs'])
  },
  methods: {
    ...mapActions('school', {
      get: action.GET_SCHOOL
    })
  },
  data () {
    return {

    }
  },
  mounted () {
    this.get()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
