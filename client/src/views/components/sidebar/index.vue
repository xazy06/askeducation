<template>
    <div class="b-sidebar">
        <img class="b-logo" alt="logo" src="@/assets/img/logo.png"/>
        <bmenu :admin="admin" />
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
    float:left;
    background-color: #f7f7f7;
    height:100%;
    padding: 73px 30px 0 57px;
  }

  .b-logo {
      margin-bottom: 40px;
  }
</style>
