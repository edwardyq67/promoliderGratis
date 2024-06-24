// main.js
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
 // Asegúrate de que el nombre del archivo es correcto
import './index.css'

const routes = [
  { path: '/', component: ()=>import("./components/Index.vue") },

// Plantilla gratis
  {path: '/plantilla1_gratis', component: ()=>import("./components/gratis/Plantilla1_gratis.vue")}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App)
app.use(router)
app.mount('#app')
