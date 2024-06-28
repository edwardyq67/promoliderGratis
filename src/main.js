// main.js
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
 // Asegúrate de que el nombre del archivo es correcto
import './index.css'

const routes = [
  { path: '/', component: ()=>import("./components/Index.vue") },

// Plantilla gratis
  {path: '/plantilla0_gratis', component: ()=>import("./components/gratis/Plantilla0_gratis.vue")},
  {path: '/plantilla1_gratis', component: ()=>import("./components/gratis/Plantilla1_gratis.vue")},
  {path: '/plantilla2_gratis', component: ()=>import("./components/gratis/Plantilla2_gratis.vue")},
  {path: '/plantilla3_gratis', component: ()=>import("./components/gratis/Plantilla3_gratis.vue")},
  {path: '/plantilla4_gratis', component: ()=>import("./components/gratis/Plantilla4_gratis.vue")}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App)
app.use(router)
app.mount('#app')
