<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">Языковые курсы</h1>
    </page-top>
    <page>
      <lang-filter></lang-filter>

      <group-header sub="интенсив">Язык летом</group-header>
    </page>
  </div>
</template>

<script>
    import pageTop from '@/views/components/pageTop'
    import page from '@/views/components/page'
    import langFilter from '@/views/components/langFilter'
    import groupHeader from '@/views/components/groupHeader'
    export default {
        name: 'contacts',
        components: {
          pageTop,
          page,
          langFilter,
          groupHeader
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
