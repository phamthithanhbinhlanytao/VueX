<template>
  <div id="app">
    <hello-world/>
    <post-news/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import PostNews from './components/PostNews.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PostNews
  }
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
