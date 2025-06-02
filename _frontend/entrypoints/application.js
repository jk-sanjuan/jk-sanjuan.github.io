import 'virtual:windi.css'
import 'virtual:windi-devtools'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import Menu from "primevue/menu"

const pinia = createPinia()

import Home from "~/components/Home.vue";

import ScrollToTop from "~/components/ScrollToTop.vue";
import AppNavMore from "~/components/AppNavMore.vue";
import about_jksj from "~/components/about-jksj.vue";
import cFooterCol from "~/components/c-footer-col.vue";

import Profile from "~/components/About/Profile.vue";
import Designs from "~/components/About/Designs.vue";
import Nation from "~/components/About/Nation.vue";
import Team from "~/components/About/Team.vue";


createApp(ScrollToTop).mount('#scroll-to-top');
createApp(AppNavMore).component('Menu', Menu).use(PrimeVue).mount('#app-nav-more');

createApp(about_jksj)
  .component('AboutProfile', Profile)
  .component('AboutDesigns', Designs)
  .component('AboutNation', Nation)
  .component('AboutTeam', Team)
.mount('#app-about-jksj');

createApp(cFooterCol).mount('#c-footer-col');

createApp(Home).mount('#home-app');

console.log('Vite ⚡️ Ruby')