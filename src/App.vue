<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <CardsExample msg="Welcome to Your Vue.js App"/>
  <TwoListDragExample v-if="false"/>
</template>

<script>
import CardsExample from './components/CardsExample.vue';
import TwoListDragExample from './components/TwoListDragExample.vue';

export default {
  name: 'App',
  components: {
    CardsExample,
    TwoListDragExample
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
