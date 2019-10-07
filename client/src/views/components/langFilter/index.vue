<template>
  <div class="container-fluid b-lang-filters-wrapper">
    <div class="b-lang-filters row">

      <div v-if="filters.programm" class="col-md-3">
        <div class="b-lang-filter">
          <div class="b-lang-filter--top">
            <strong class="b-lang-filter--name">Программа</strong>
          </div>

          <b-form-select class="b-lang-filter--select" value-field="_id" text-field="name" :options="items"></b-form-select>
          <img class="b-lang-filter--angle" src="@/assets/svg/Rectangle_4.svg" />
          <img class="b-lang-filter--angle-active" src="@/assets/svg/Rectangle_5.svg" />
        </div>
      </div>

      <div v-if="filters.language" class="col-md-3">
        <div class="b-lang-filter">
          <div class="b-lang-filter--top">
            <strong class="b-lang-filter--name">Язык</strong>
          </div>

          <b-form-select class="b-lang-filter--select" value-field="_id" text-field="name" :options="langs"></b-form-select>
          <img class="b-lang-filter--angle" src="@/assets/svg/Rectangle_4.svg" />
          <img class="b-lang-filter--angle-active" src="@/assets/svg/Rectangle_5.svg" />
        </div>
      </div>

      <div v-if="filters.country" class="col-md-3">
        <div class="b-lang-filter">
          <div class="b-lang-filter--top">
            <strong class="b-lang-filter--name">Страна</strong>
          </div>
          <b-form-select class="b-lang-filter--select" value-field="_id" text-field="name" :options="countries"></b-form-select>
          <img class="b-lang-filter--angle" src="@/assets/svg/Rectangle_4.svg" />
          <img class="b-lang-filter--angle-active" src="@/assets/svg/Rectangle_5.svg" />
        </div>
      </div>

      <div v-if="filters.age" class="col-md-3">
        <div class="b-lang-filter">
          <div class="b-lang-filter--top">
            <strong class="b-lang-filter--name">Возраст</strong>
          </div>

          <b-form-select class="b-lang-filter--select" value-field="_id" text-field="name" :options="ages"></b-form-select>
          <img class="b-lang-filter--angle" src="@/assets/svg/Rectangle_4.svg" />
          <img class="b-lang-filter--angle-active" src="@/assets/svg/Rectangle_5.svg" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import * as action from '@/store/types/actionTypes'
import {mapState, mapActions} from 'vuex'
export default {
  name: 'langFilter',
  props: ['filters'],
  computed: {
    ...mapState('countries', ['countries']),
    ...mapState('types', ['items']),
    ...mapState('langs', ['langs'])
  },
  methods: {
    ...mapActions('countries', {
      getCountries: action.GET_COUNTRIES
    }),
    ...mapActions('types', {
      getTypes: action.GET_TYPES
    }),
    ...mapActions('langs', {
      getLangs: action.GET_LANGS
    })
  },
  data () {
    return {
      ages: [
        {
          _id: 0,
          name: '0 - 6 лет'
        },
        {
          _id: 1,
          name: '6 - 12 лет'
        },
        {
          _id: 2,
          name: '12 - 16 лет'
        }
      ]
    }
  },
  mounted () {
    this.getCountries()
    this.getTypes()
    this.getLangs()
  }
}
</script>

<style scoped lang="scss">
  .b-lang {
    &-filters {
      &-wrapper {
        margin-bottom: 102px;
      }
    }

    &-filter {
      position: relative;
      margin-right: 14px;
      padding: 22px 16px 25px;
      width: 100%;

      &:hover {
        box-shadow: 0 0 12px rgba(240, 78, 35, 0.2);

        .b-lang-filter--angle-active {
          display: inline-block;
        }
      }

      &--top {
        margin-bottom: 0;
        text-transform: uppercase;
      }

      &--name {
        color: #230000;
        letter-spacing: 1.6px;
        font-size: 20px;
        text-transform: uppercase;
        line-height: 25px;
        font-family: "Formular-bold";
      }

      &--bottom {
        margin-bottom: 127px;
        letter-spacing: 1.28px;
        color: #f04e23;
        font-size: 16px;
        font-weight: 300;
        line-height: 25px;
      }

      &--angle,
      &--angle-active{
        position: absolute;
        right: 0;
        bottom: 0;

        &-active {
          display: none;
        }
      }

      &--select {
        height: 150px;
        border: 0;
        padding-left: 0;
        color: #f04e23;
        font-size: 16px;
        text-transform: uppercase;
        padding-top: 124px;
        font-weight: 300;
        background: none;
        cursor: pointer;

        &:focus {
          border-color: #fff;
          outline: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
      }

    }
  }
</style>
