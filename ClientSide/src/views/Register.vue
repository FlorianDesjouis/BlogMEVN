<template>
  <div class="register">
    <h1>Create your account</h1>
    <form action="/user">
      <label for="username">Username</label>
      <input type="text" name="username" placeholder="xxZekillerzzxx">
      <label for="email">Email</label>
      <input type="text" name="email" placeholder="kikookillerzzz@gmail.com">
      <label for="password">Password</label>
      <input type="password" name="password" placeholder="*******">

      <input type="submit" name="submit_register" value="Register">
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',

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
