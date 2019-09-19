<template>
  <div class="container-fluid b-lang-filters-wrapper">
    <div class="b-lang-filters row">

      <div class="col-md-3">
        <div class="b-lang-filter">
          <div class="b-lang-filter--top">
            <strong class="b-lang-filter--name">Программа</strong>
          </div>

          <a class="b-lang-filter--bottom" href="#">язык летом</a>
          <img class="b-lang-filter--angle" src="@/assets/svg/Rectangle_4.svg" />
        </div>
      </div>

      <div class="col-md-3">
        <div class="b-lang-filter">
          <div class="b-lang-filter--top">
            <strong class="b-lang-filter--name">Язык</strong>
          </div>

          <a class="b-lang-filter--bottom" href="#">Английский</a>
          <img class="b-lang-filter--angle" src="@/assets/svg/Rectangle_4.svg" />
        </div>
      </div>

      <div class="col-md-3">
        <div class="b-lang-filter">
          <div class="b-lang-filter--top">
            <strong class="b-lang-filter--name">Страна</strong>
          </div>

          <a class="b-lang-filter--bottom" href="#">Великобритания</a>
          <img class="b-lang-filter--angle" src="@/assets/svg/Rectangle_4.svg" />
        </div>
      </div>

      <div class="col-md-3">
        <div class="b-lang-filter">
          <div class="b-lang-filter--top">
            <strong class="b-lang-filter--name">Возраст</strong>
          </div>

          <a class="b-lang-filter--bottom" href="#">12-17 лет</a>
          <img class="b-lang-filter--angle" src="@/assets/svg/Rectangle_4.svg" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "langFilter"
    }
</script>

<style scoped lang="scss">
  .b-lang {
    &-filters {
      &-wrapper {
        margin-bottom: 102px;
      }
    }

    &-filter {
      cursor: pointer;
      position: relative;
      margin-right: 14px;
      padding: 22px 16px 25px;

      &--top {
        margin-bottom: 127px;
        text-transform: uppercase;
      }

      &--name {
        color: #230000;
        letter-spacing: 1.6px;
        text-transform: uppercase;
        line-height: 25px;
        font-family: "Formular-bold";
      }

      &--bottom {
        margin-bottom: 127px;
        letter-spacing: 1.28px;
        color: #f04e23;
        font-size: 16px;
        font-weight: 300;
        line-height: 25px;
      }

      &--angle {
        position: absolute;
        right: 0;
        bottom: 0;
      }

    }
  }
</style>
