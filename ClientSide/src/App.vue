<template>
  <main id="app">
    <header>
      <router-link to="/login">Sign in</router-link>
      <router-link to="/register">Register</router-link>
    </header>
    <router-view></router-view>
  </main>
</template>

<script>
// import users from '../data/users.json';
import NewsCard from './components/NewsCard.vue'

export default {
  name: 'app'
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

ul {
  margin: 0;
  padding: 0;
}

.home-nav {
  width: 100%;
  height: 80px;
  background-color: #000;
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
