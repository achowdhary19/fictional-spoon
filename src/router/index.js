import {createRouter, createWebHashHistory} from "vue-router"
import App from '@/App.vue';
import TestHome from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
    {path: '/', name: "AppHome", component: App},
    {path: '/home', name: "TestHome", component: TestHome},
    {path: '/about', name: "About", component: About}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes

})

export default router