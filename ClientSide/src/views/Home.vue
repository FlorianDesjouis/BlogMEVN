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
      axios.get('http://localhost:1337/')
        .then(function (response) {
          console.log(response.data)
          if (response.statusText === 'OK') {
            return response.data.filter(news => {
              if (news.category.indexOf('Gaming News') > -1) {
                console.log(news)
                return news
              } else if (news.category.indexOf('Science/Tech') > -1) {
                return news
              } else if (news.category.indexOf('Web News') > -1) {
                return news
              }
            })
          }
        }).catch(function (err) {
          console.error(err)
        })
    }

    /* filteredScienceNews () {
      axios.get('http://localhost:1337/')
        .then(function (response) {
          if (response.statusText === 'OK') {
            return response.data.filter(news => {
              return news.category.indexOf('Science/Tech') > -1
            })
          }
        }).catch(function (err) {
          console.error(err)
        })
    },

    filteredWebNews () {
      axios.get('http://localhost:1337/')
        .then(function (response) {
          if (response.statusText === 'OK') {
            return response.data.filter(news => {
              return news.category.indexOf('Web News') > -1
            })
          }
        }).catch(function (err) {
          console.error(err)
        })
    } */
  },

  components: { NewsCard }
}
</script>
