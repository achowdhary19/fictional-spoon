// This file contains all the Vue-related logic, including: --> Creating the Vue app, Defining data (data()), Adding methods (methods), Mounting Vue to the #app div
import { createApp } from 'vue'
import App from './App.vue'
import 'aframe' 
import router from '@/router'


// creating app instance and mounting it to the DOM (The #app div in index.html ) 
createApp(App)
.use(router)
.mount('#app')