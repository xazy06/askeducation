<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">Языковые курсы</h1>
    </page-top>
    <page>

    </page>
  </div>
</template>

<script>
    import pageTop from '@/views/components/pageTop'
    import page from '@/views/components/page'
    export default {
        name: 'contacts',
        components: {
            pageTop,
            page
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
