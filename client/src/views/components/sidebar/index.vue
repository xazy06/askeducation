<template>
  <div class="b-sidebar">
    <router-link class="s-display_b" to="/">
      <img class="b-logo" alt="logo" src="@/assets/img/logo.png"/>
    </router-link>
    <bmenu :admin="admin"/>
    <sidebar-bottom/>
  </div>
</template>

<script>
import bmenu from '@/views/components/bmenu'
import sidebarBottom from '@/views/components/sidebar/sidebar-bottom'

export default {
  props: ['admin'],
  name: 'sidebar',
  components: {
    bmenu,
    sidebarBottom
  }
}
</script>

<style scoped lang="scss">
  .b-sidebar {
    width: 339px;
    float: left;
    background-color: #f7f7f7;
    height: 100%;
    padding: 73px 30px 0 57px;
    transition: all 0.5s ease;
    overflow: auto;

    @media all and (max-width: 575px) {
      padding: 56px 30px 0 57px;
    }
  }

  .menu-opened .b-sidebar {
      margin-left: 0;
      width: 100%;
  }

  .b-logo {
    margin-bottom: 40px;

    @media all and (max-width: 575px) {
      height: 100px;
      margin-bottom: 15px;
    }
  }
</style>
