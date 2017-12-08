<template>
  <div class="read-post">
    <h1></h1>
    <news-card :post="post"></news-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ReadPost',

  data () {
    return {
      post: null
    }
  },

  created (post) {
    axios.get(`http://localhost:1337/post/${post._id}`, post)
      .then(post => {
        this.post = post.data
      })
  }

}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
