<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">Контакты</h1>
      <div class="h-sub">
        Москва,<br/>
        Костомаровский переулок,<br/>
        дом 3, Строение 1а, офис 313<br/>
        <a href="tel:+74957302082">+7 (495) 730-20-82</a>
      </div>
    </page-top>
    <page>
      <div class="b-p__inner">
        <div class="b-contacts">
          <p class="i">Тысячи людей — и детей, и взрослых - воспользовались за это время нашими услугами. Каждому мы отдали частичку своих сердец.
          О многих из них мы сохранили самые прекрасные воспоминания. Многие остались нашими добрыми друзьями на всю жизнь.
          </p>

          <div class="s-sp-p">
            <div class="s-ta_l s-dib">
          — Наши сотрудники работают в области<br/>
          обучения за рубежом с 1991 года
            </div>
          </div>
          <p class="i">
          За годы работы мы накопили огромный опыт. Мы научились выполнять любое желание клиента — даже, на первый взгляд, невыполнимое.
          Наша работа, да и вся наша жизнь, подчинены тому, чтобы нашим клиентам было уютно, спокойно, комфортно.
          </p>
        </div>
        <contact-form/>
      </div>
    </page>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'
import contactForm from '@/views/components/contactForm'

export default {
  name: 'contacts',
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
<style lang="scss" scoped>

  .s-sp-p {
    color: #f04e23;
    font-family: "Formular-bold";
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin: 40px auto;
    text-align: center;
  }

  .b-p__inner {

  }

  .b-contacts {
    padding-right: 132px;
    font-size: 20px;
    font-weight: 300;
    line-height: 28px;
    margin-bottom: 90px;
  }
</style>
