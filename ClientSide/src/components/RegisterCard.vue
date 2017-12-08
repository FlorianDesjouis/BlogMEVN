<template>
  <form action="/" method="post" @submit.prevent="send">
    <label for="username">Username</label>
    <input type="text" name="username" placeholder="xxZekillerzzxx" v-model="user.username">
    <label for="email">Email</label>
    <input type="text" name="email" placeholder="kikookillerzzz@gmail.com" v-model="user.email">
    <label for="password">Password</label>
    <input type="password" name="password" placeholder="*******" v-model="user.password">

    <input type="submit" name="submit_register" value="Register">
  </form>
</template>

<script>
  export default {
    name: 'RegisterCard',

    data () {
      return {
        user: {
          username: '',
          email: '',
          password: ''
        }
      }
    },

    methods: {
      send () {
        this.$emit('send', this.user)
      }
    }
  }
</script>

<style scoped>
form {
  width: 50%;
  margin: 5% auto auto auto;
  padding: 30px;
  border-top: 2px solid #262727;
  border-bottom: 2px solid #262727;
}
label {
  margin-top: 10px;
  margin-left: 25%;
  margin-bottom: 5px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  text-align: left;
}
input {
  width: 50%;
  height: 27px;
  margin: auto;
  border: none;
}
input[type='submit'] {
  height: 40px;
  margin-top: 35px;
  font-size: 18px;
  word-spacing: 1px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  background-color: #262727;
  cursor: pointer;
  transition: .3s ease;
}
input[type='submit']:hover {
  color: #262727;
  background-color: #BB2828;
}
label, input {
  display: block;
}
</style>
