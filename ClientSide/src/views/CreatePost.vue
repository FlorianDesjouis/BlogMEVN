<template>
  <div class="create-post">
    <h1>Create your post</h1>
    <createPost-card @send="createPost"></createPost-card>
  </div>
</template>

<script>
import axios from 'axios'
import CreatePostCard from '../components/CreatePostCard.vue'

export default {
  name: 'CreatePost',

  data () {
    return {
      post: {}
    }
  },

  methods: {
    createPost (post) {
      axios.post('http://localhost:1337/post', post)
        .then(function (response) {
          if (response.statusText === 'OK') {
            location.assign('/')
          }
        }).catch(function (err) {
          console.error(err)
        })
    }
  },

  components: { CreatePostCard }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.create-post {
  height: 100vh;
  padding-top: 50px;
  background-color: #3434A3;
}
h1 {
  font-size: 32px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
}
</style>
