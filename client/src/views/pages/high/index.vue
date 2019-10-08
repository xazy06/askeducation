<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">Высшее образование</h1>
    </page-top>
    <page>
      <div class="b-p__inner s-mb_100">
        <p class="s-mb_40">Эксперты Parta помогают подобрать лучшие программы, создать индивидуальный план обучения, написать яркое
          мотивационное письмо и подготовиться к успешной сдаче экзаменов.<br/>
          Наша цель — сформировать профиль успешного абитуриента, который будет интересен топ-вузам США, Англии и
          Европы. Мы проведем профориентационные тестирования, подберем для вас летние программы за рубежом, поможем
          составить список достижений и активностей и организуем ознакомительные визиты в университеты.
        </p>
        <h2 class="s-mb_40">Что вы хотите изучать?</h2>

        <div v-for="spec in specs" v-bind:key="spec._id">
            <group-header :link="`/high/schools/${spec._id}`" sub="">{{spec.name}}</group-header>
        </div>
      </div>
      <contact-form/>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import contactForm from '@/views/components/contactForm'
import groupHeader from '@/views/components/groupHeader'
import * as action from '@/store/types/actionTypes'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'contacts',
  components: {
    pageTop,
    page,
    groupHeader,
    contactForm
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
