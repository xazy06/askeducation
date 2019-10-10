<template>
  <div>
    <form ref="form" method="post" enctype="multipart/form-data">
      <div class="s-mb_40">
        <b-form-file v-on:change="getFiles" multiple="multiple" name="image" />
      </div>

      <div class="s-mb_40">
        <div v-for="(file, key) in files" v-bind:key="key">
          {{ file.name }}
          <span class="remove-file" v-on:click="removeFile( key )">удалить</span>
        </div>
      </div>

      <b-button class="btn btn-primary" v-on:click.prevent="submit" name="upload">Загрузить</b-button>
    </form>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import * as service from '@/services/upload'

export default {
  name: 'statics',
  components: {
    pageTop,
    page
  },
  data () {
    return {
      files: []
    }
  },
  computed: {

  },
  methods: {
    getFiles (event) {
      let files = event.target.files

      for (let i = 0; i < files.length; i++) {
        this.files.push(files[i])
      }
    },
    removeFile (key) {
      this.files.splice(key, 1)
    },
    async submit (event) {
      let files = this.files

      let formData = new FormData()

      for (var i = 0; i < files.length; i++) {
        let file = files[i]
        formData.append('image[]', file)
      }

      await service.post({'file': true, formData: formData})

      return this.clearForm()
    },
    clearForm () {
      this.files = ''
      this.files = []
      return this.$refs.form.reset()
    }
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
