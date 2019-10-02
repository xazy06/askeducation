<template>
  <div>
    <b-form-input class="s-mb_10" v-model="model.name" placeholder="Название"></b-form-input>
    <b-row>
      <b-col sm="4">
        <b-form-input class="s-mb_10" v-model="model.age" placeholder="Возраст"></b-form-input>
      </b-col>
      <b-col sm="4">
        <b-form-input class="s-mb_10" v-model="model.cost" placeholder="Стоимость обучения"></b-form-input>
      </b-col>
      <b-col sm="4">
        <select class="form-control" v-model="model.lang">
          <option v-for="option in langs" v-bind:value="option">
            {{ option.name }}
          </option>
        </select>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <select class="form-control" v-model="model.country">
          <option v-for="option in countries" v-bind:value="option">
            {{ option.name }}
          </option>
        </select>
      </b-col>
      <b-col sm="4">
        <select class="form-control" v-model="model.city">
          <option v-for="option in cities" v-bind:value="option">
            {{ option.name }}
          </option>
        </select>
      </b-col>
      <b-col sm="4">
        <b-form-select class="s-mb_10" v-model="model.currency" :options="currencies"></b-form-select>
      </b-col>
    </b-row>
    <b-form-textarea class="s-mb_10" rows="7" v-model="model.description" placeholder="Описание"></b-form-textarea>
    <b-form-select multiple class="s-mb_10" :select-size="5" value-field="_id" text-field="name" v-model="model.courses" :options="items"></b-form-select>

    <div>
      <b-button variant="link" v-b-toggle.seo class="m-1">SEO</b-button>
      <b-collapse id="seo">
        <b-form-input class="s-mb_10" v-model="model.seoUrl" placeholder="seoUrl"></b-form-input>
        <b-form-input class="s-mb_10" v-model="model.seoTitle" placeholder="seoTitle"></b-form-input>
        <b-form-input class="s-mb_10" v-model="model.seoKeywords" placeholder="seoKeywords"></b-form-input>
        <b-form-textarea rows="5" v-model="model.seoDescription" placeholder="seoDescription"></b-form-textarea>
      </b-collapse>
    </div>
  </div>

</template>

<script>
export default {
  props: ['model', 'langs', 'countries', 'cities', 'items', 'currencies'],
  name: 'editForm'
}
</script>

<style scoped>

</style>
