<template>
    <Header />
    <Tecnologias />
    <!-- <Desarrolos /> -->
    <Contacto />
</template>
<script setup>
    import { defineAsyncComponent } from 'vue'
    const Header = defineAsyncComponent(() => import("../components/Header.vue"));
    const Tecnologias = defineAsyncComponent(() => import("../components/Tecnologias.vue"));
    const Desarrolos = defineAsyncComponent(() => import("../components/Desarrollos.vue"));
    const Contacto = defineAsyncComponent(() => import("../components/Contacto.vue"));
</script>
<style>
    
</style>