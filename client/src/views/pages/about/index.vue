<template>
  <div>
    <page-top>
      <h1 class="red s-uppercase">О нас</h1>
    </page-top>
    <page>
      <div class="b-p__inner">
        <div class="b-about">
          <p class="i">
            Являясь партнером крупнейших образовательных центров Европы, Австралии, Северной Америки и Новой Зеландии,
            мы предлагаем достойное образование по доступным ценам, так как работаем без посредников.
          </p>
          <p class="i">
            Наш центр существует почти 20 лет — за это время мы накопили большой опыт в организации обучения за рубежом,
            отобрав лучшие образовательные заведения и программы Старого и Нового Света.
            А имея договоры на эксклюзивные полномочия с крупнейшими образовательными центрами мира, мы можем предложить
            вам по-настоящему уникальные условия.
          </p>
          <p class="i">
            Специалисты Консультанта Международного Образования подберут для вас оптимальную программу обучения за
            рубежом, соответствующую Вашему уровню подготовки и вашим целям.
          </p>
          <ul class="b-about-courses">
            <li class="b-about-courses-item">— Языковые курсы для взрослых и детей</li>
            <li class="b-about-courses-item">— Курсы в школе-пансионе</li>
            <li class="b-about-courses-item">— Программы в колледже</li>
            <li class="b-about-courses-item">— Программы в университете</li>
          </ul>
          <p class="i">
            К каждому студенту мы стараемся найти индивидуальный подход
            и подобрать программу обучения за рубежом, которая оптимально соответствует его целям и финансовым
            возможностям. Команда профессионалов – педагогов, психологов, менеджеров – поможет найти решение по каждому
            конкретному случаю и даст рекомендации, которые не только помогут выбрать образовательное учреждение,
            но и откроют дорогу в новую жизнь.
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
<style lang="scss" scoped>
  .b-about {
    padding-right: 132px;
    font-size: 20px;
    font-weight: 300;
    line-height: 28px;
    margin-bottom: 90px;

    @media all and (max-width: 575px) {
      padding-right: 0;
    }

    &-courses {
      list-style: none;
      margin-left: 100px;
      font-family: "Formular-bold";

      @media all and (max-width: 575px) {
        margin-left: 0;
      }
    }

    &-courses-item {
      color: #f04e23;
      font-weight: 700;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }
  }
</style>
