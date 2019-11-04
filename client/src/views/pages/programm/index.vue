<template>
  <div v-if="programm.name">
    <page-top>
      <h1 class="red s-uppercase">
        {{programm.name}}
        <br/>
        <span>
        {{programm.country.name}}
        </span>
      </h1>
    </page-top>
    <page>
      <div class="b-p__inner">
        <h2 class="b-school-head">
          {{programm.name}}
        </h2>
        <h3 class="b-school-sub">
          <div v-for="school in programm.schools" v-bind:key="school">
            {{dictProp(schools, school)}}
          </div>

          <div class="b-school-sub_under">
            {{programm.age}}
          </div>
        </h3>

        <div class="b-school-info container-fluid no-gutters">
          <div class="row">
            <div class="col-md-3 col-6 s-ta_r">
              <div class="s-mb_10">
                <strong>Языки</strong>
              </div>
              <div class="s-mb_10">
                <strong>Страна</strong>
              </div>
              <div class="s-mb_10">
                <strong>Условия проживания</strong>
              </div>
              <div class="s-mb_10">
                <strong>Питание</strong>
              </div>
              <div class="s-mb_10">
                <strong>Старт программы</strong>
              </div>
              <div class="s-mb_10">
                <strong>Количество уроков</strong>
              </div>
              <div class="s-mb_10">
                <strong>Длительность уроков</strong>
              </div>
              <div class="s-mb_10">
                <strong>Человек в группе</strong>
              </div>
              <div class="s-mb_10">
                <strong>Стоимость</strong>
              </div>
              <div class="s-mb_10">
                <strong>Возраст</strong>
              </div>
              <div class="s-mb_10">
                <strong>Стоимость проживания</strong>
              </div>
              <div class="s-mb_10">
                <strong>Ближайший большой город</strong>
              </div>
            </div>
            <div class="col-md-9 col-6 s-uppercase">
              <div class="s-mb_10">{{programm.lang.name}} язык</div>
              <div class="s-mb_10">{{programm.country.name}}</div>
              <div class="s-mb_10">{{programm.accommodations}}</div>
              <div class="s-mb_10">{{programm.food}}</div>
              <div class="s-mb_10">{{programm.starting}}</div>
              <div class="s-mb_10">{{programm.lessonsCount}}</div>
              <div class="s-mb_10">{{programm.lessonLength}}</div>
              <div class="s-mb_10">{{programm.studentsPerGroup}}</div>
              <div class="s-mb_10">от {{programm.cost}} {{programm.currency}} за неделю</div>
              <div class="s-mb_10">{{programm.age}}</div>
              <div class="s-mb_10">{{programm.livingCost}}</div>
              <div class="s-mb_10">{{programm.closestCity.name}}</div>
            </div>
          </div>
        </div>

        <b-row class="b-school-galery">
          <b-col md v-for="(src, index) in programm.galery" v-bind:key="index" class="b-school-galery-item">
            <b-img-lazy :src="src" />
          </b-col>
        </b-row>

        <h4 class="b-school-descr-head">{{programm.name}}</h4>

        <div v-html="programm.description" class="b-school-descr"></div>
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
  name: 'programm',
  components: {
    pageTop,
    page,
    contactForm
  },
  computed: {
    ...mapState('programm', ['programm']),
    ...mapState('school', ['schools'])
  },
  methods: {
    ...mapActions('school', {
      getSchools: action.GET_SCHOOL
    }),
    ...mapActions('programm', {
      get: action.GET_PROGRAMM_BY_ID
    }),
    dictProp (dict, id) {
      if (!id || !dict.length) {
        return ''
      }

      return dict.find(item => item._id === id).name
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    this.get(this.$route.params.id)
    this.getSchools()
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

      &-item {
        overflow: hidden;
        max-height: 200px;

        & img {

        }
      }
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

    @media all and (max-width: 575px) {
      &-head {
        font-size: 1.3em;
      }

      &-sub {
        font-size: 0.8em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 20px;
      }

      &-info {
        font-size: 0.7em;
        margin-bottom: 20px;
      }

      &-galery {
        margin-bottom: 30px;
        height: 140px;
      }
    }
  }
</style>
