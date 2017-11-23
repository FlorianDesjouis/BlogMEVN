<template>
  <main id="app">
    <nav class="home-nav">
      <ul>
        <li class="home-nav-item">Gaming News</li>
        <li class="home-nav-item">Science/Tech</li>
        <li class="home-nav-item">Web News</li>
      </ul>
    </nav>
    <section class="home-content">
      <div class="content-list"></div>
      <div class="content-list"></div>
      <div class="content-list"></div>
    </section>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
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

ul {
  display: flex;
  width: 100%;
  height: 80px;
  list-style: none;
  align-items: center;
}

.home-nav-item {
  width: 33%;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
}
</style>
