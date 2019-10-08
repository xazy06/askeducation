<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">
        Лето в праге
        <br/>
        <span>от €890 за 2 недели</span>
      </h1>
    </page-top>
    <page>
      <main-page-nav></main-page-nav>

      <main-page-slider-item name="Новости" title="Летняя подготовка к обучению в школах-пансионах и университетах США"></main-page-slider-item>

      <main-page-slider-item name="Статьи" title="Летняя подготовка к обучению в школах-пансионах и университетах США"></main-page-slider-item>

      <contact-form/>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import contactForm from '@/views/components/contactForm'
import mainPageNav from '@/views/components/mainPageNav'
import mainPageSliderItem from '@/views/components/mainPageSliderItem'
export default {
  name: 'home',
  components: {
    pageTop,
    page,
    contactForm,
    mainPageNav,
    mainPageSliderItem
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
