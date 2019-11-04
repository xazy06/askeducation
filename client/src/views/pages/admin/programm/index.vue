<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div v-bind:class="[{'col-md-5': selected !== null}, {'col-md-12': selected === null}]" class="col-md-5">
          <h2 class="clearfix">
            Программы
            <button v-b-modal.add class="btn btn-primary">Добавить</button>
          </h2>
          <table class="table table-condensed table-hover">
            <thead>
            <tr>
              <th>Название</th>
              <th class="c-100"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-on:click="select(item)" v-for="item in schools" v-bind:key="item._id">
              <td>{{item.name}}</td>
              <td>
                <b-button v-on:click.stop="remove(item._id)" variant="link">удалить</b-button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-if="selected" class="col-md-7">
          <b-row>
            <b-col md class="s-overflow_h" cols="7">
              <h2 class="s-ellipsis">Школа {{selected.name}}</h2>
            </b-col>
            <b-col class="s-ta_r" md cols="5">
              <button @click="put(selected)" class="btn btn-primary">Сохранить</button>
              <button @click="unselect" class="btn btn-default">Закрыть</button>
            </b-col>
          </b-row>

          <div class="s-mb_40">
            <div class="s-mb_20">
              <edit-form :model="selected" :langs="langs" :countries="countries" :cities="cities" :items="schools"
                         :currencies="currencies"></edit-form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal size="xl" id="add" title="Добавление" @ok="post(newItem)">
      <edit-form :model="newItem" :langs="langs" :countries="countries" :cities="cities" :items="schools"
                 :currencies="currencies"></edit-form>
    </b-modal>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import editForm from '@/views/pages/admin/programm/editForm'
import {mapState, mapActions} from 'vuex'
import * as action from '@/store/types/actionTypes'

export default {
  name: 'programm',
  components: {
    pageTop,
    page,
    editForm
  },
  data () {
    return {
      selected: null,
      newItem: {
        img: '',
        galery: [],
        name: '',
        age: '',
        schools: [],
        country: '',
        city: '',
        description: '',
        cost: '',
        currency: '',
        lang: '',
        starting: '',
        lessonsCount: 0,
        lessonLength: 0,
        studentsPerGroup: 0,
        livingCost: 0,
        closestCity: '',
        accommodations: '',
        food: '',
        seoUrl: '',
        seoDescription: '',
        seoTitle: '',
        seoKeywords: ''
      },
      currencies: ['USD', 'EUR', 'RUB', 'GBP']
    }
  },
  computed: {
    ...mapState('types', ['items']),
    ...mapState('programm', ['programms']),
    ...mapState('cities', ['cities']),
    ...mapState('countries', ['countries']),
    ...mapState('langs', ['langs'])
  },
  methods: {
    dictProp (dict, id) {
      if (!id || !this.dict.length) {
        return ''
      }

      return this.dict.find(item => item._id === id).name
    },
    ...mapActions('cities', {
      getCities: action.GET_CITIES
    }),
    ...mapActions('countries', {
      getCountries: action.GET_COUNTRIES
    }),
    ...mapActions('langs', {
      getLangs: action.GET_LANGS
    }),
    ...mapActions('types', {
      getTypes: action.GET_TYPES
    }),
    ...mapActions('programm', {
      get: action.GET_PROGRAMM,
      _post: action.POST_PROGRAMM,
      _remove: action.DELETE_PROGRAMM,
      put: action.PUT_PROGRAMM
    }),
    async post (data) {
      await this._post(data)
      await this.get()
    },
    async remove (data) {
      await this._remove(data)
      await this.get()
    },
    select (type) {
      this.selected = type
    },
    unselect () {
      this.selected = null
    }
  },
  mounted () {
    this.get()
    this.getLangs()
    this.getTypes()
    this.getCities()
    this.getCountries()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .c-100 {
    width: 100px;
  }
</style>
