<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div v-bind:class="[{'col-md-5': selected !== null}, {'col-md-12': selected === null}]" class="col-md-5">
          <h2 class="clearfix">
            Новости
            <button v-b-modal.add class="btn btn-primary">Добавить</button>
          </h2>
          <table class="table table-condensed table-hover">
            <thead>
            <tr>
              <th>Дата</th>
              <th>Заголовок</th>
              <th class="c-100"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-on:click="select(item)" v-for="item in news" v-bind:key="item._id">
              <td>{{item.date}}</td>
              <td>{{item.title}}</td>
              <td>
                <b-button v-on:click.stop="remove(item._id)" variant="link">удалить</b-button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-if="selected" class="col-md-7">
          <h2>Новость {{selected.name}}</h2>
          <div class="s-mb_40">
            <div class="s-mb_20">
              <b-form-input type="date" class="s-mb_20" v-model="selected.date" placeholder="Дата"></b-form-input>
              <b-form-input class="s-mb_20" v-model="selected.title" placeholder="Заголовок"></b-form-input>
              <b-form-input class="s-mb_10" v-model="selected.seoTitle" placeholder="seoTitle"></b-form-input>
              <b-form-input class="s-mb_10" v-model="selected.seoKeywords" placeholder="seoKeywords"></b-form-input>
              <b-form-textarea rows="5" class="s-mb_20" v-model="selected.seoDescription" placeholder="seoDescription"></b-form-textarea>
              <ckeditor :editor="editor2" :id="2" v-model="selected.text" :config="editorConfig"></ckeditor>
            </div>
          </div>
          <div>
            <button @click="put(selected)" class="btn btn-primary">Сохранить</button>
            <button @click="unselect" class="btn btn-default">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
    <b-modal size="xl" id="add" title="Добавление" @ok="post(newItem)">
      <b-form-input type="date" class="s-mb_20" v-model="newItem.date" placeholder="Дата"></b-form-input>
      <b-form-input class="s-mb_20" v-model="newItem.title" placeholder="Заголовок"></b-form-input>
      <b-form-input class="s-mb_10" v-model="newItem.seoTitle" placeholder="seoTitle"></b-form-input>
      <b-form-input class="s-mb_10" v-model="newItem.seoKeywords" placeholder="seoKeywords"></b-form-input>
      <b-form-textarea rows="5" class="s-mb_20" v-model="newItem.seoDescription" placeholder="seoDescription"></b-form-textarea>
      <ckeditor :editor="editor" :id="1" v-model="newItem.text" :config="editorConfig"></ckeditor>
    </b-modal>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {mapState, mapActions} from 'vuex'
import * as action from '@/store/types/actionTypes'

export default {
  name: 'news',
  components: {
    pageTop,
    page
  },
  data () {
    return {
      editor: ClassicEditor,
      editor2: ClassicEditor,
      editorConfig: {
      },
      selected: null,
      newItem: {
        date: '',
        text: '',
        title: '',
        seoTitle: '',
        seoKeywords: '',
        seoDescription: ''
      }
    }
  },
  computed: {
    ...mapState('news', ['news'])
  },
  methods: {
    ...mapActions('news', {
      get: action.GET_NEWS,
      _post: action.POST_NEWS,
      _remove: action.DELETE_NEWS,
      put: action.PUT_NEWS
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
