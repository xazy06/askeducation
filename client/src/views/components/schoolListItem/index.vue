<template>
  <div class="b-school-list-item">
    <div class="b-school-list-item_img"></div>
    <div class="b-school-list-item_info">
      <div class="b-school-list-item_info__head">{{school.name}}</div>
      <div class="b-school-list-item_info__head-sub"></div>
      <div class="b-school-list-item_info__head-sub_under"></div>
      <ul class="b-school-list-item_info__list">
        <li>{{school.language}}</li>
        <li>{{school.country}} {{school.city}}</li>
        <li>{{school.age}}</li>
        <li>{{school.cost}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'schoolListItem',
  props: ['school']
}
</script>

<style scoped lang="scss">
  .b-school-list-item {
    width: 100%;
    padding:  17px 16px 23px;

    &_img {
      width: 203px;
      height: 212px;
      float: left;
    }

    &_info {
      overflow: hidden;
      margin: 0 0 0 237px;

      &__head {
        margin-bottom: 14px;
        color: #f04e23;
        font-size: 45px;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 2.7px;

        &-sub {
          color: #230000;
          font-size: 16px;
          font-weight: 700;
          line-height: 25px;
          text-transform: uppercase;

          &_under {
            color: #f04e23;
            font-weight: 300;
            letter-spacing: 1.28px;
          }
        }
      }

      &__list {
        font-weight: 300;
        letter-spacing: 1.28px;
        list-style: none;
      }
    }
  }
</style>
