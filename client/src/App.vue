<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
import Layout from '@/views/layouts/layout'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style lang="scss">
  @import 'assets/scss/style';

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

</style>
