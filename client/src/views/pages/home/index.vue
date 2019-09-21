<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase"></h1>
    </page-top>
    <page>

      <contact-form/>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import contactForm from '@/views/components/contactForm'
export default {
  name: 'home',
  components: {
    pageTop,
    page,
    contactForm
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
