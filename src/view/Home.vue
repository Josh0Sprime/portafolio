<template>
    <Header />
    <Tecnologias />
</template>
<script setup>
    import { defineAsyncComponent } from 'vue'
    const Header = defineAsyncComponent(() => import("../components/Header.vue"))
    const Tecnologias = defineAsyncComponent(() => import("../components/Tecnologias.vue"))
</script>
<style>
    
</style>