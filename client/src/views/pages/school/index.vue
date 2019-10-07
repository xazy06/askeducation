<template>
  <div v-if="school.name">
    <page-top>
      <h1 class="red s-uppercase">
        {{school.name}}
        <br/>
        <span>
        {{school.country.name}}
        </span>
      </h1>
    </page-top>
    <page>
      <div class="b-p__inner">
        <h2 class="b-school-head">
          {{school.name}}
        </h2>
        <h3 class="b-school-sub">
          {{school.courses}}
          <div class="b-school-sub_under">
            {{school.age}}
          </div>
        </h3>

        <div class="b-school-info container-fluid">
          <div class="row">
            <div class="col-md-3 s-ta_r">
              <p>
                <strong>Языки:</strong>
              </p>
              <p>
                <strong>Страна:</strong>
              </p>
              <p>
                <strong>Условия проживания:</strong>
              </p>
              <p>
                <strong>Питание:</strong>
              </p>
              <p>
                <strong>Старт программы:</strong>
              </p>
              <p>
                <strong>Количество уроков:</strong>
              </p>
              <p>
                <strong>Длительность уроков:</strong>
              </p>
              <p>
                <strong>Человек в группе:</strong>
              </p>
              <p>
                <strong>Стоимость:</strong>
              </p>
              <p>
                <strong>Возраст:</strong>
              </p>
              <p>
                <strong>Стоимость проживания:</strong>
              </p>
              <p>
                <strong>Ближайший большой город:</strong>
              </p>
            </div>
            <div class="col-md-9 s-uppercase">
              <p>{{school.lang.name}} язык</p>
              <p>{{school.country.name}}</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p>от {{school.cost}} {{school.currency}} за неделю</p>
              <p>{{school.age}}</p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>

        <div class="b-school-galery">
          <img src="@/assets/img/a9e89341c4564012f7a6ff7986b9e8a6.jpg"/>
          <img src="@/assets/img/a9e89341c4564012f7a6ff7986b9e8a6.jpg"/>
          <img src="@/assets/img/a9e89341c4564012f7a6ff7986b9e8a6.jpg"/>
          <img src="@/assets/img/a9e89341c4564012f7a6ff7986b9e8a6.jpg"/>
        </div>

        <h4 class="b-school-descr-head">{{school.name}}</h4>

        <div v-html="school.description" class="b-school-descr"></div>
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
  name: 'school',
  components: {
    pageTop,
    page,
    contactForm
  },
  computed: {
    ...mapState('school', ['school'])
  },
  methods: {
    ...mapActions('school', {
      get: action.GET_SCHOOL_BY_ID
    })
  },
  data () {
    return {

    }
  },
  mounted () {
    this.get(this.$route.params.id)
  }
}

</script>

<style lang="scss" scoped>
  .b-school {

    &-head {
      color: #f04e23;
      font-size: 45px;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 2.7px;
      margin-bottom: 24px;
    }

    &-sub {
      font-size: 16px;
      line-height: 25px;
      text-transform: uppercase;
      color: #230000;
      font-weight: 700;
      letter-spacing: 1.28px;
      margin-bottom: 69px;

      &_under {
        color: #f04e23;
        font-weight: 300;
        letter-spacing: 1.28px;
      }
    }

    &-info {
      margin-bottom: 35px;
    }

    &-galery {
      margin-bottom: 50px;
      overflow: hidden;
      white-space: nowrap;
    }

    &-descr {
      margin-bottom: 100px;

      &-head {
        color: #230000;
        font-size: 20px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 0.4px;
      }
    }
  }
</style>
