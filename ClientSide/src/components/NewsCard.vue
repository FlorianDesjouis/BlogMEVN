<template>
  <div class="news">
      <img :src="news.photo">
      <div class="news__infos">
        <h2>{{ news.title }}</h2>
        <p>{{ news.content }}</p>
        <span>{{ news.category }}</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsCard',

    props: {
      news: {type: Object, required: true}
    }
  }
</script>

<style scoped>
.news {
  width: 90%;
  margin: 5%;
  background-color: #fff;
  border: 2px solid grey;
  overflow: hidden;
  cursor: pointer;
}
</style>
