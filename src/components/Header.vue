<template>
    <div class="header">
        <div class="header__menu">
            <router-link :to="{ name: 'inicio' }">
                <div class="menu__link">
                    <fa class="link__icon" icon="fa-solid fa-home" />
                    <a class="link__name">inicio</a>    
                </div>
            </router-link>
            <router-link :to="{ name: 'tecnologias' }">
                <div class="menu__link">
                    <fa class="link__icon" icon="fa-solid fa-code" />
                    <a class="link__name">tecnologías</a>
                </div>
            </router-link>
            <router-link :to="{ name: 'desarrollos' }">
                <div class="menu__link">
                    <fa class="link__icon" icon="fa-solid fa-briefcase" />
                    <a class="link__name">desarrollos</a>
                </div>
            </router-link>
            <router-link :to="{ name: 'acercaDeMi' }">
                <div class="menu__link">
                    <fa class="link__icon" icon="fa-solid fa-user" />
                    <a class="link__name">acerca de mi</a>
                </div>
            </router-link>
        </div>
        <div @click="openMenu" class="header__hamburguer">
            <fa ref="menuIcon" :class="!isMenuActivated ? 'link__icon-small-no-activate' : 'link__icon-small'" icon="fa-solid fa-bars" />
            <div class="header__menu-no-active" ref="variable">
                <router-link :to="{ name: 'inicio' }" class="menu__link-phone">
                    <fa class="link__icon-phone" icon="fa-solid fa-home" />
                    <a class="link__name-small">Inicio</a>
                </router-link>
                <router-link :to="{ name: 'tecnologias' }" class="menu__link-phone">
                    <fa class="link__icon-phone" icon="fa-solid fa-code" />
                    <a class="link__name-small">Tecnologías</a>
                </router-link>
                <router-link :to="{ name: 'desarrollos' }" class="menu__link-phone">
                    <fa class="link__icon-phone" icon="fa-solid fa-briefcase" />
                    <a class="link__name-small">Desarrollos</a>
                </router-link>
                <router-link :to="{ name: 'acercaDeMi' }" class="menu__link-phone">
                    <fa class="link__icon-phone" icon="fa-solid fa-user" />
                    <a class="link__name-small">Acerca de mi</a>
                </router-link>
        </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const variable = ref(null);
    const menuIcon = ref(null)

    const isMenuActivated = ref(false);
    
    const openMenu = () => {
        if( !isMenuActivated.value ) {
            variable.value.classList.add("header__menu-small");
            isMenuActivated.value = true;
        }else{
            variable.value.classList.remove("header__menu-small");
            isMenuActivated.value = false;
        }

    }
</script>
<style scoped>

    .info-social__icon{
        opacity: 0.5;
        cursor: pointer;
        transition: all 300ms ease-in-out;
        color: white;
    }
    .header__menu-no-active {
        display: none;
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
        cursor: pointer;
        display: none;
        font-size: 1.5rem;
        background-color: var(--color-highlight);
        padding: 0.5rem 0.8rem;
        border-radius: 20% 20% 0 0;
        color: var(--color-primary);
    }

    .link__icon-small-no-activate {
        display: none;
        font-size: 1.5rem;
        background-color: var(--color-highlight);
        padding: 0.5rem 0.8rem;
        border-radius: 20%;
        color: var(--color-primary);
        cursor: pointer;
    }
    .link__icon {
        font-size: 1rem;
        color: var(--color-primary)
    }
    a {
        text-decoration: none;
    }
   
    .menu__link {
        padding: 0.6rem 1rem;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        transition: all 300ms ease-in-out;
        border-radius: 1rem;
    }
    .menu__link:hover {
        background-color: var(--color-primary);
    }

    .menu__link:hover .link__name {
        color: black;
    }

    .menu__link:hover .link__icon {
        color: black;
    }

    .menu-link-active {
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
    }

    .active-link .menu__link {
        background-color: var(--color-primary);
        border-radius: 1rem;
    }

    .active-link .link__name,
    .active-link .link__icon {
        color: black;
    }

    .menu__link {
        font-size: 1rem;
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
    .link__icon-phone {
        font-size: 1.5rem;
    }
  
    .buttons__ver-mas {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }

    .header__menu-small {
        opacity: 1;
        display: flex;
        flex-direction: column;
        background-color: var(--color-primary);
        width: fit-content;
        border-radius: 0 1rem 1rem;
        gap: 1rem;
        padding: 1rem 2rem;
        position: absolute;
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
    .menu__link-phone {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: black;
        text-decoration: none;
    }
    .header__menu {
        margin: 0 auto;
        width: 100%;
        max-width: 80rem;
        grid-area: menu;
        font-size: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 3rem;
    }
    .header {
        z-index: 1;
        position: sticky;
        top: 0;
        display: flex;
        background-color: rgb(30 41 59);
        padding: 1rem;
    }
    .header__hamburguer {
        z-index: 1;
        position: sticky;
        top: 0;
        background-color: rgb(30 41 59);
    }

    .header__menu-div {
        width: 100%;
        background-color: #ffffff74;
        height: 1px;
    }

    /* @media (max-width: 760px) {
        .header__menu {
            display: none;
        }
        
        .header__hamburguer {
            display: block;
        }
    } */

    @media (max-width: 866px){
        .header {
            justify-content: start;
            margin-bottom: 2rem;
        }
        .header__menu {
            display: none;
        }
        .link__icon-small {
            display: block;
        }
        .link__icon-small-no-activate {
            display: block;
        }
    }

    @media (max-width: 1024px){
        .header__menu {
            display: none;
        }
        .link__icon-small {
            display: block;
        }
        .link__icon-small-no-activate {
            display: block;
        }
    }
    
</style>