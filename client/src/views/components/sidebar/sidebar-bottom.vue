<template>
  <div>
    <div class="s-mb_10">
      <img class="s-mr_10" src="@/assets/img/search.png"/>
      <input class="special-i" placeholder="Поиск..." type="text">
    </div>
    <div class="s-mb_20">
      <img class="s-mr_10" src="@/assets/img/call.png"/>
      <a href="tel:+74957302082" class="s-phone">+7 (495) 730-20-82</a>
    </div>
    <button class="sidebar-btn">Закажите звонок</button>
  </div>
</template>

<script>
export default {
  name: 'sidebar-bottom'
}
</script>

<style scoped lang="scss">
  .special-i {
    height: 21px;
    background-color: transparent;
    padding: 0 10px;
    font-size: 15px;
    letter-spacing: 2px;
    color: #B7B7B7;
    font-weight: 300;
    border: 0;
    border-bottom: 1px solid #e1e1e1;
  }

  .special-i::placeholder{
    color: #B7B7B7;
  }

  .s-phone {
    font-size: 14.69px;
    color: #B7B7B7;
    text-decoration: none;
    letter-spacing: 1.5px;
  }

  .s-mr_10 {
    margin-right: 10px;
  }

  .s-mb_10 {
    margin-bottom: 10px;
  }

  .s-mb_20 {
    margin-bottom: 20px;
  }

  .sidebar-btn {
    font-size: 14.69px;
    width: 231px;
    height: 24px;
    line-height: 23px;
    -webkit-border-radius: 15px;
    border-radius: 15px;
    display: block;
    text-align: center;
    background: #F04E23;
    color: #FFF;
    letter-spacing: 2.5px;
    border: 0;
  }
</style>
