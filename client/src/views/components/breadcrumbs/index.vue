<template>
    <ul class="b-breadcrumbs clearfix">
      <li class="b-breadcrumbs_item">
        <a class="b-breadcrumbs_item-link">Главная</a>
      </li>
      <li class="b-breadcrumbs_item">
        <span class="b-breadcrumbs_item-link delimiter">|</span>
      </li>
      <li class="b-breadcrumbs_item">
        <a class="b-breadcrumbs_item-link">{{ $route.meta.name }}</a>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "breadcrumbs",
        watch: {
            '$route' (to, from) {
                console.log(to, from);
            }
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