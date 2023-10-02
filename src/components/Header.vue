<template lang="">
    <div class="header">
        <div class="header__menu">
            <div class="menu__link" >
                <fa class="link__icon" icon="fa-solid fa-code" />
                <a class="link__name" href="#technology">Tecnologias</a>
            </div>
            <div class="menu__link" >
                <fa class="link__icon" icon="fa-solid fa-briefcase" />
                <a class="link__name" href="#technology">Desarrollos</a>
            </div>
            <div class="menu__link" >
                <fa class="link__icon" icon="fa-solid fa-address-book" />
                <a class="link__name" href="#contact">Contacto</a>
            </div>
            <div class="menu__link" >
                <fa class="link__icon" icon="fa-solid fa-address-book" />
                <a class="link__name" href="#contact">Acerca de mi</a>
            </div>
            <div class="header__menu-div"></div>
        </div>
        <div class="header__user-info">
            <h1 class="user-info__title">Hola!</h1>
            <h2 class="user-info__description">Mi nombre es <span class="user-info__user-name">Jorge</span>, desarrollador full-stack apasionado por la programacion.</h2>
            <a :href="cv" download class="user-content__buttons">
                Descargar CV
            </a>
        </div>
        <!-- <div class="header__user-info">
            <div class="user-info__content-image">
                <img class="user-info__image" src="../assets/img/me.jpg" alt="">
            </div>
            <h2 class="user-info__name">Jorge cortes</h2>
            <h3 class="user-info__job">Desarrollador fullstack</h3>
            <div class="user-info-social">
                <a class="info-social__icon" target="_blank" href="https://www.linkedin.com/in/jorge-tomas-cortes-fernandez-065772236/"><fa icon="fa-brands fa-linkedin"/></a>
                <a class="info-social__icon" target="_blank" href="https://github.com/Josh0Sprime"><fa icon="fa-brands fa-square-github"/></a>
                <a class="info-social__icon" target="_blank" href="https://www.instagram.com/jakefeliz._/"><fa icon="fa-brands fa-square-instagram"/></a>
            </div>
        </div>
        <div class="header__user-content">
            <div class="user-content__container-about">
                <fa class="user-content__about-icon" icon="fa-regular fa-address-card"/>
                <h1 class="user-content__about">Acerca de mi</h1>
            </div>
            <p class="user-content__about-description">desarrollador fullstack con un año de experiencia, analista programador y mi modalidad de trabajo es con angular para el front-end y nodejs para back-end, soy una persona que le encanta aprender cosas nuevas y estoy en constante aprendizaje, recibo las criticas y consejos positivamente para mejorar como programador, soy una persona empatica y con un buen temperamento.</p>
            <div class="user-content__cont-button">
                <a :href="cv" download class="user-content__buttons">
                    Descargar CV
                </a>
            </div>
        </div> -->
    </div>
</template>
<script setup>
  import cv from "../assets/files/CV.pdf"
</script>
<style scoped>

    .user-info__user-name {
        color: var(--color-highlight);
    }
    .info-social__icon{
        opacity: 0.5;
        cursor: pointer;
        transition: all 300ms ease-in-out;
        color: white;
    }

    .info-social__icon:hover{
        opacity: 1;
    }

    .link__name {
        text-decoration: none;
        color: var(--color-primary);
        margin-left: 1rem;
        text-wrap: nowrap;
    }

    .link__icon {
        font-size: 1rem;
        color: var(--color-primary)
    }
   
   .user-info__description {
        font-size: 3rem;
        font-weight: bold;
        margin-top: 2rem;
        line-height: 1;
   }
    .header__menu {
        grid-area: menu;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        margin-bottom: 5rem;
        gap: 3rem;
    }
   
    .menu__link {
        display: flex;
        align-items: center;
        position: relative;
        opacity: 0.8;
        cursor: pointer;
    }

    .user-info__title {
        font-size: 5rem;
        color: var(--color-highlight);
    }
    .menu__link::after {    
        position: absolute;
        display: block;
        bottom: 0;
        content: "";    
        background-color: var(--color-highlight);
        height: 1px;
        transition: all 300ms ease-in-out;
        width: 0%;
    }

    .user-content__buttons {
        width: fit-content;
        display: block;
        background-color: var(--color-highlight);
        padding: 1rem 2rem;
        margin-top: 3rem;
        border-radius: 1rem;
        color: white;
        text-decoration: none;
        font-size: 1rem;
        font-weight: bold;
    }

    .user-content__buttons:hover {
        background-color: rgb(219 39 119/1);
    }

    .menu__link:hover:after {
        width: 100%;
    }
    .menu__link:hover {
        opacity: 1;
    }
    
    .user-info__content-image {
        width: fit-content;
        border: 0.3rem solid white;
        border-radius: 20rem;
        overflow: hidden;
    }
    .user-info__name {
        font-size: 2rem;
        color: #a3e635;
    }

    .user-info__job {
        font-size: var(--subtitle);
    }
    .user-info__image {
        width: 10rem;
    }

    .header__user-content {
        grid-area: content;
    }

    .user-content__about {
        font-size: var(--title);
        color: var(--color-highlight);
        
    }
    .user-content__about-description {
        font-size: 1rem;
    }
  
    .buttons__ver-mas {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }

    .user-content__container-about {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .user-content__about-icon {
        font-size: var(--icon-size-primary);
    }

    .user-info-social {
        display: flex;
        gap: 50px;
        font-size: 2rem;
    }

    .header__menu-div {
        width: 100%;
        background-color: #ffffff74;
        height: 1px;
    }

    @media (max-width: 760px) {
        .header__menu {
            display: none;
        }
        .header {
            padding: 0 2rem;
        }
        .user-info__title {
            font-size: 3rem;
        }
        .user-info__description {
            font-size: 2rem;
        }
        .user-content__buttons {
            padding: 0.8rem;
        }
    }
</style>