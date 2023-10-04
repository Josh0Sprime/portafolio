<template>
    <Header />
    <div class="content">
        <router-view></router-view>
    </div>
    <!-- <Tecnologias /> -->
    <!-- <Desarrolos /> -->
    <!-- <Contacto /> -->
</template>
<script setup>
    import { defineAsyncComponent } from 'vue'
    const Header = defineAsyncComponent(() => import("../components/Header.vue"));
    const Tecnologias = defineAsyncComponent(() => import("../components/Tecnologias.vue"));
    const Desarrolos = defineAsyncComponent(() => import("../components/Desarrollos.vue"));
</script>
<style scoped>
    .content {
        max-width: 80rem;
        margin: 0 auto;
        padding: 10rem 0;
    }

    @media (max-width: 760px) {
        .content {
            padding: 5rem 0;
        }
    }
</style>