<template>
  <div class="b-page">
    <breadcrumbs></breadcrumbs>
    <slot/>
  </div>
</template>

<script>
import breadcrumbs from '@/views/components/breadcrumbs'
export default {
  name: 'page',
  components: {
    breadcrumbs
  }
}
</script>

<style lang="scss">
  .b-page {
    padding: 0 70px 0 14px;
    color: #230000;
    /*font-size: 20px;*/
  }

  h1 {
    max-width: 60%;

    span {
      color: #230000 !important;
    }
  }
</style>
