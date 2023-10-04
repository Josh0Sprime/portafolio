<template lang="">
   <div class="inicio">
        <h1 class="inicio__user-info__title">Hola!</h1>
        <h2 class="user-info__description">Mi nombre es <span class="user-info__user-name">Jorge</span>, desarrollador full-stack apasionado por la programacion.</h2>
        <a :href="cv" download class="user-content__buttons">
            Descargar CV
        </a>
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
            </div>
        </section>
    </div>
</template>
<script setup>
  import cv from "../assets/files/CV.pdf"
</script>
<style scoped>
    .inicio__user-info__title {
        font-size: 5rem;
        color: var(--color-highlight);
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
        filter: grayscale(100%)
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
        cursor: pointer;
        transition: all 300ms ease-in-out;
    }
    .user-content__buttons:hover {
        background-color: rgb(219 39 119/1);
    }

    .user-info__description {
        font-size: 3rem;
        font-weight: bold;
        margin-top: 2rem;
        line-height: 1;
    }

    @media (max-width: 760px) {
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
        .user-content__buttons {
            padding: 0.8rem;
        }
        .header__user-info {
            padding: 0 2rem;
        }
    }
</style>