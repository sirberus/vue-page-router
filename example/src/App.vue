<template>
  <div id="app">
    <btn-set/>
    <router-view/>
  </div>
</template>

<script>
import BtnSet from './components/BtnSet.vue'

export default {
  name: 'app',
  components: {
    BtnSet,
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
