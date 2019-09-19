<template>
  <div class="b-page">
    <breadcrumbs></breadcrumbs>
    <slot/>
  </div>
</template>

<script>
  import breadcrumbs from '@/views/components/breadcrumbs'
    export default {
        name: "page",
        components: {
            breadcrumbs
        }
    }
</script>

<style scoped>
  .b-page {
    padding: 0 70px 0 14px;
    color: #230000;
    /*font-size: 20px;*/
  }
</style>
