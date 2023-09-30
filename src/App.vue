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
  --title: 3rem;
  --subtitle: 2rem;
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

body::-webkit-scrollbar {
  background-color: transparent;
  width: 5px;
}

body::-webkit-scrollbar-thumb {
  background-color: #ffffffa1;
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-primary);
  border-radius: 10px;
}

body::-webkit-scrollbar-track {
  margin: 80px 0;
}

</style>
