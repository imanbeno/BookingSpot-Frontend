<template>
  <div id="app">
    <NavBarComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBarComponent from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    NavBarComponent
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
