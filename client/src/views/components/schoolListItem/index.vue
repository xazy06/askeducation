<template>
  <div class="b-school-list-item clearfix">
    <div class="b-school-list-item_img">
      <img :src="school.img" />
    </div>
    <div class="b-school-list-item_info">
      <div class="b-school-list-item_info__head">
        <router-link :to="`/${to}/${school._id}`">
          {{school.name}}
        </router-link>
      </div>
      <div class="b-school-list-item_info__head-sub">Anglo European Summer Premium Centres</div>
      <div class="b-school-list-item_info__head-sub_under">
        Летний лагерь в оксфорде для 12-17 лет
      </div>
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
  props: ['school', 'to']
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
      position: relative;
    }

    &:hover {
      box-shadow: 0 0 12px rgba(240, 78, 35, 0.2);
    }

    &_img {
      width: 203px;
      height: 212px;
      float: left;
      overflow: hidden;

      & img {
        width: 100%;
        margin-top: 18px;
      }

      @media all and (max-width: 575px) {
        width: 100%;
        float: none;
        height: auto;
        max-height: 300px;
        margin-bottom: 40px;

        & img {
          margin-top: 0;
        }
      }
    }

    &_info {
      overflow: hidden;
      margin: 0 0 0 237px;

      &__head {
        margin-bottom: 10px;
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
            margin-bottom: 20px;
            text-transform: uppercase;
          }

          @media all and (max-width: 575px) {
            font-size: 12px;

            &_under {
              font-size: 12px;
            }
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
        margin: 0;
        position: absolute;
        z-index: 1;
        padding: 10px 5px;
        background: linear-gradient(144deg, rgba(255, 255, 255, 0.94) 26%, transparent 74%);
        bottom: 35px;
        right: 16px;
        left: 16px;
        font-weight: 700;
        text-overflow: ellipsis;
        overflow: hidden;
        top: 17px;

        &__head {
          margin-bottom: 10px;
          font-size: 1em;
          font-weight: 700;
        }

        &__list {
          padding-left: 0;
          font-size: 0.75em;
          line-height: 1.1em;
          font-family: 'Formular-bold';
          font-weight: 100;
        }

      }
    }
  }
</style>
