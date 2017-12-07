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
        <news-card :news="newsGaming"></news-card>
      </div>
      <div class="content-list science">
        <news-card :news="newsScience"></news-card>
      </div>
      <div class="content-list web">
        <news-card :news="newsWeb"></news-card>
      </div>
    </section>
  </div>
</template>

<script>
import NewsCard from '../components/NewsCard.vue'

export default {
  name: 'HomeView',

  data () {
    newsGaming: '',
    newsScience: '',
    newsWeb: ''
  },

  methods: {

  },

  components: { NewsCard }
}
</script>
