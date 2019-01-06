import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Studio from './components/Studio.vue'
import Blog from './components/Blog.vue'
import Contatti from './components/Contatti.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/studio',
      name: 'studio',
      component: Studio
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contatti',
      name: 'contatti',
      component: Contatti
    }
  ]
})