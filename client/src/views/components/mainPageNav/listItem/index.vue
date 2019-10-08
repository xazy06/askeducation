<template>
  <div class="b-p-nav-filter">
    <div class="b-p-nav-filter--top">
      <strong v-html="title" class="b-p-nav-filter--name"></strong>
    </div>

    <div class="b-p-nav-filter--middle">
      <div v-for="lang in list" v-bind:key="lang._id" class="b-p-nav-filter--middle-item">
        <router-link :to="`${link}/lang/${lang._id}`">
        {{lang.name}}
        </router-link>
      </div>
    </div>

    <div class="b-p-nav-filter--bottom">
      <img v-for="icon in icons" v-bind:key="icon" :src="require(`@/assets/svg/${icon}.svg`)" />
    </div>

    <img class="b-p-nav-filter--angle" src="@/assets/svg/Rectangle_4.svg" />
    <img class="b-p-nav-filter--angle-active" src="@/assets/svg/Rectangle_5.svg" />
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props: ['title', 'list', 'icons', 'link'],
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

  .b-p-nav {
    &-filter {
      position: relative;
      margin-right: 14px;
      padding: 22px 20px 15px;
      width: 100%;
      height: 200px;
      transition: height 1s ease;

      @media all and (max-width: 575px) {
        padding: 0;
        margin-bottom: 20px;
        height: 140px;
      }

      .s-placeholder {
        margin-top: -26px;
        display: block;
        padding-bottom: 2px;
      }

      &:hover {
        box-shadow: 0 0 12px rgba(240, 78, 35, 0.2);
        height: auto;
        /*position: absolute;*/
        /*margin: 0 14px 0 0;*/
        /*width: calc(100% - 14px);*/

        @media all and (max-width: 575px) {
          box-shadow: none;
        }

        .b-p-nav-filter--angle-active {
          display: inline-block;
        }

        .b-p-nav-filter--middle {
          opacity: 1;
          display: block;
        }
      }

      &--top {
        margin-bottom: 0;
        text-transform: uppercase;

        @media all and (max-width: 575px) {
          /*display: none;*/
          white-space: nowrap;
        }
      }

      &--bottom {
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 20px;
        right: 20px;
        bottom: 15px;

        @media all and (max-width: 575px) {
          left: 0;
        }

        img {
          width: 32px;
          height: 32px;

          @media all and (max-width: 575px) {
            width: 22px;
            height: 22px;
          }
        }
      }

      &--middle {
        transition: all 1s ease;
        padding: 59px 0 73px;
        opacity: 0;
        display: none;

        @media all and (max-width: 575px) {
          padding: 15px 0 60px;
        }

        &-item {
          color: #230000;
          font-size: 16px;
          font-family: "Formular-light";
          font-weight: 300;
          line-height: 25px;
          text-transform: uppercase;
          letter-spacing: 1.28px;
          cursor: pointer;

          & a {
            color: #230000;
          }

          @media all and (max-width: 575px) {
            font-size: 12px;
          }

          &:hover {
            color: #f04e23;
            font-family: "Formular-bold";
            font-weight: 500;
          }
        }
      }

      &--name {
        color: #230000;
        letter-spacing: 1.6px;
        font-size: 20px;
        text-transform: uppercase;
        line-height: 25px;
        font-family: "Formular-bold";
        white-space: pre-line;

        @media all and (max-width: 575px) {
          font-size: 14px;
          line-height: 18px;
        }
      }

      &--angle,
      &--angle-active{
        position: absolute;
        right: 0;
        bottom: 0;

        @media all and (max-width: 575px) {
          bottom: 7px;
        }

        &-active {
          display: none;
        }
      }
    }
  }
</style>
