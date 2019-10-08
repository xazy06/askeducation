<template>
  <div class="b-footer">
    <div class="b-footer-in">
      <img class="s-mb_40 b-foot-logo" src="@/assets/img/footer-logo.png"/>
      <div class="s-mb_10">
        Консультации проводятся в нашем офисе,<br/>
        а также по телефону или по Skype:
      </div>
      <div class="s-mb_30">
        <a class="s-accent" href="">+7 (495) 730-20-82</a>
      </div>
      <div class="s-mb_10">
        Мы работаем с понедельника по пятницу
      </div>
      <div class="s-accent s-mb_30">с 9:00 до 19:00</div>
      <div>
        <img class="s-middle" src="@/assets/img/map.png"/>
        <span class="s-middle">Москва, Костомаровский переулок, дом 3, строение 1a, офис 313</span>
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
    padding: 65px 36px;
    background-color: #595959;
    width: 100%;
    height: 570px;
    position: absolute;
    top: -570px;
    color: #fff;
    font-size: 20px;
    font-weight: 300;

    @media all and (max-width: 575px) {
      padding: 65px 14px;
      font-size: 1em;
      text-align: center;
    }
  }

  .b-footer-in::before {
    content: "";
    background: url(zabor.png) 0 0 repeat-x;
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

  .s-mb_10 {
    margin-bottom: 10px;
  }
</style>
