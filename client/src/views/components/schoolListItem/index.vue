<template>
  <div class="b-school-list-item clearfix">
    <div class="b-school-list-item_img">
      <img src="@/assets/img/a9e89341c4564012f7a6ff7986b9e8a6.jpg" />
    </div>
    <div class="b-school-list-item_info">
      <div class="b-school-list-item_info__head">
        <router-link :to="`/school/${school._id}`">
          {{school.name}}
        </router-link>
      </div>
      <div class="b-school-list-item_info__head-sub"></div>
      <div class="b-school-list-item_info__head-sub_under"></div>
      <ul class="b-school-list-item_info__list">
        <li>
          {{school.lang.name}}
        </li>
        <li>{{school.country.name}} {{school.city.name}}</li>
        <li>{{school.age}}</li>
        <li>{{school.cost}} {{school.currency}}</li>
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

    @media all and (max-width: 575px) {
      margin-left: -16px;
      margin-right: -16px;
      width: auto;
    }

    &:hover {
      box-shadow: 0 0 12px rgba(240, 78, 35, 0.2);
    }

    &_img {
      width: 203px;
      height: 212px;
      float: left;

      & img {
        width: 100%;
        margin-top: 18px;
      }

      @media all and (max-width: 575px) {
        width: 100%;
        float: none;

        & img {
          margin-top: 0;
        }
      }
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

        & a {
          color: #f04e23;
        }

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
        font-weight: 600;
        letter-spacing: 1.28px;
        list-style: none;
        text-transform: uppercase;
        padding-left: 29px;
        line-height: 25px;
      }

      @media all and (max-width: 575px) {
        margin: 10px 0 0 0;

        &__head {
          margin-bottom: 10px;
          font-size: 1em;
        }

        &__list {
          padding-left: 0;
          font-size: 0.85em;
          line-height: 1.2em;
        }

      }
    }
  }
</style>
