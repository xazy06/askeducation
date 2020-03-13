<template>
  <div class="b-footer">
    <div class="b-footer-in">
      <img class="s-mb_30 b-foot-logo" src="@/assets/img/footer-logo.png"/>
      <div class="s-mb_10">
        Консультации проводятся в нашем офисе,<br/>
        а также по телефону или по Skype:
      </div>
      <div class="s-mb_20">
        <a class="s-accent" href="tel:+74993222316">+7 (499) 322-23-16</a>
      </div>
      <div class="s-mb_10">
        Мы работаем с понедельника по пятницу
      </div>
      <div class="s-accent s-mb_20">с 10:00 до 19:00</div>
      <div>
        <img class="s-middle" src="@/assets/img/map.png"/>
        <a class="s-accent" target="_blank" href="https://yandex.ru/maps/213/moscow/?ll=37.622920%2C55.701085&mode=routes&rtext=~55.701166%2C37.622792&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fll%3D37.623%252C55.701%26spn%3D0.001%252C0.001%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%259C%25D0%25BE%25D1%2581%25D0%25BA%25D0%25B2%25D0%25B0%252C%2520%25D0%2592%25D0%25B0%25D1%2580%25D1%2588%25D0%25B0%25D0%25B2%25D1%2581%25D0%25BA%25D0%25BE%25D0%25B5%2520%25D1%2588%25D0%25BE%25D1%2581%25D1%2581%25D0%25B5%252C%25205&z=19">
          <span class="s-middle">Москва, Варшавское шоссе, д.5, офис 30 (2 этаж).</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bfooter'
}
</script>

<style scoped lang="scss">
  $red: #F04E23;

  .b-foot-logo {
    @media all and (max-width: 575px) {
      width: 100%;
    }
  }

  .b-footer {
    position: relative;
    background-color: #595959;
  }

  .b-footer-in {
    padding: 65px 36px 30px;
    background-color: #595959;
    width: 100%;
    height: 445px;
    position: absolute;
    top: -445px;
    color: #fff;
    font-size: 14px;
    font-weight: 300;

    @media all and (max-width: 575px) {
      padding: 65px 14px;
      font-size: 1em;
      text-align: center;
    }
  }

  .b-footer-in::before {
    content: "";
    /*background: url(zabor.png) 0 0 repeat-x;*/
    display: block;
    height: 14px;
    width: 100%;
    position: absolute;
    top: -7px;
    left: 0;
  }

  .s-accent {
    color: $red;
  }

  .s-mb_40 {
    margin-bottom: 40px;
  }

  .s-mb_30 {
    margin-bottom: 30px;
  }

  .s-mb_20 {
    margin-bottom: 30px;
  }

  .s-mb_10 {
    margin-bottom: 10px;
  }
</style>
