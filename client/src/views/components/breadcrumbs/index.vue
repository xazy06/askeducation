<template>
    <ul class="b-breadcrumbs clearfix">
      <li class="b-breadcrumbs_item">
        <router-link class="b-breadcrumbs_item-link" :to="'/'" exact>
          Главная
        </router-link>
      </li>
<!--      <li class="b-breadcrumbs_item">-->
<!--        <span class="b-breadcrumbs_item-link delimiter">|</span>-->
<!--      </li>-->
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
      this.breadcrumbsList = this.$route.meta.breadcrumb;
    }
  },
  watch: {
    '$route' (to, from) {
      this.updateList();
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

    &_item {
      float:left;
      color: #b9b9b9;
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
    }
  }

</style>
