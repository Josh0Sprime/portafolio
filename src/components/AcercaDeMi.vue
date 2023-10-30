<template lang="">
    <div class="about">
        <section class="about__me">
            <div class="me__container">                
                <h1 class="me__title">Personal</h1>
                <div class="me__info-container">
                    <div class="me__image-primary-container">
                        <div class="me__image-container"></div>
                    </div>
                    <div class="me__personal-container">
                        <h2 class="me__name">Jorge Tomas Cortes Fernandez</h2>
                        <div class="me__country-container">
                            <img class="me__country-image" src="../assets/img/cl.png" alt="">
                            <p class="me__year">Chileno</p>
                        </div>
                        <p class="me__year">jorgecf.9830@outlook.cl</p>
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
                        <div class="study__info">                            
                            <span class="study__container-date">
                                    <p class="item__date">Octubre de 2023</p>
                                    <p>-</p>
                                    <p class="item__date"> Actual </p>
                                    <img class="study__date-image" src="../assets/img/pending.svg" alt="">
                            </span>
                            <h3 class="item__study">Ingeniería Informática</h3>
                            <p class="item__place">Instituto IACC</p>
                        </div>  
                    </div>
                    <div class="study__item">
                        <div class="item__divider">
                            <div class="study__circle"></div>
                            <div class="study__divider"></div>
                        </div>
                        <div class="study__info-2">                            
                            <span class="study__container-date">
                                    <p class="item__date">Agosto de 2023</p>
                                    <p>-</p>
                                    <p class="item__date"> Actual </p>
                                    <img class="study__date-image" src="../assets/img/pending.svg" alt="">
                            </span>
                            <h3 class="item__study">Diplomado desarrollo web</h3>
                            <p class="item__place">Pontificia Universidad Católica de Chile</p>
                        </div>
                    </div>
                    <div class="study__item">
                        <div class="item__divider">
                            <div class="study__circle"></div>
                            <div class="study__divider"></div>
                        </div>
                        <div class="study__info-3">                   
                            <span class="study__container-date">
                                <p class="item__date">Marzo de 2020</p>
                                <p>-</p>
                                <p class="item__date">diciembre de 2022 </p>
                                <img class="study__date-image" src="../assets/img/complete.svg" alt="">
                            </span>
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
  import cv from "../assets/files/cv.pdf"
  window.scroll({top: 0});



</script>
<style scoped>
    .study__container-date {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .study__date-image {
        width: 1.5rem;
    }
    .me__country-image {
        width: 2rem;
    }
    .me__country-container {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .about {
        opacity: 0;
        animation: mostrar-about forwards 1s;
        animation-delay: 100ms;
    }

    @keyframes mostrar-about {
        100% {
            opacity: 1;
        }
    }
    .study__info {
        position: relative;
        left: 30%;
        animation: volver-informacion forwards 1000ms;
        animation-delay: 0.3s;
        opacity: 0;
    }

    .study__info-2 {
        position: relative;
        left: 30%;
        animation: volver-informacion forwards  1000ms;
        animation-delay: 0.5s;
        opacity: 0;
    }

    .study__info-3 {
        position: relative;
        left: 30%;
        animation: volver-informacion forwards  1000ms;
        animation-delay: 0.7s;
        opacity: 0;
    }

    @keyframes volver-informacion {
       
        100% {
            left: 0;
            opacity: 1;
        }
    }
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
        position: relative;
    }
    .study__circle::after {
        content: "";
        position: absolute;
        width: 60%;
        height: 60%;
        top: 2px;
        left: 2.3px;
        background-color: var(--color-highlight);
        border-radius: 100%;
    }
    .study__content {
        display: flex;
        flex-direction: column;
    }
    .study__content > * {
        flex-basis: 100%;
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
    .user-content__buttons:hover {
        background-color: rgb(66, 173, 157);
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
        background-repeat: no-repeat;
        background-size: cover;
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

        .me__personal-container {
           display: flex;
           flex-direction: column;
           gap: 0.5rem;
        }
        .study__info {
            left: 0;
            opacity: 1;
            animation: none;
        }
        .study__info-2 {
            left: 0;
            opacity: 1;
            animation: none;
        }
       
        .study__info-3 {
            left: 0;
            opacity: 1;
            animation: none;
        }

        .user-content__buttons {
            padding: 1rem;
            font-size: 0.8rem !important;
        }
        .me__image-primary-container::before {
            content: "";
        }
        .me__title {
            font-size: 2rem !important;
            flex-wrap: nowrap;
        }
        .me__name {
            font-size: 1rem !important;
        }
      
        .me__info-container > * {
            flex-basis: 100%;
        }
        .me__info-container {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .me__image-primary-container,
        .me__image-primary-container::after,
        .me__image-primary-container::before {
            max-width: 100%;
        }
        .me__image-primary-container::before {
            display: none;
        }
        
        .about {
            padding: 0 2rem;
            flex-direction: column;
            align-items: start;
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

    @media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
        .about {
            padding: 0 2rem;
            gap: 5rem;
        }
        .study__info {
            left: 0;
            opacity: 1;
            animation: none;
        }
        .study__info-2 {
            left: 0;
            opacity: 1;
            animation: none;
        }
        .study__info-3 {
            left: 0;
            opacity: 1;
            animation: none;
        }
    }

    @media (min-width: 768px) and (max-width: 1200px) and (orientation: landscape) {
        .about {
            padding: 0 2rem;
            gap: 5rem;
        }
        .study__info {
            left: 0;
            opacity: 1;
            animation: none;
        }
        .study__info-2 {
            left: 0;
            opacity: 1;
            animation: none;
        }
        .study__info-3 {
            left: 0;
            opacity: 1;
            animation: none;
        }
    }
    
</style>