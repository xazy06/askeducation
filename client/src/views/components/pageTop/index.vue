<template>
  <div v-bind:style="{backgroundImage: 'url(' + require(`@/assets/img/page-top/${data}`) + ')'}" class="b-top-wrapper">
    <div class="b-top-inner">
      <img v-on:click="toggleMenu" class="mobile-menu-toggler" src="@/assets/img/menu.svg" />
    <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageTop',
  data () {
    return {
      data: 'map-page.png'
    }
  },
  methods: {
    toggleMenu () {
      if (document.body.className.indexOf('menu-opened') > -1) {
        document.body.classList.remove('menu-opened')
      } else {
        document.body.classList.add('menu-opened')
      }
    },
    update () {
      document.body.classList.remove('menu-opened')
      if (this.$route.meta.banner) {
        this.data = this.$route.meta.banner
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.update()
    }
  },
  mounted () {
    this.update()
  }
}

</script>

<style scoped lang="scss">
  .b-top {
    &-wrapper {
      height: 472px;
      background-size: cover;
      background-position: 100% 0;
      background-repeat: no-repeat;
      margin-bottom: 10px;

      .mobile-menu-toggler {
        width: 40px;
        position: fixed;
        right: 15px;
        top: 0;
        cursor: pointer;
        display: none;
      }

      @media all and (max-width: 575px) {
        height: 200px;

        .mobile-menu-toggler {
          display: inline-block;
        }
      }

      @media all and (min-width: 576px)  and (max-width: 1024px) {
        .mobile-menu-toggler {
          display: inline-block;
          top: 15px;
          right: 25px;
          width: 50px;
        }
      }
    }

    &-inner {
      padding: 120px 40px 0;
      height: 100%;
      background: #f7f7f7; /* Old browsers */
      background: -moz-linear-gradient(left,  #f7f7f7 0%, transparent 70%);
      background: -webkit-linear-gradient(left,  #f7f7f7 0%,transparent 70%);
      background: linear-gradient(to right,  #f7f7f7 0%, transparent 70%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7f7f7', endColorstr='transparent',GradientType=1 );

      @media all and (max-width: 575px) {
        padding: 40px 14px 0;

        h1 {
          font-size: 1.7em;
          max-width: 100%;
        }
      }
    }

  }

  .h-sub {
    color: #230000;
    font-size: 16px;
    font-weight: 700;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 1.28px;

    a {
      color: #f04e23;
    }
  }
</style>
