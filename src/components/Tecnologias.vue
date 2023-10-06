<template lang="">
    <div id="technology" class="technology">
        <div class="technology-container">
            <header>
                <div class="technology__header-container">
                    <div class="technology__header">
                        <fa class="link__icon technology__icon" icon="fa-solid fa-code" />
                        <h1 class="technology__title">Tecnologias</h1>
                    </div>
                    <div>
                        <h2 class="content__title">Conocimientos en tecnologias</h2>
                        <p class="content__description">Siempre estoy en constante aprendizaje para desarrollar aplicaciones web con las mejores practicas y las tecnologias mas nuevas y populares</p>
                    </div>
                </div>
            </header>
            <div class="technology__content">
                <div class="container-images">
                    <div class="content__images">
                        <div class="content__container-image">
                            <p class="image__name">Angular</p>
                            <img class="container-image__image" src="../assets/img/angular.png" alt="">
                        </div>
                        <div class="content__container-image">
                            <p class="image__name">Flask</p>
                            <img class="container-image__image" src="../assets/img/flask.png" alt="">
                        </div>
                        <div class="content__container-image">
                            <p class="image__name">Javascript</p>
                            <img class="container-image__image" src="../assets/img/js.png" alt="">
                        </div>
                        <div class="content__container-image">
                            <p class="image__name">Nodejs</p>
                            <img class="container-image__image" src="../assets/img/node.png" alt="">
                        </div>
                        <div class="content__container-image">
                            <p class="image__name">React</p>
                            <img class="container-image__image" src="../assets/img/react.png" alt="">
                        </div>
                        <div class="content__container-image">
                            <p class="image__name">Vue</p>
                            <img class="container-image__image" src="../assets/img/vue.png" alt="">
                        </div>
                        <div class="content__container-image">
                            <p class="image__name">Typescript</p>
                            <img class="container-image__image" src="../assets/img/typescript.png" alt="">
                        </div>
                        <div class="content__container-image">
                            <p class="image__name">Django</p>
                            <img class="container-image__image" src="../assets/img/django.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="technology__certificates-container">
            <header>
                <div class="technology__header">
                    <fa class="link__icon technology__cert" icon="fa-solid fa-certificate" />
                    <h1 class="technology__title">Certificaciones</h1>
                </div>
            </header>
            <div class="certificates-container__certificates">
                <div v-for="{ img, title, source } of pages.slice(0, currentPage)" class="certificates__certificate">
                    <div class="certificate__image-container">
                        <img class="certificate__image" :src="img" alt="">
                    </div>
                    <h3 class="certificate__title">{{ title }}</h3>
                    <p class="certificate__source">{{ source }}</p>
                </div>
            </div>

            <div v-if="isLoading" class="loading">
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
            
            <div v-if="!isFullLength" @click="incrementPage" class="certificates__see-more">
                <fa class="see-more__icon" icon="fa-soli fa-chevron-down"/>
                <p>Ver mas...</p>
            </div>

        </div>
    </div>
</template> 
<script setup>
import { ref } from 'vue'
import vueImg from '../assets/img/vue-cert.png'
import tailwindImg from '../assets/img/tailwind-cert.png'
import solidImg from '../assets/img/solid-cert.png'
import diseniosImg from '../assets/img/patrones-cert.png'
import uiImg from '../assets/img/diseño-cert.png'
import typescriptImg from '../assets/img/typescript-cert.png'
import angularImg from '../assets/img/angular-cert.png'
import nodeImg from '../assets/img/node-cert.png'

import { watch } from 'vue'

const currentPage = ref(3);

const isFullLength = ref(false);

const incrementPage = () => {
    isLoading.value = true;
    setTimeout(() => {
        currentPage.value = currentPage.value + 3;
        isLoading.value = false;
    }, 1000);
}

const isLoading = ref(false);
window.scroll({top: 0})
const pages = ref([
    {
        img: vueImg,
        title: "Vue",
        source: "Udemy"
    },
    {
        img: tailwindImg,
        title: "Tailwind",
        source: "Udemy"
    },
    {
        img: solidImg,
        title: "Solid",
        source: "Udemy"
    },
    {
        img: diseniosImg,
        title: "Patrones de diseño",
        source: "Udemy"
    },
    {
        img: uiImg,
        title: "Diseño UI",
        source: "Udemy"
    },
    {
        img: typescriptImg,
        title: "Typescript",
        source: "Udemy"
    },
    {
        img: angularImg,
        title: "Angular",
        source: "Udemy"
    },
    {
        img: nodeImg,
        title: "Node",
        source: "Udemy"
    },
]);

watch(currentPage, (newValue) => {
    if(newValue === pages.value.length || newValue === pages.value.length +1) {
        isFullLength.value = true;
    }
})

</script>
<style scoped>

.loading {
    display: flex;
    justify-content: center;
}
.lds-ellipsis {
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
    .certificate__image-container {
        width: fit-content;
        overflow: hidden;
        border-radius: 0.5rem;
    }
    .certificates__see-more {
        margin-top: 3rem;
        opacity: 0.8;
        font-size: var(--subtitle);
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        width: fit-content;
        text-wrap: nowrap;
    }
    .certificates__see-more:hover {
        opacity: 1;
    }
    .see-more__icon {
        background-color: var(--color-primary);
        color: black;
        padding: 0.5rem;
        border-radius: 1rem;
    }
    .certificates-container__certificates {
        width: fit-content;
        margin-top: 5rem;
        display: grid;
        gap: 3rem 10rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .certificates__certificate {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .certificate__title {
        font-size: var(--subtitle-cert);
    }
    .certificate__source {
        font-size: var(--subtitle);
    }
    .certificate__image {
        opacity: 0.8;
        width: 20rem;
        cursor: pointer;
        transition: all 300ms ease-in-out;
    }
    .certificate__image:hover {
        opacity: 1;
        transform: scale(1.1);
    }
    .technology__icon {
        color: var(--color-highlight);
        font-size: var(--title-low);
        
    }
    .technology__cert {
        color: rgb(252 211 77);
        font-size: var(--title-low);
    }
    .content__header {
        padding-top: 32px;
    }

    .image__name {
        transition: all 300ms ease-in-out;
        transition-delay: 100ms;
        position: absolute;
        top: -100%;
        font-size: 1rem;
        background-color: var(--color-primary);
        color: rgb(2 6 23);
        font-weight: bold;
        padding: 1.5px 5px;
        border-radius: 10px;
        opacity: 0;
        visibility: hidden;
    }
    .content__images {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 4rem;
    }
   
    .container-image__image {
        width: 50px;
        object-fit: contain;
    }
    .content__container-image {
        opacity: 0.8;
        background-color: white;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        padding: 5px;
        transition: all 300ms ease-in-out;
    }
  
    .technology__header-container {
        display: flex;
        flex-direction: column;
        gap: 5rem;
    }

    .technology::-webkit-scrollbar {
      background-color: transparent;
      width: 5px;
    }

    .technology::-webkit-scrollbar-thumb {
      background-color: #ffffffa1;
      border-radius: 10px;
    }

    .technology::-webkit-scrollbar-thumb:hover {
      background-color: var(--color-primary);
      border-radius: 10px;
    }

    .content__container-image:hover .image__name {
        top: -60%;
        opacity: 1;
        visibility: visible;
    }

    .content__container-image:hover {
        transform: scale(1.1);
        opacity: 1;
    }

    .content__description {
        font-size: 1rem;
        max-width: 50rem;
    }
    .technology__content {
        display: flex;
        justify-content: space-between;
    }
    .technology__title {
        font-size: var(--title-low);
        color: var(--color-title);
    }

    .technology-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .content__title {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    .technology {
        z-index: -1;
        display: flex;
        flex-direction: column;
        gap: 15rem;
    }

 
    .content__row {
        display: flex;
        gap: 5px;
    }
    .content__especification {
        margin-top: 5rem;
        font-size: 1rem;
    }

    .technology__header {
        display: flex;  
        align-items: center;
        gap: 1rem;
    }
 
    @media(max-width: 767px) {
        
        .technology-container {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            gap: 5rem;
        }
        .technology {
            padding: 0 2rem;
            display: flex;
            justify-content: center;
        }
        .content__images {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }
      
      
        .certificates-container__certificates {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 3rem 0;
        }
        .technology__certificates-container {
            display: flex;
            flex-direction: column;
        }
    }

    @media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
        .technology-container {
            display: flex;
            flex-direction: column;
            gap: 5rem;
        }
        .content__images {
            display: flex;
            flex-wrap: wrap;
        }
        .technology {
            padding: 0 2rem;
        }
        .certificates-container__certificates {
            display: flex;
            gap: 3rem 0;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .container-image__image {
            width: 70px;
        }
        
    }
    @media (min-width: 768px) and (max-width: 1200px) and (orientation: landscape) {
        .technology {
            padding: 0 2rem;
        }
        .content__images {
            display: flex;
            flex-wrap: wrap;
        }
        .technology-container {
            display: flex;
            flex-direction: column;
            gap: 5rem;
            align-items: baseline;
        }
        .certificates-container__certificates {
            display: flex;
            gap: 3rem 1rem;
            flex-wrap: wrap;
            justify-content: space-between;
        }   
    }
  
</style>