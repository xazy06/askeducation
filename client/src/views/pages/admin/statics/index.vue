<template>
  <div>
    <p>Image Upload</p>
    <form method="post" enctype="multipart/form-data">
      <input v-on:change="getFiles" type="file" multiple="multiple" name="image" /><br /><br />
      <button v-on:click.prevent="submit" type="button" name="upload">Upload</button>
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
      this.files = event.target.files
    },
    submit (event) {
      let files = this.files

      let formData = new FormData()

      for (var i = 0; i < files.length; i++) {
        let file = files[i]
        //formData.append(`image[${i}]`, file)
        formData.append('image[]', file)
      }

      service.post({'file': true, formData: formData})
    }
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
