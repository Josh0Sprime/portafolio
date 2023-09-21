<template>
  <Home />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    Home: defineAsyncComponent(() => import("./view/Home.vue"))
  }
}
</script>

<style>

@font-face {
  font-family: "Poppins";
  src: url("./assets/fonts/Poppins/Poppins-Regular.ttf");
}
:root {
  --color-primary: #FFF;
  --color-highlight: #a3e635;
  --icon-size-primary: 3rem;
}
* {
  margin: 0;
  scroll-behavior: smooth;
}

body {
  box-sizing: border-box;
  font-size: 10px;
  background-color: rgb(2 6 23);
  font-family: "Poppins";
}

#app {
  margin: 5rem auto;
  max-width: 70rem;
  height: 10%;
  color: var(--color-primary);
}
</style>
