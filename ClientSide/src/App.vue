<template>
  <main id="app">
    <nav>
      <ul>
        <li>Home</li>
        <li>One</li>
        <li>Two</li>
      </ul>
    </nav>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
