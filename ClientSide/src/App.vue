<template>
  <main id="app">
    <header>
      <router-link to="/" class="link home-btn">World of News</router-link>
      <router-link to="/post/create" class="link create-post-btn" v-if="loggedIn()">Post your article</router-link>
      <router-link to="/login" class="link" v-if="!loggedIn()">Sign in</router-link>
      <router-link to="/register" class="link" v-if="!loggedIn()">Register</router-link>
      <button v-on:click="logout()" class="link" v-if="loggedIn()">Logout</button>
      <button v-on:click="removeUser()" class="link" v-if="loggedIn()">Delete account</button>
    </header>
    <router-view></router-view>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',

  methods: {
    loggedIn () {
      if (localStorage.getItem('token')) {
        return true
      } else {
        return false
      }
    },
    logout () {
      if (localStorage.getItem('token')) {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        location.reload()
      } else {
        return false
      }
    },
    removeUser () {
      var id = localStorage.getItem('id')
      console.log('remove ', id)
      axios.delete(`http://localhost:1337/user/${id}`)
          .then(function (response) {
            localStorage.removeItem('token')
            localStorage.removeItem('username')*
            localStorage.removeItem('id')
          }).catch(function (err) {
            console.error('ERROR ', err)
          })
      location.reload()
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

header {
  display: flex;
  align-items: center;
  height: 35px;
  background-color: #262727;
}

ul {
  margin: 0;
  padding: 0;
}

.home-nav {
  width: 100%;
  height: 80px;
  background-color: #000;
}

.link {
  margin-right: 10px;
  padding: 5px;
  color: #fff;
  border: 1px solid #fff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: .3s ease;
  background-color: #262727;
  cursor: pointer;
}

.link.home-btn {
  margin-left: 10px;
  margin-right: auto;
  text-transform: uppercase;
}

.link.create-post-btn {
  margin-right: auto;
  text-transform: uppercase;
  color: #262727;
  border: 1px solid #E7E73F;
  background-color: #E7E73F;
}

.link.create-post-btn:hover {
  color: #fff;
  border: 1px solid #E7E73F;
  background-color: #E7E73F;
}

.link:hover {
  color: #262727;
  background-color: #fff;
}

.home-content {
  display: flex;
  width: 100%;
  height: 90vh;
  background-color: #000;
}

ul {
  position: relative;
  display: flex;
  width: 100%;
  height: 80px;
  padding: 0;
  border-bottom: 4px solid #000;
  list-style: none;
}

.home-nav-item {
  width: 33.4%;
  height: 100%;
  line-height: 80px;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  cursor: default;
}

.gaming {
  border-top: 4px solid #000;
  border-bottom: 4px solid #000;
  border-left: 4px solid #000;
  background-color: #AD3232;
}
.science {
  border: 4px solid #000;
  background-color: #30A730;
}
.web {
  border-top: 4px solid #000;
  border-bottom: 4px solid #000;
  border-right: 4px solid #000;
  background-color: #3434A3;
}

.content-list {
  width: 33.4%;
  height: 100%;
}
</style>
