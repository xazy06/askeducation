<template>
    <ul class="b-breadcrumbs clearfix">
      <li class="b-breadcrumbs_item">
        <router-link class="b-breadcrumbs_item-link" :to="'/'" exact>
          Главная
        </router-link>
      </li>
      <li v-for="(breadcrumb, idx) in breadcrumbsList" :key="idx" class="b-breadcrumbs_item">
        <router-link class="b-breadcrumbs_item-link" :to="breadcrumb.link" active-class="active" exact>
          <span class="b-breadcrumbs_item-link delimiter">|</span>
          {{ breadcrumb.name }}
        </router-link>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'breadcrumbs',
  data () {
    return {
      breadcrumbsList: []
    }
  },
  methods: {
    updateList () {
      this.breadcrumbsList = this.$route.meta.breadcrumb
    }
  },
  watch: {
    '$route' (to, from) {
      this.updateList()
    }
  },
  mounted () {
    this.updateList()
  }
}
</script>

<style scoped lang="scss">
  .b-breadcrumbs {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
    padding-left: 16px;

    @media all and (max-width: 575px) {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-right: -14px;
      margin-left: -14px;
    }

    &_item {
      float:left;
      color: #b9b9b9;

      @media all and (max-width: 575px) {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
        float: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;

        & a {
          font-size: 10px;
        }
      }
    }

    &_item-link {
      font-size: 13px;
      letter-spacing: 1px;
      color: #b9b9b9;

      &.active {
        color: #f04e23;
      }
    }

    .delimiter {
      font-size: 13px;
      letter-spacing: 1px;
      color: #b9b9b9;
      padding: 0 10px;

      @media all and (max-width: 575px) {
        display: none;
      }
    }
  }

</style>
