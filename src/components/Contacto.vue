<template lang="">
    <div id="contact" class="contact">
        <header class="contact__header">
            <fa class="contact__icon" icon="fa-solid fa-address-book" />
            <h1 class="contact__title">Contacto</h1>
        </header>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .contact__header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .contact__header {
        color: var(--color-primary);
        font-size: 3rem;
    }

    .contact__title {
        font-size: var(--title);
        color: var(--color-highlight);
    }

    .contact {
        margin-top: 20rem;
        margin-bottom: 20rem;
    }
</style>