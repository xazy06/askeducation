<template>
  <div>
    <page>
      <router-view></router-view>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
export default {
  name: 'lang',
  components: {
    pageTop,
    page
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
