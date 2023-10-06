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
  --color-highlight: rgb(94 234 212);
  --color-title: #FFF;
  --icon-size-primary: 3rem;
  --title: 3rem;
  --subtitle: 1rem;
  --subtitle-cert: 1.5rem;
  --title-low: 2rem;
  --clr-1: #052b2f;
  --clr-2: #073438;
  --clr-3: #0e4b50;
  --clr-4: #2d8f85;
  --clr-5: #637c54;
  --clr-neon: hsl(317 100% 54%);
  --clr-bg: hsl(323 21% 16%);
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
  margin: 0 auto;
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
