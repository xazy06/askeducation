<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div v-bind:class="[{'col-md-6': selected !== null}, {'col-md-12': selected === null}]" class="col-md-6">
          <h2 class="clearfix">
            Языки
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
            <tr v-on:click="select(item)" v-for="item in langs" v-bind:key="item._id">
              <td>{{item.name}}</td>
              <td>
                <b-button v-on:click.stop="remove(item._id)" variant="link">удалить</b-button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-if="selected" class="col-md-6">
          <h2>Язык {{selected.name}}</h2>
          <div class="s-mb_40">
            <div class="s-mb_20">
              <b-form-input class="s-mb_20" v-model="selected.name" placeholder="Название"></b-form-input>
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
    </b-modal>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import {mapState, mapActions} from 'vuex'
import * as action from '@/store/types/actionTypes'

export default {
  name: 'langs',
  components: {
    pageTop,
    page
  },
  data () {
    return {
      selected: null,
      newItem: {
        name: ''
      }
    }
  },
  computed: {
    ...mapState('langs', ['langs'])
  },
  methods: {
    ...mapActions('langs', {
      get: action.GET_LANGS,
      _post: action.POST_LANGS,
      _remove: action.DELETE_LANGS,
      put: action.PUT_LANGS
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .c-100 {
    width: 100px;
  }
</style>
