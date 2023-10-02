<template lang="">
   <div class="header__user-info">
        <h1 class="user-info__title">Hola!</h1>
        <h2 class="user-info__description">Mi nombre es <span class="user-info__user-name">Jorge</span>, desarrollador full-stack apasionado por la programacion.</h2>
        <a :href="cv" download class="user-content__buttons">
            Descargar CV
        </a>
    </div>
</template>
<script setup>
  import cv from "../assets/files/CV.pdf"
</script>
<style scoped>
    .user-info__title {
        font-size: 5rem;
        color: var(--color-highlight);
    }
    .user-info__user-name {
        color: var(--color-highlight);
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
        .user-content__buttons {
            padding: 0.8rem;
        }
        .header__user-info {
            padding: 0 2rem;
        }
    }
</style>