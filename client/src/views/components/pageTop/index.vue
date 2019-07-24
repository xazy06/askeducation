<template>
  <div class="b-top-wrapper">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "pageTop"
    }
</script>

<style scoped lang="scss">
  .b-top-wrapper {
    height: 468px;
    padding: 120px 40px 0;

    background: #ffffff; /* Old browsers */
    background: -moz-linear-gradient(left,  #ffffff 0%, #bebebe 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  #ffffff 0%,#bebebe 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  #ffffff 0%,#bebebe 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#bebebe',GradientType=1 ); /* IE6-9 */

  }
</style>