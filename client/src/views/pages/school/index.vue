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
          <div v-for="course in school.courses" v-bind:key="course">
            {{dictProp(items, course)}}
          </div>

          <div class="b-school-sub_under">
            {{school.age}}
          </div>
        </h3>

        <div class="b-school-info container-fluid no-gutters">
          <div class="row">
            <div class="col-md-3 col-6 s-ta_r">
              <div class="s-mb_10">
                <strong>Языки:</strong>
              </div>
              <div class="s-mb_10">
                <strong>Страна:</strong>
              </div>
              <div class="s-mb_10">
                <strong>Условия проживания:</strong>
              </div>
              <div class="s-mb_10">
                <strong>Питание:</strong>
              </div>
              <div class="s-mb_10">
                <strong>Старт программы:</strong>
              </div>
              <div class="s-mb_10">
                <strong>Количество уроков:</strong>
              </div>
              <div class="s-mb_10">
                <strong>Длительность уроков:</strong>
              </div>
              <div class="s-mb_10">
                <strong>Человек в группе:</strong>
              </div>
              <div class="s-mb_10">
                <strong>Стоимость:</strong>
              </div>
              <div class="s-mb_10">
                <strong>Возраст:</strong>
              </div>
              <div class="s-mb_10">
                <strong>Стоимость проживания:</strong>
              </div>
              <div class="s-mb_10">
                <strong>Ближайший большой город:</strong>
              </div>
            </div>
            <div class="col-md-9 col-6 s-uppercase">
              <div class="s-mb_10">{{school.lang.name}} язык</div>
              <div class="s-mb_10">{{school.country.name}}</div>
              <div class="s-mb_10">{{school.accommodations}}</div>
              <div class="s-mb_10">{{school.food}}</div>
              <div class="s-mb_10">{{school.starting}}</div>
              <div class="s-mb_10">{{school.lessonsCount}}</div>
              <div class="s-mb_10">{{school.lessonLength}}</div>
              <div class="s-mb_10">{{school.studentsPerGroup}}</div>
              <div class="s-mb_10">от {{school.cost}} {{school.currency}} за неделю</div>
              <div class="s-mb_10">{{school.age}}</div>
              <div class="s-mb_10">{{school.livingCost}}</div>
              <div class="s-mb_10">{{school.closestCity.name}}</div>
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
    ...mapState('school', ['school']),
    ...mapState('types', ['items'])
  },
  methods: {
    ...mapActions('types', {
      getTypes: action.GET_TYPES
    }),
    ...mapActions('school', {
      get: action.GET_SCHOOL_BY_ID
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
    this.getTypes()
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
