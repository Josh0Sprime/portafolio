import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Inicio from '../components/Inicio.vue'

const routes = [
    {
        path: "/inicio",
        component: Inicio,
        name: "inicio"
    },
    {
        path: "",
        redirect: { name: "inicio" }
    },
    {
        path: "/tecnologias",
        component: () => import("../components/Tecnologias.vue"),
        name: "tecnologias"
    },
    {
        path: "/desarrollos",
        component: () => import("../components/Desarrollos.vue"),
        name: "desarrollos"
    },
    {
        path: "/contacto",
        component: () => import("../components/Contacto.vue"),
        name: "contacto"
        
    },
    {
        path: "/acerca-de-mi",
        component: () => import("../components/AcercaDeMi.vue"),
        name: "acercaDeMi"
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'active-link'
});

export default router;