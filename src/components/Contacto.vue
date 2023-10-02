<template lang="">
    <div id="contact" class="contact">
        <div class="contact__content">
            <header class="contact__header">
                <div class="header__content">
                    <fa class="contact__icon" icon="fa-solid fa-address-book" />
                    <h1 class="contact__title">Contacto</h1>
                </div>
            </header>
            <div class="contact__description">
                <h2 class="description__title">¿Tienes alguna idea en mente?</h2>
                <p class="description__content">Si tienes una idea genial para ayudarte a ti o a otros, no dudes en contactarme, podemos desarrollar una aplicacion web o landing page <span class="description__span">juntos!</span></p>
            </div>
        </div>
        <div class="contact__form">
            <h2 class="contact__title">LLena tus datos!</h2>
            <form>
                <div class="form__input">
                    <label class="description__content" for="nombre">Nombre</label>
                    <input class="input__box" id="nombre" type="text">
                </div>
                <div class="form__input">
                    <label class="description__content" for="email">Correo electronico</label>
                    <input class="input__box" id="email" type="email">
                </div>
                <div class="form__input">
                    <label class="description__content" for="idea">Comentame sobre tu idea!</label>
                    <textarea id="idea" class="input__area" cols="30" rows="5"></textarea>
                </div>
                <a class="form__btn">Enviar</a>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

    .contact::-webkit-scrollbar {
      background-color: transparent;
      width: 5px;
    }

    .contact::-webkit-scrollbar-thumb {
      background-color: #ffffffa1;
      border-radius: 10px;
    }

    .contact::-webkit-scrollbar-thumb:hover {
      background-color: var(--color-primary);
      border-radius: 10px;
    }

    .contact::-webkit-scrollbar-track {
      margin: 80px 0;
    }
    .header__content {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .form__btn {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        font-size: 1rem;
        padding: 5px;
        font-weight: bold;
        background-color: var(--color-highlight);
        cursor: pointer;
        transition: all 300ms ease-in-out;
        border-radius: 10px;
    }

    .form__btn:hover {
        background-color: rgb(219 39 119/1);;
    }
    .contact__form {
        flex-basis: 40%;
    }

    .input__area {
        padding: 5px 10px;
        border-radius: 5px;
    }

    .input__area:focus {
        outline: none;
        border-color: var(--color-highlight);
    }
    .input__box {
        padding: 7px 10px;
        border-radius: 5px;
    }
    
    .input__box:focus {
        outline: none;
        border-color: var(--color-highlight);
    }
    .form__input {
        display: flex;
        flex-direction: column;
    }
    .contact__content {
        display: flex;
        flex-direction: column;
        flex-basis: 50%;
    }

    .contact__title {
        font-size: var(--title-low);
        color: var(--color-highlight);
    }

    .description__span {
        color: var(--color-highlight);
        font-weight: bold;
    }

    .description__title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-top: 2rem;
    }
    .contact {
        padding: 2rem 0;
        display: flex;
        color: white;
        justify-content: space-between;
    }

    .contact__icon {
        font-size: var(--title-low);
    }
    .description__content {
        margin-top: 1rem;
        font-size: 1rem;
    }

    .contact {
        max-height: 30rem;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    @media (max-width: 760px) {
        .contact {
            display: block;
            padding: 0 2rem;
        }
    }
</style>