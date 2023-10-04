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
                    <a class="link__name-small">Tecnologias</a>
                </router-link>
                <router-link :to="{ name: 'desarrollos' }" class="menu__link-phone">
                    <fa class="link__icon-phone" icon="fa-solid fa-briefcase" />
                    <a class="link__name-small">Desarrollos</a>
                </router-link>
                <router-link :to="{ name: 'contacto' }" class="menu__link-phone">
                    <fa class="link__icon-phone" icon="fa-solid fa-address-book" />
                    <a class="link__name-small">Contacto</a>
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
    }
    .link__icon {
        font-size: 1rem;
        color: var(--color-primary)
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

    .active-link .link__name {
        color: var(--color-highlight);
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
        max-width: 80rem;
        grid-area: menu;
        font-size: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8rem;
        width: 100%;
        gap: 3rem;
    }
    .header {
        z-index: 1;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        background-color: rgb(30 41 59);
        height: 1%;
        width: 100%;
        padding: 2rem 0 1.5rem 0;
    }
    .header__hamburguer {
        display: none;
        margin-bottom: 5rem;
        width: 100%;
        position: fixed;
        top: 0;
        padding: 0.8rem;
        margin-left: 2rem;
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
        
        .header__hamburguer {
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
        .link__icon-small-no-activate {
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
        .link__icon-small-no-activate {
            display: block;
        }
    }
</style>