<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div v-bind:class="[{'col-md-6': selected !== null}, {'col-md-12': selected === null}]" class="col-md-6">
          <h2 class="clearfix">
            Типы курсов
            <button v-b-modal.add class="btn btn-primary">Добавить</button>
          </h2>
          <table class="table table-condensed table-hover">
            <thead>
            <tr>
              <th>Название</th>
              <th>Язык</th>
              <th>Страна</th>
              <th class="c-100"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-on:click="select(item)" v-for="item in items" v-bind:key="item._id">
              <td>{{item.name}}</td>
              <td>{{ langName(item.lang) }}</td>
              <td>{{ langName(item.country, countries) }}</td>
              <td>
                <b-button v-on:click.stop="remove(item._id)" variant="link">удалить</b-button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-if="selected" class="col-md-6">
          <h2>Курс {{selected.name}}</h2>
          <div class="s-mb_40">
            <div class="s-mb_20">
              <b-form-input class="s-mb_20" v-model="selected.name" placeholder="Название"></b-form-input>
            </div>
            <div class="s-mb_20">
              <b-form-select value-field="_id" text-field="name" v-model="selected.country" :options="countries"></b-form-select>
            </div>
            <div>
              <b-form-select value-field="_id" text-field="name" v-model="selected.lang" :options="langs"></b-form-select>
            </div>
          </div>
          <div>
            <button @click="put(selected)" class="btn btn-primary">Сохранить</button>
            <button @click="unselect" class="btn btn-default">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="add" title="Добавление" @ok="post(newItem)">
      <b-form-input class="s-mb_20" v-model="newItem.name" placeholder="Название"></b-form-input>
      <b-form-select value-field="_id" text-field="name" v-model="newItem.country" :options="countries"></b-form-select>
      <b-form-select value-field="_id" text-field="name" v-model="newItem.lang" :options="langs"></b-form-select>
    </b-modal>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import {mapState, mapActions} from 'vuex'
import * as action from '@/store/types/actionTypes'

export default {
  name: 'types',
  components: {
    pageTop,
    page
  },
  data () {
    return {
      selected: null,
      newItem: {
        name: '',
        lang: null,
        country: null
      }
    }
  },
  computed: {
    ...mapState('types', ['items']),
    ...mapState('langs', ['langs']),
    ...mapState('countries', ['countries'])
  },
  methods: {
    langName (id, collecion) {
      if (collecion === undefined) {
        collecion = this.langs
      }

      if (!id || !collecion.length) {
        return ''
      }

      return collecion.find(item => item._id === id).name
    },
    ...mapActions('types', {
      get: action.GET_TYPES,
      _post: action.POST_TYPES,
      _remove: action.DELETE_TYPES,
      put: action.PUT_TYPES
    }),
    async post (data) {
      await this._post(data)
      await this.get()
    },
    async remove (data) {
      await this._remove(data)
      await this.get()
    },
    ...mapActions('langs', {
      getLangs: action.GET_LANGS
    }),
    ...mapActions('countries', {
      getCountries: action.GET_COUNTRIES
    }),
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
