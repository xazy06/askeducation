<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="Основное">
        <b-form-input class="s-mb_10" v-model="model.name" placeholder="Название"></b-form-input>
        <b-row>
          <b-col sm="4">
            Язык
            <select class="s-mb_10 form-control" v-model="model.lang">
              <option v-for="option in langs" v-bind:value="option">
                {{ option.name }}
              </option>
            </select>
          </b-col>
          <b-col sm="4">
            Страна
            <select class="s-mb_10 form-control" v-model="model.country">
              <option v-for="option in countries" v-bind:value="option">
                {{ option.name }}
              </option>
            </select>
          </b-col>
          <b-col sm="4">
            Город
            <select class="s-mb_10 form-control" v-model="model.city">
              <option v-for="option in cities" v-bind:value="option">
                {{ option.name }}
              </option>
            </select>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="4">
            Стоимость обучения
            <b-form-input class="s-mb_10" v-model="model.cost" placeholder="Стоимость обучения"></b-form-input>
          </b-col>
          <b-col sm="4">
            Возраст
            <b-form-input class="s-mb_10" v-model="model.age" placeholder="Возраст"></b-form-input>
          </b-col>
          <b-col sm="4">
            Стоимость проживания
            <b-form-input class="s-mb_10" v-model="model.livingCost" placeholder="Стоимость проживания"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="4">
            Старт программы
            <b-form-input class="s-mb_10" v-model="model.starting" placeholder="Старт программы"></b-form-input>
          </b-col>
          <b-col sm="4">
            Человек в группе
            <b-form-input class="s-mb_10" type="number" v-model="model.studentsPerGroup"
                          placeholder="Человек в группе"></b-form-input>
          </b-col>
          <b-col sm="4">
            Длительность уроков
            <b-form-input class="s-mb_10" type="number" v-model="model.lessonLength"
                          placeholder="Длительность уроков"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="4">
            Количество уроков
            <b-form-input class="s-mb_10" type="number" v-model="model.lessonsCount"
                          placeholder="Количество уроков"></b-form-input>
          </b-col>
          <b-col sm="4">
            Валюта
            <b-form-select class="s-mb_10" v-model="model.currency" :options="currencies"></b-form-select>
          </b-col>
          <b-col sm="4">
            Ближ. больш. город
            <select placeholder="Ближ. больш. город" class="form-control" v-model="model.closestCity">
              <option v-for="option in cities" v-bind:value="option">
                {{ option.name }}
              </option>
            </select>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="6">
            Питание
            <b-form-textarea class="s-mb_10" rows="4" v-model="model.food" placeholder="Питание"></b-form-textarea>
          </b-col>
          <b-col sm="6">
            Условия проживания
            <b-form-textarea class="s-mb_10" rows="4" v-model="model.accommodations"
                             placeholder="Условия проживания"></b-form-textarea>
          </b-col>
        </b-row>
        Типы курсов
        <b-form-select multiple class="s-mb_10" :select-size="5" value-field="_id" text-field="name"
                       v-model="model.courses"
                       :options="items"></b-form-select>
      </b-tab>

      <b-tab title="Описание">
        <ckeditor :editor="editor" :id="1" v-model="model.description" :config="editorConfig"></ckeditor>
      </b-tab>

      <b-tab title="Seo">
        <b-form-input class="s-mb_10" v-model="model.seoUrl" placeholder="seoUrl"></b-form-input>
        <b-form-input class="s-mb_10" v-model="model.seoTitle" placeholder="seoTitle"></b-form-input>
        <b-form-input class="s-mb_10" v-model="model.seoKeywords" placeholder="seoKeywords"></b-form-input>
        <b-form-textarea rows="5" v-model="model.seoDescription" placeholder="seoDescription"></b-form-textarea>
      </b-tab>

      <b-tab title="Фото">
        <div class="s-mb_10">
        <b-badge class="s-pointer" v-on:click="setMode({single: true, target: 'img'})" v-b-modal.images>Основное
          фото (править)
        </b-badge>
          </div>

        <div v-if="model.img" class="s-mb_40 main-img_wrapper">
          <img width="200" :src="model.img"/>
          <div v-on:click="removeImage({single: true, target: 'img'})" class="b-remover">Удалить</div>
        </div>

        <div class="s-mb_10">
          <b-badge class="s-pointer" v-on:click="setMode({single: false, target: 'galery'})" v-b-modal.images>Галерея
            (править)
          </b-badge>
        </div>

        <div v-if="model.galery">
          <div v-for="(src, index) in model.galery" class="galery-item">
            <img width="140" :src="src"/>
            <div v-on:click="removeImage({single: false, target: 'galery'}, index)" class="b-remover">Удалить</div>
          </div>
        </div>
      </b-tab>
    </b-tabs>

    <b-modal size="xl" id="images" title="Выбор изображений">
      <div v-for="src in statics" v-bind:key="src" class="select-image">
        <img class="img-select-image" v-bind:class="{'active': (src === model.img || model.galery.indexOf(src) > -1)}"
             v-on:click="setImage(src)"
             :src="src"/>
      </div>
    </b-modal>
  </div>

</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import * as service from '@/services/upload'

export default {
  props: ['model', 'langs', 'countries', 'cities', 'items', 'currencies'],
  name: 'editForm',
  data () {
    return {
      editor: ClassicEditor,
      editor2: ClassicEditor,
      editorConfig: {},
      statics: [],
      mode: {
        single: true,
        target: null
      }
    }
  },
  methods: {
    setMode (mode) {
      this.mode.single = mode.single
      this.mode.target = mode.target
    },
    setImage (src) {
      if (this.mode.single) {
        this.model[this.mode.target] = src
        this.force()
      } else {
        this.model[this.mode.target].push(src)
      }
    },
    removeImage (mode, index) {
      this.setMode(mode)

      if (this.mode.single) {
        this.model[this.mode.target] = ''
        this.force()
      } else {
        this.model[this.mode.target].splice(index, 1)
      }
    },
    force () {
      this.model.galery.push()
      this.model.galery.pop()
    },
    async getStatics () {
      let images = await service.get()

      this.statics = images.files || []
    }
  },
  mounted () {
    this.getStatics()
  }
}
</script>

<style scoped lang="scss">
  .img-select-image {
    width: 100%;

    &.active {
      opacity: 0.5;
      cursor: not-allowed;

      &:hover {
        opacity: 1;
      }
    }
  }

  .select-image {
    height: 140px;
    width: 140px;
    overflow: hidden;
    display: inline-block;
    margin-right: 10px;
    border: 1px solid #f1f1f1;
    padding: 5px;
  }

  .main-img_wrapper {
    position: relative;
    height: 200px;
    overflow: hidden;
    display: inline-block;

    &:hover {
      .b-remover {
        bottom: 0;
      }
    }
  }

  .galery-item {
    position: relative;
    height: 140px;
    overflow: hidden;
    width: 140px;
    display: inline-block;

    &:hover {
      .b-remover {
        bottom: 0;
      }
    }
  }

  .b-remover {
    position: absolute;
    height: 40px;
    bottom: -100%;
    left: 0;
    right: 0;
    background-color: #000;
    text-align: center;
    color: #fff;
    font-size:12px;
    line-height: 16px;
    padding: 14px 0;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;

  }
</style>
