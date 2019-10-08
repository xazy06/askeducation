<template>
  <div class="b-contact-form--wrapper clearfix">
    <div class="row">
      <div class="col-md-3"></div>

      <div class="col-md-9">
        <div class="b-contact-form">
          <div class="b-contact-form--head">
            Оставьте свои контакты, чтобы <span>мы сами связались</span> с вами.
          </div>
          <div class="b-contact-form--body">
            <form>
              <div class="row">
                <div class="col-md-6">
                  <div class="s-mb_20">
                    <input required placeholder="Имя *" class="form-control s-bl" type="text"/>
                  </div>
                  <div class="s-mb_40">
                    <input required placeholder="Почта *" class="form-control s-bl" type="email"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="s-mb_20">
                    <input required placeholder="Телефон *" class="form-control s-bl" type="tel"/>
                  </div>
                  <div class="s-mb_30">
                    <textarea required placeholder="Ваш вопрос в двух словах *" class="form-control s-bl"></textarea>
                  </div>
                </div>
              </div>
              <b-row>
                <div class="col-md-6">
                  <div class="">
                    <div class="custom-control custom-checkbox mb-3">
                      <input type="checkbox" class="custom-control-input s-bl" id="customControlValidation1" required="">
                      <label class="custom-control-label" for="customControlValidation1">
                        Я ознакомлен
                        <a href="#">с условиями обработки моих персональных данных</a>
                        при получении услуг компании *
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="">
                    <button class="btn btn-lg btn-primary btn-block">Закажите звонок</button>
                  </div>
                </div>
              </b-row>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'contactForm'
}
</script>

<style scoped lang="scss">
  .b-contact-form {
    &--wrapper {
      margin-bottom: 74px;
      padding-left: 15px;
      padding-right: 15px;
    }

    &--head {
      color: #bebebe;
      font-size: 45px;
      font-weight: 100;
      text-transform: uppercase;
      letter-spacing: 2.7px;
      line-height:1.2;
      margin-bottom: 46px;

      @media all and (max-width: 575px) {
        font-size: 1.1em;
      }

      span {
        color: #f04e23;
      }
    }
    &--body {

    }
  }
</style>
