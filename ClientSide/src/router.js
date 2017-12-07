import VueRouter from 'vue-router'

import HomeView from './views/Home.vue'
import LoginView from './views/Login.vue'
import RegisterView from './views/Register.vue'
import ReadPost from './views/ReadPost.vue'
import CreatePost from './views/CreatePost.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/post/create', component: CreatePost },
  { path: '/post/:id', component: ReadPost }
]

const router = new VueRouter({
  routes
})

export default router
