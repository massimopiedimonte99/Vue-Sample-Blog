<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/studio">Studio</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/contatti">Contatti</router-link>
    </nav>
    <router-view />
  </div>
</template>


<script>
import Home from './components/Home.vue'
import Studio from './components/Studio.vue'
import Blog from './components/Blog.vue'
import Contatti from './components/Contatti.vue'

export default {
  name: 'superserio',
  components: {
    Home,
    Studio,
    Blog,
    Contatti
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  text-align: center;
  margin: 10px 0 30px 0;
  a {
    display: inline-block;
    font-size: 13pt;
    text-decoration: none;
    padding: 10px;
    color: #000;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
