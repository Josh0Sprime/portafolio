<template lang="">
    <div class="development">
        <header>
            <h1 class="development__title">Desarrollos</h1>
            <p class="development__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laborum.</p>
        </header>
        
    </div>
</template>
<script setup>
window.scroll({top: 0})

</script>
<style scoped>
.development {
    opacity: 0;
    animation: mostrar-inicio forwards 1s;
    animation-delay: 100ms;
}

@keyframes mostrar-inicio {
    100% {
        opacity: 1;
    }
}

</style>