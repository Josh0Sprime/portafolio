<template lang="">
    <div class="header">
        <div class="header__menu">
            <div class="menu__link" >
                <fa class="link__icon" icon="fa-solid fa-section" />
                <a class="link__name" href="#technology">Tecnologias</a>
            </div>
            <div class="menu__link" >
                <fa class="link__icon" icon="fa-solid fa-briefcase" />
                <a class="link__name" href="#technology">Desarrollos</a>
            </div>
        </div>
        <div class="header__user-info">
            <div class="user-info__content-image">
                <img class="user-info__image" src="../assets/img/me.jpg" alt="">
            </div>
            <h2 class="user-info__name">Jorge cortes</h2>
            <h3 class="user-info__job">Analista Programador</h3>
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
                    <a href="#technology" class="user-content__buttons">
                        Conoce mas de mi
                    </a>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
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
    }

    .link__icon {
        font-size: 1rem;
        color: var(--color-primary)
    }

    .header {
        display: grid;
        grid-template-areas: "menu menu" 
                             "user content";
        grid-template-columns: auto;
        gap: 100px;
    }
    .header__user-info {
        grid-area: user;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .header__menu {
        padding: 0.5rem 3rem;
        border-radius: 1rem;
        grid-area: menu;
        font-size: 1.5rem;
        display: flex;
        gap: 3rem;
    }
   
    .menu__link {
        position: relative;
        opacity: 0.8;
    }

    .menu__link::after {    
        position: absolute;
        display: block;
        content: "";    
        background-color: var(--color-highlight);
        height: 1px;
        transition: all 300ms ease-in-out;
        width: 0%;
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
        font-size: 3rem;
        color: #a3e635;
    }

    .user-info__job {
        font-size: 2rem;
    }
    .user-info__image {
        width: 20rem;
    }

    .header__user-content {
        grid-area: content;
        margin-top: 2rem;
    }

    .user-content__about {
        font-size: 4rem;
        color: var(--color-highlight);
        
    }
    .user-content__about-description {
        font-size: 1rem;
    }

    .user-content__buttons {
        background-color: var(--color-primary);
        opacity: 0.8;
        width: fit-content;
        padding: 1rem;
        border-radius: 1rem;
        font-size: 1rem;
        cursor: pointer;
        text-decoration: none;
        transition: all 300ms ease-in-out;
        color: black;
        font-weight: bold;
    }
    .user-content__cont-button {
        margin-top: 5rem;
        color: black;
    }

    .user-content__buttons:hover {
        opacity: 1;
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
</style>