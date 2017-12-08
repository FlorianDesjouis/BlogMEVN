<template>
  <div class="register">
    <h1>Create your account</h1>
    <register-card @send="register"></register-card>
  </div>
</template>

<script>
import axios from 'axios'
import RegisterCard from '../components/RegisterCard.vue'

export default {
  name: 'RegisterView',

  data () {
    return {
      user: {}
    }
  },

  methods: {
    register (user) {
      axios.post('http://localhost:1337/user', user)
        .then(function (response) {
          if (response.statusText === 'OK') {
            location.assign('/')
          }
        }).catch(function (err) {
          console.error(err)
        })
    }
  },

  components: { RegisterCard }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.register {
  height: 100vh;
  padding-top: 50px;
  background-color: #AD3232;
}
h1 {
  font-size: 32px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
}
</style>
