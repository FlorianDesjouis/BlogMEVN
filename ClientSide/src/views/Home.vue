<template>
  <div>
    <nav class="home-nav">
      <ul>
        <li class="home-nav-item gaming">Gaming News</li>
        <li class="home-nav-item science">Science/Tech</li>
        <li class="home-nav-item web">Web News</li>
      </ul>
    </nav>
    <section class="home-content">
      <div class="content-list gaming">
        <news-card v-for="news in filteredNews" :key="news.id" :news="news"></news-card>
      </div>
      <div class="content-list science">
        <news-card v-for="news in filteredNews" :key="news.id" :news="news"></news-card>
      </div>
      <div class="content-list web">
        <news-card v-for="news in filteredNews" :key="news.id" :news="news"></news-card>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import NewsCard from '../components/NewsCard.vue'

export default {
  name: 'HomeView',

  data () {
    return {
      news: {}
    }
  },

  computed: {
    filteredNews () {
      var self = this
      axios.get('http://localhost:1337/posts')
        .then(function (response) {
          console.log(response.data)
          if (response.statusText === 'OK') {
            self.news = response.data.filter(news => {
              return news.category.indexOf('Gaming News') > -1
            })
            console.log(self.news)
            return self.news
          }
        }).catch(function (err) {
          console.error(err)
        })
    }
  },

  components: { NewsCard }
}
</script>
