<template>
  <div class="login">
    <h1>Sign in</h1>
    <form action="/">
      <label for="username">Username</label>
      <input type="text" name="username" placeholder="John Doe">
      <label for="password">Password</label>
      <input type="password" name="password" placeholder="***********">

      <input type="submit" name="submit_login" value="Sign in">
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',

  data () {
    return {

    }
  },

  methods: {

  }
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
  background-color: #248A24;
}
label, input {
  display: block;
}
</style>
