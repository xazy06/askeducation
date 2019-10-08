<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">
        Лето в праге
        <br/>
        <span>от €890 за 2 недели</span>
      </h1>
    </page-top>
    <page>
      <main-page-nav></main-page-nav>

      <main-page-slider-item name="Новости"  :title="helper(news).title"></main-page-slider-item>

      <main-page-slider-item name="Статьи" :title="helper(articles).title"></main-page-slider-item>

      <contact-form/>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import contactForm from '@/views/components/contactForm'
import mainPageNav from '@/views/components/mainPageNav'
import mainPageSliderItem from '@/views/components/mainPageSliderItem'
import * as action from '@/store/types/actionTypes'
import getElement from '@/modules/firstOrDefault/'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'home',
  components: {
    pageTop,
    page,
    contactForm,
    mainPageNav,
    mainPageSliderItem
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState('news', ['news']),
    ...mapState('articles', ['articles'])
  },

  methods: {
    ...mapActions('articles', {
      getArticles: action.GET_ARTICLES
    }),
    ...mapActions('news', {
      getNews: action.GET_NEWS
    }),
    helper (param) {
      return getElement(param)
    }
  },
  created () {
  },
  mounted () {
    this.getNews()
    this.getArticles()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
