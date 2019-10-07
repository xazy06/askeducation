<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">Статьи</h1>
    </page-top>
    <page>
      <div class="b-p__inner">
        <div v-for="article in articles" v-bind:key="article._id">
          <article-item :url="article.url" :id="article._id" :date="article.date">{{article.title}}</article-item>
        </div>
      </div>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import articleItem from '@/views/components/articleItem'
import page from '@/views/components/page'
import * as action from '@/store/types/actionTypes'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'articles',
  components: {
    pageTop,
    page,
    articleItem
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState('articles', ['articles'])
  },
  methods: {
    ...mapActions('articles', {
      getArticles: action.GET_ARTICLES
    })
  },
  mounted () {
    this.getArticles()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
