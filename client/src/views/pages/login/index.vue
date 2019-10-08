<template>
  <div>
    <div class="b-auth">
      <!--      <div class="s-mb_20">-->
      <!--        <h4>Sign in</h4>-->
      <!--      </div>-->

      <img width="160" src="@/assets/img/logo.png" class="b-logo s-mb_40"/>
      <div class="s-mb_20">
        <b-form-input v-model="username" placeholder="username" required type="text"/>
      </div>
      <div class="s-mb_20">
        <b-form-input v-model="password" placeholder="password" required type="password"/>
      </div>
      <div>
        <b-button v-bind:disabled="disabled" v-on:click="signIn" block>Sign in</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import pageTop from '@/views/components/pageTop'
import page from '@/views/components/page'

export default {
  name: 'login',
  components: {
    pageTop,
    page
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    disabled () {
      return !this.username.length || !this.password.length
    }
  },
  methods: {
    signIn () {
      localStorage.setItem('jwt', true)
      localStorage.setItem('user', escape(encodeURI(JSON.stringify({
        u: this.username,
        p: this.password
      }))))

      if (localStorage.getItem('jwt') != null) {
        this.$emit('loggedIn')
        if (this.$route.params.nextUrl != null) {
          this.$router.push(this.$route.params.nextUrl)
        } else {
          this.$router.push('admin')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .b-aside {
    margin: 0 !important;
  }

  .content-outer {
    background-color: #f7f7f7;
  }

  .b-menu-wrapper,
  .b-sidebar,
  .b-footer {
    display: none;
  }

  .b-auth {
    text-align: center;
    padding: 40px 60px;
    border: 1px solid #eee;
    margin: 100px auto;
    width: 400px;
    background: #fff;
    position: relative;
  }

</style>
