<template>
  <div v-if="item._id">
    <page-top>
      <h1 class="red s-uppercase">
        Новости
      </h1>
    </page-top>
    <page>
      <div class="b-p__inner s-mb_100">
        <h4 class="b-descr-head">
          <div class="b-date">{{item.date}}</div>
          {{item.title}}
        </h4>

        <div v-html="item.text" class="b-descr"></div>
      </div>

      <contact-form></contact-form>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import contactForm from '@/views/components/contactForm'
import * as action from '@/store/types/actionTypes'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'detail',
  components: {
    pageTop,
    page,
    contactForm
  },
  computed: {
    ...mapState('news', ['item'])
  },
  methods: {
    ...mapActions('news', {
      get: action.GET_NEWS_ITEM_BY_ID
    })
  },
  data () {
    return {}
  },
  mounted () {
    this.get(this.$route.params.id)
  }
}

</script>

<style lang="scss" scoped>
  .b-date {
    color: #f04e23;
    font-size: 20px;
    margin-bottom: 18px;
  }

  .b-descr {

    &-head {
      font-size: 45px;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 2.7px;
      margin-bottom: 24px;
    }
  }
</style>
