<template>
  <CardsExample msg="Welcome to Your Vue.js App"/>
</template>

<script>
import CardsExample from './components/CardsExample.vue';

export default {
  name: 'App',
  components: {
    CardsExample,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* background: linear-gradient(to right, #000000, #7d5fff); */
}
</style>
