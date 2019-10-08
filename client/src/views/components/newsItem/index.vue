<template>
  <div class="b-article clearfix">
    <div class="b-article-name">

      <strong class="b-article-date">{{date}}</strong>
      <br/>
      <router-link :to="`/news/${id}`">
        <slot/>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'articleItem',
  props: ['date', 'id']
}
</script>

<style scoped lang="scss">
  .b-article {
    margin-bottom: 40px;

    &-name {
      color: #230000;
      font-size: 25px;

      @media all and (max-width: 575px) {
        font-size: 1em;
      }

      & a {
        color: #230000;
      }
    }

    &-date {
      font-size: 15px;
      color: #f04e23;
    }
  }
</style>
