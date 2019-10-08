<template>
  <div class="b-block-sliding">
    <div class="b-block-sliding-name">
      {{name}}
    </div>

    <div class="b-block-sliding-title">
      {{title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainPageSliderItem',
  props: ['title', 'name'],
  computed: {

  },
  methods: {

  },
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>

<style scoped lang="scss">
  .b-block-sliding {
    background-image: linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0.96) 10%, rgb(247, 247, 247) 100%);
    margin-right: -70px;
    margin-bottom: 37px;
    height: 229px;
    padding: 34px 38px 32px;

    &-name {
      font-size: 45px;
      font-weight: 300;
      text-transform: uppercase;
      color: #f04e23;
      letter-spacing: 2.7px;
      margin-bottom: 26px;
    }

    &-title {
      font-size: 16px;
      font-weight: 700;
      line-height: 25px;
      text-transform: uppercase;
      letter-spacing: 1.28px;
    }

    @media all and (max-width: 575px) {
      height: auto;
      margin-right: 0;
      padding: 18px 20px 32px;
      margin-bottom: 20px;

      &-name {
        font-size: 20px;
        margin-bottom: 18px;
        font-weight: 600;
      }

      &-title {
        font-size: 12px;
      }
    }
  }
</style>
