<template lang="">
    <div class="about">
        <section class="about__me">
            <div class="me__container">                
                <h1 class="me__title">Informacion personal</h1>
                <div class="me__info-container">
                    <div class="me__image-primary-container">
                        <div class="me__image-container"></div>
                    </div>
                    <div>
                        <h2 class="me__name">Jorge Tomas Cortes Fernandez</h2>
                        <p class="me__year">23 años</p>
                        <a :href="cv" download class="user-content__buttons">
                            Descargar CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="about__study">
            <header class="study__header">
                <h1 class="study__title">Estudios</h1>
            </header>
            <div class="study__container">
                <div class="study__content">
                    <div class="study__item">
                        <div class="item__divider">
                            <div class="study__circle"></div>
                            <div class="study__divider"></div>
                        </div>
                        <div>                            
                            <p class="item__date">Octubre de 2023 - Actual</p>
                            <h3 class="item__study">Ingenieria Informatica</h3>
                            <p class="item__place">Instituto IACC</p>
                        </div>  
                    </div>
                    <div class="study__item">
                        <div class="item__divider">
                            <div class="study__circle"></div>
                            <div class="study__divider"></div>
                        </div>
                        <div>                            
                            <p class="item__date">Mayo de 2023 - Actual</p>
                            <h3 class="item__study">Diplomado desarrollo web</h3>
                            <p class="item__place">Pontificia Universidad Catolica de Chile</p>
                        </div>
                    </div>
                    <div class="study__item">
                        <div class="item__divider">
                            <div class="study__circle"></div>
                            <div class="study__divider"></div>
                        </div>
                        <div>                   
                            <p class="item__date">2020 de mayo - 2022 de diciembre</p>
                            <h3 class="item__study">Analista programador</h3>
                            <p class="item__place">Instituto Profesional Santo Tomas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
  import cv from "../assets/files/CV.pdf"
</script>
<style scoped>
    .me__name {
        font-size: var(--title-low);
    }
    .about__study {
        display: flex;
        flex-direction: column;
        gap: 5rem;
    }
    .me__image {
        width: 20rem;
    }
    .about {
        display: flex;
        justify-content: space-between;
    }
    .item__place {
        font-size: 1.5rem;
    }
    .me__container {
        display: flex;
        flex-direction: column;
        gap: 5rem;
    }
    .item__date {
        font-size: 1rem;
    }
    .study__title {
        font-size: var(--title-low);
    }
    .item__study {
        color: var(--color-highlight);
        margin-top: 1rem;
        font-size: 2rem;
    }
    .study__item {
        display: flex;
        align-items: baseline;
        gap: 5rem;
    }
    .me__title {
        font-size: var(--title-low);
    }
    .study__divider {
        width: 1px;
        height: 9rem;
        background-color: white;
    }
    .item__divider {
        gap: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .study__circle {
        background-color: var(--color-primary);
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 100%;
    }
    .study__content {
        display: flex;
        flex-direction: column;
    }
    .study__container {
        display: flex;
    }
    .me__info-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .user-content__buttons {
        display: block;
        width: fit-content;
        background-color: var(--color-highlight);
        font-size: 1rem;
        border-radius: 1rem;
        padding: 1rem 2rem;
        color: var(--color-primary);
        margin-top: 1rem;
        font-weight: bold;
    }
    /* .me__image-container {
        width: 15rem;
        height: 15rem;
        border-radius: 100%;
        background-size: contain;
        overflow: hidden;   
        background-image: url("../assets/img/me.jpg");
        background-repeat: no-repeat;
    } */
    .me__image-primary-container {
        position: relative;
        width: 15rem;
        height: 15rem;
        background-image: url("../assets/img/me.jpg");
        background-size: contain;
        border-radius: 100%;
    }

    @property --gradient-angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }
    .me__image-primary-container::after,
    .me__image-primary-container::before {
        z-index: -1;
        content: "";
        inset: -.5rem;
        position: absolute;
        background: conic-gradient(
            from var(--gradient-angle),
            var(--clr-3),
            var(--clr-4),
            var(--clr-5),
            var(--clr-4),
            var(--clr-3)
        );
        width: 107%;
        height: 107%;
        border-radius: 100%;
        animation: rotation 20s linear infinite;
    }
    .me__image-primary-container::after {
        filter: blur(3.5rem);
    }

    @keyframes rotation {
        0% { --gradient-angle: 0deg}
        100% { --gradient-angle: 360deg}
    }

    a {
        text-decoration: none;
    }
    .me__year {
        font-size: 1.5rem;
    }
    @media (max-width: 760px) {
        .about {
            padding: 0 2rem;
            flex-direction: column;
            align-items: center;
            gap: 5rem;
        }
        .item__study {
            font-size: 1.2rem;
            text-wrap: nowrap;
        }
        .item__place {
            font-size: 1rem;
        }
        .study__item {
            gap: 2rem;
        }
        .me__image-container {
            width: 10rem;
            height: 10rem;
        }
        .me__name {
            font-size: 1.5rem;
        }
        .me__year {
            font-size: 1rem;
        }

        .me__container {
            gap: 3rem;
        }
       
    }

    @media (max-width: 1180px) {
        .about {
            padding: 0 2rem;
            gap: 5rem;
        }
    }
</style>