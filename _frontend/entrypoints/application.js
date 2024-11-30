import 'virtual:windi.css'
import 'virtual:windi-devtools'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import Menu from "primevue/menu"

const pinia = createPinia()

import ScrollToTop from "~/components/ScrollToTop.vue";
import AppNavMore from "~/components/AppNavMore.vue";

// Scroll-to-top as App
createApp(ScrollToTop).mount('#app-scroll-to-top')
// App-Nav-More as App
createApp(AppNavMore).
    component('Menu', Menu).
    use(PrimeVue).
    mount('#app-nav-more')

console.log('Vite ⚡️ Ruby')