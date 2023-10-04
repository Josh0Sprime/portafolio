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
  --color-highlight: rgb(236 72 153/1);
  --icon-size-primary: 3rem;
  --title: 3rem;
  --subtitle: 1rem;
  --subtitle-cert: 1.5rem;
  --title-low: 2rem;
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
  max-width: 80rem;
  height: 10%;
  color: var(--color-primary);
}

@media (max-width: 760px) {
  #app {
   margin: 1rem auto;
  }
}
body {
}
</style>
