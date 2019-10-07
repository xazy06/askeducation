<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">Новости</h1>
    </page-top>
    <page>
      <div class="b-p__inner">
        <div v-for="item in news" v-bind:key="item._id">
          <news-item :id="item._id" :date="item.date">{{item.title}}</news-item>
        </div>
      </div>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import newsItem from '@/views/components/newsItem'
import page from '@/views/components/page'
import * as action from '@/store/types/actionTypes'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'news',
  components: {
    pageTop,
    page,
    newsItem
  },
  data () {
    return {}
  },
  computed: {
    ...mapState('news', ['news'])
  },
  methods: {
    ...mapActions('news', {
      getNews: action.GET_NEWS
    })
  },
  mounted () {
    this.getNews()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
