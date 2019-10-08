<template>
  <div class="b-contact-list">
    <div class="row">
      <div class="s-full-m col-lg-3"></div>
      <div class="s-full-m col-lg-9">
        <div v-for="item in items" v-bind:key="item.id" class="b-contact clearfix">
          <img :src="require(`@/assets/img/contact/${item.image}.svg`)" class="b-contact_photo"/>
          <div class="b-contact-right">
            <div class="b-contact-right-head">{{item.name}}</div>
            <div class="b-contact-right-sub">{{item.position}}</div>
            <div class="b-contact-right-info">
              <a :href="(`mailto:${item.mail}`)">{{item.mail}}</a>
              <br/>
              <a :href="(`phone:${item.phone}`)">{{item.phone}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'contact',
  components: {},
  data () {
    return {
      items: [
        {
          id: Math.random(),
          image: 'tatiana',
          name: 'Татьяна Мочалова',
          position: 'генеральный директор, специалист по обучению в колледжах и университетах Великобритании, США и Канады',
          mail: 'molchanova@parta.org',
          phone: '+7 (926) 455-06-09'
        },
        {
          id: Math.random(),
          image: '1',
          name: 'Илья Султанов',
          position: 'коммерческий директор',
          mail: 'sultanov@parta.org',
          phone: '+7 (926) 455-06-09'
        },
        {
          id: Math.random(),
          image: '2',
          name: 'Елена Воронцова',
          position: 'специалист по обучению на языковых программах для всех возрастов в Великобритании, Швейцарии, Канаде, на Мальте; средних школах Великобритании',
          mail: 'vorontsova@parta.org',
          phone: '+7 (926) 455-06-09'
        },
        {
          id: Math.random(),
          image: '3',
          name: 'Елена Калегина',
          position: 'старший менеджер',
          mail: 'kalegina@parta.org',
          phone: '+7 (926) 455-06-09'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .b-contact {
    margin-bottom: 38px;

    &-list {
      margin-bottom: 100px;
    }

    &_photo {
      width: 216px;
      float: left;
      text-indent: -1000px;

      @media all and (max-width: 575px) {
        width: auto;
        float: none;
        margin-bottom: 20px;
      }
    }

    &-right {
      margin: 0 0 0 250px;
      overflow: hidden;
      color: #230000;

      @media all and (max-width: 575px) {
        margin: 0;
      }

      &-head {
        color: #230000;
        font-size: 45px;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 2.7px;
        margin-bottom: 23px;

        @media all and (max-width: 575px) {
          font-size: 1.5em;
        }
      }

      &-sub {
        font-size: 16px;
        font-weight: 700;
        line-height: 25px;
        text-transform: uppercase;
        letter-spacing: 1.28px;
        margin-bottom: 40px;
      }

      &-info {
        font-weight: 300;
        letter-spacing: 1.28px;
        text-transform: uppercase;

        & a {
          color: #230000;
        }
      }
    }
  }

</style>
