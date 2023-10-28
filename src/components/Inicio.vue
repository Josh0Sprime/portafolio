<template lang="">
   <div class="inicio">
        <h1 class="inicio__user-info__title">Hola!</h1>
        <h2 class="user-info__description">Mi nombre es Jorge, desarrollador full-stack <span class="user-info__important">apasionado  </span> por la programación</h2>
        <div class="user-content__buttons">
            <router-link class="content__buttons-route" :to="{ name: 'acercaDeMi' }">Conoce mas de mi!</router-link>
        </div>
        <section class="inicio__make">
            <header>
                <h3 class="make__title">Este sitio web fue desarrollado con</h3>
            </header>
            <div class="make__prog">
                <div class="prog__container">
                    <img src="../assets/img/vue.png" class="prog__img" alt="">
                </div>
                <div class="prog__container">
                    <img src="../assets/img/css.png" class="prog__img" alt="">
                </div>
                <div class="prog__container">
                    <img src="../assets/img/vite.png" class="prog__img" alt="">
                </div>
                <div class="prog__container">
                    <img src="../assets/img/js.png" class="prog__img" alt="">
                </div>
                <div class="prog__container">
                    <img src="../assets/img/github.png" class="prog__img" alt="">
                </div>
                <div class="prog__container">
                    <img src="../assets/img/node.png" class="prog__img" alt="">
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
window.scroll({top: 0})

</script>
<style scoped>
    .inicio__user-info__title {
        font-size: 5rem;
        color: var(--color-highlight);
    }
    .inicio {
        opacity: 0;
        animation: mostrar-inicio forwards 1s;
        animation-delay: 100ms;
    }

    @keyframes mostrar-inicio {
        100% {
            opacity: 1;
        }
    }
    .user-info__important {
        color: var(--color-highlight);
        font-size: 3.8rem;
    }
    .content__buttons-route {
        margin-top: 5rem;
        position: relative;
        font-size: 1.5rem;
        display: block;
        cursor: pointer;
        width: fit-content;
        text-decoration: none;
        color: var(--color-highlight);
        border: var(--color-highlight) 0.125em solid;
        padding: 0.25em 1em;
        border-radius: 0.25em;
        text-shadow:
        0 0 0.125em hsl(0 0% 100% / 0.5),
        0 0 0.45em currentColor;
        box-shadow: inset 0 0 0.5rem 0 var(--color-highlight), 0 0 0.5rem 0 var(--color-highlight);
       
    }
    
    .content__buttons-route::before {
        pointer-events: none;
        content: "";
        position: absolute;
        background: var(--color-highlight);
        top: 120%;
        left: 0;
        width: 100%;
        height: 100%;

        transform: perspective(1em) 
        rotateX(40deg) scale(1, 0.35) translateZ(-1rem);
        filter: blur(1.5em);
        opacity: 0.7;
    }
    .content__buttons-route:hover,
    .content__buttons-route:focus {
        color: var(--color-primary);
        text-shadow: none;
    }
    .content__buttons-route::after{
        transition: opacity 100ms linear;
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0 0 2em 0.5em var(--color-highlight);
        z-index: -1;
        opacity: 0;
        background-color: var(--color-highlight);
    }
    .content__buttons-route:hover::after,
    .content__buttons-route:focus::after{
        opacity: 0.9;
    }
    .content__buttons-route:hover::before,
    .content__buttons-route:focus::before {
        opacity: 1;
    }
    .prog__container {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
        padding: 1rem;
        background-color: var(--color-title);
        width: fit-content;
        opacity: 0.7;
        transition: all 300ms ease-in-out;
        filter: blue(100%)
    }
    .prog__container:hover {
        opacity: 1;
        filter: grayscale(0);
    }
    .prog__img {
        width: 3rem;
    }
    .inicio__useruser-info__user-name {
        color: var(--color-highlight);
    }

    .make__title {
        font-size: var(--title-low);
        color: var(--color-title);
        font-weight: bold;
    }
    .make__prog {
        margin-top: 5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 5rem;
    }
    .inicio__make {
        margin-top: 5rem;
    }

    .user-info__description {
        font-size: 3rem;
        font-weight: bold;
        margin-top: 2rem;
        line-height: 1;
    }

    @media (max-width: 767px) {
        .user-info__important {
            font-size: 2.5rem;
        }
        .user-info__title {
            font-size: 3rem;
        }
        .user-info__description {
            font-size: 2rem;
        }
        .make__prog {
            gap: 2rem;
        }
        .prog__img {
            width: 3rem;
        }
        .inicio {
            padding: 0 2rem;
        }
        .content__buttons-route {
            padding: 0.8rem;
        }
        .header__user-info {
            padding: 0 2rem;
            display: flex;
            justify-content: center;
        }
    }
    @media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
        .user-info__title {
            font-size: 3rem;
        }
        .user-info__description {
            font-size: 2rem;
        }
        .make__prog {
            gap: 2rem;
        }
        .prog__img {
            width: 3rem;
        }
        .inicio {
            padding: 0 2rem;
        }
        .content__buttons-route {
            padding: 0.8rem;
        }
        .header__user-info {
            padding: 0 2rem;
            display: flex;
            justify-content: center;
        }
    }
    a {
        text-decoration: none;
    }
</style>