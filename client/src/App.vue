<template>
  <div id="app">
    <admin-layout :admin="true" v-if="isAdmin"></admin-layout>
    <layout v-else></layout>
  </div>
</template>

<script>
import Layout from '@/views/layouts/layout'
import AdminLayout from '@/views/layouts/adminLayout'
export default {
  name: 'App',
  components: {
    Layout,
    AdminLayout
  },
  computed: {
    isAdmin () {
      return this.$route.meta.layout === 'admin'
    }
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
