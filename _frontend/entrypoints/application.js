import 'virtual:windi.css'
import 'virtual:windi-devtools'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import Menu from "primevue/menu"

const pinia = createPinia()

import ScrollToTop from "~/components/ScrollToTop.vue";
import AppNavMore from "~/components/AppNavMore.vue";

createApp(ScrollToTop).mount('#scroll-to-top')
createApp(AppNavMore).component('Menu', Menu).use(PrimeVue).mount('#app-nav-more')

console.log('Vite ⚡️ Ruby')