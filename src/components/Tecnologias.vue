<template lang="">
    <div id="technology" class="technology">
        <header>
            <div class="technology__header-container">
                <div class="technology__header">
                    <fa class="link__icon technology__icon" icon="fa-solid fa-code" />
                    <h1 class="technology__title">Tecnologias</h1>
                </div>
                <div>
                    <h2 class="content__title">Conocimientos en tecnologias</h2>
                    <p class="content__description">Siempre estoy en constante aprendizaje para desarrollar aplicaciones web con las mejores practicas y las tecnologias mas nuevas y populares</p>
                </div>
            </div>
        </header>
        <div class="technology__content">
            <div class="container-images">
                <div class="content__images">
                    <div class="content__container-image">
                        <p class="image__name">Angular</p>
                        <img class="container-image__image" src="../assets/img/angular.png" alt="">
                    </div>
                    <div class="content__container-image">
                        <p class="image__name">Flask</p>
                        <img class="container-image__image" src="../assets/img/flask.png" alt="">
                    </div>
                    <div class="content__container-image">
                        <p class="image__name">Javascript</p>
                        <img class="container-image__image" src="../assets/img/js.png" alt="">
                    </div>
                    <div class="content__container-image">
                        <p class="image__name">Nodejs</p>
                        <img class="container-image__image" src="../assets/img/node.png" alt="">
                    </div>
                    <div class="content__container-image">
                        <p class="image__name">React</p>
                        <img class="container-image__image" src="../assets/img/react.png" alt="">
                    </div>
                    <div class="content__container-image">
                        <p class="image__name">Vue</p>
                        <img class="container-image__image" src="../assets/img/vue.png" alt="">
                    </div>
                    <div class="content__container-image">
                        <p class="image__name">Typescript</p>
                        <img class="container-image__image" src="../assets/img/typescript.png" alt="">
                    </div>
                    <div class="content__container-image">
                        <p class="image__name">Django</p>
                        <img class="container-image__image" src="../assets/img/django.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 
<script>


export default {
    
}
</script>
<style scoped>

    .technology__icon {
        color: var(--color-primary);
        font-size: var(--title-low)
    }
    .content__header {
        padding-top: 32px;
    }

    .image__name {
        transition: all 300ms ease-in-out;
        transition-delay: 100ms;
        position: absolute;
        top: -100%;
        font-size: 1rem;
        background-color: var(--color-primary);
        color: rgb(2 6 23);
        font-weight: bold;
        padding: 1.5px 5px;
        border-radius: 10px;
        opacity: 0;
        visibility: hidden;
    }
    .content__images {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 4rem;
    }
   
    .container-image__image {
        width: 50px;
        object-fit: contain;
    }
    .content__container-image {
        opacity: 0.8;
        position: relative;
        background-color: white;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        padding: 5px;
        transition: all 300ms ease-in-out;
    }

    .technology__header-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    
    .content__container-image:hover .image__name {
        top: -60%;
        opacity: 1;
        visibility: visible;
    }

    .content__container-image:hover {
        transform: scale(1.1);
        opacity: 1;
    }

    .content__description {
        font-size: 1rem;
        max-width: 50rem;
    }
    .technology__content {
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
    }
    .technology__title {
        font-size: var(--title-low);
        color: var(--color-highlight);
    }

    .technology {
        display: flex;
        margin-top: 20rem;
        margin-bottom: 20rem;
        align-items: center;
        justify-content: space-between;
    }

    .content__title {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

 
    .content__row {
        display: flex;
        gap: 5px;
    }
    .content__especification {
        margin-top: 5rem;
        font-size: 1rem;
    }

    .technology__header {
        display: flex;  
        align-items: center;
        gap: 1rem;
    }

    @media (max-width: 760px) {
        .technology {
            display: block;
            padding: 0 2rem;
        }
        .content__images {
            gap: 2rem;
        }
    }
  
</style>