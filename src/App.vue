<template>
  <Home />
</template>

<script>
import { defineAsyncComponent } from 'vue'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

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
  --title: 4rem;
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
  max-width: 70rem;
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
