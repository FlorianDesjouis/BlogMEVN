<template>
  <div class="login">
    <h1>Sign in</h1>
    <login-card @send="login"></login-card>
  </div>
</template>

<script>
import axios from 'axios'
import LoginCard from '../components/LoginCard.vue'

export default {
  name: 'LoginView',

  data () {
    return {
      user: {}
    }
  },

  methods: {
    login (user) {
      axios.post('http://localhost:1337/login', user)
        .then(function (response) {
          if (response.data.error === false) {
            console.log(response)
            window.localStorage.setItem('token', response.data.token)
            window.localStorage.setItem('username', JSON.parse(response.config.data).username)
            window.localStorage.setItem('id', response.data.id)
            location.assign('/')
          }
        }).catch(function (err) {
          console.error(err)
        })
    }
  },

  components: { LoginCard }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.login {
  height: 100vh;
  padding-top: 50px;
  background-color: #30A730;
}
h1 {
  font-size: 32px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
}
</style>
