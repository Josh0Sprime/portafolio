<template lang="">
    <div id="technology" class="technology">
        <h1 class="technology__title">Tecnologias</h1>
        <div class="technology__content">
            <div>
                <h2 data-aos="fade-up" class="content__title">Backend</h2>
                <div data-aos="fade-up" class="content__row">
                    <div>
                        <img class="technology__js" src="../assets/img/node.png" alt="">
                    </div>
                    <div>
                        <img class="technology__js" src="../assets/img/flask.png" alt="">
                    </div>
                </div>
            </div>
            <div class="content__frontend">
                <h2 data-aos="fade-up" class="content__title">Frontend</h2>
                <div data-aos="fade-up" class="content__row">
                    <div>
                        <img class="technology__js" src="../assets/img/node.png" alt="">
                    </div>
                    <div>
                        <img class="technology__js" src="../assets/img/flask.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import AOS from 'aos';

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
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
export default {
    
}
</script>
<style scoped>
    .technology__title {
        font-size: 4rem;
        color: var(--color-highlight);
    }

    .content__frontend {
        margin-top: 20rem;
    }

    .technology {
        margin-top: 12rem;
    }

    .technology__js {
        width: 10rem;
    }

    .content__title {
        font-size: 2rem;
    }

    .technology__content {
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
    }
    .content__row {
        display: flex;
        gap: 5px;
    }
  
</style>