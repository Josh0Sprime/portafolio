<template>
    <div class="header">
        <div class="header__menu">
            <router-link :to="{ name: 'inicio' }" class="menu__link">
                <fa class="link__icon" icon="fa-solid fa-home" />
                <a class="link__name">Inicio</a>
            </router-link>
            <router-link :to="{ name: 'tecnologias' }" class="menu__link">
                <fa class="link__icon" icon="fa-solid fa-code" />
                <a class="link__name">Tecnologias</a>
            </router-link>
            <router-link :to="{ name: 'desarrollos' }" class="menu__link">
                <fa class="link__icon" icon="fa-solid fa-briefcase" />
                <a class="link__name">Desarrollos</a>
            </router-link>
            <router-link :to="{ name: 'contacto' }" class="menu__link">
                <fa class="link__icon" icon="fa-solid fa-address-book" />
                <a class="link__name">Contacto</a>
            </router-link>
            <router-link :to="{ name: 'acercaDeMi' }" class="menu__link">
                <fa class="link__icon" icon="fa-solid fa-user" />
                <a class="link__name">Acerca de mi</a>
            </router-link>
            <div class="header__menu-div"></div>
        </div>
        <div class="header__hamburguer">
            <fa class="link__icon-small" icon="fa-solid fa-bars" />
        </div>
    </div>
</template>
<script setup>
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
        text-wrap: nowrap;
    }
    .link__icon-small {
        display: none;
        font-size: 1.5rem;
        margin-bottom: 4rem;
        background-color: var(--color-highlight);
        padding: 0.5rem 0.8rem;
        border-radius: 20%;
        color: var(--color-primary);
    }
    .link__icon {
        font-size: 1rem;
        color: var(--color-primary)
    }

    .header__menu {
        grid-area: menu;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        margin-bottom: 8rem;
        gap: 3rem;
    }
   
    .menu__link {
        text-decoration: none;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
    }

    .menu-link-active {
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
    }

    .active-link {
        text-decoration: underline;
        color: var(--color-highlight);
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
        .link__icon-small {
            display: block;
        }
    }
    @media (max-width: 768px){
        .header__menu {
            display: none;
        }
        .link__icon-small {
            display: block;
        }
    }
    @media (max-width: 820px){
        .header__menu {
            display: none;
        }
        .link__icon-small {
            display: block;
        }
    }
</style>