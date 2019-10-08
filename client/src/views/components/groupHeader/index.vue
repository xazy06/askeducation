<template>
  <div class="b-group-head">
    <slot></slot>
    <span v-if="sub" class="b-group-head--sub">{{sub}}</span>
  </div>
</template>

<script>
export default {
  name: 'groupHeader',
  props: ['sub']
}
</script>

<style scoped lang="scss">
  .b-group-head {
    color: #230000;
    font-size: 45px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2.7px;
    margin-bottom: 60px;
    padding: 0;

    @media all and (max-width: 575px) {
      font-size: 1.1em;
      // white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 30px;
      font-weight: 700;
    }

    &--sub {
      color: #f04e23;
      letter-spacing: 2.7px;
      display: block;
    }
  }
</style>
