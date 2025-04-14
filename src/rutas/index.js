import { createRouter, createWebHistory } from 'vue-router'
import Bienvenida from '../vistas/VistaBienvenida.vue'

const rutas = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bienvenida',
      component: Bienvenida,
    },
    {
      path: '/componentes',
      name: 'componentes',
      component: () => import('../vistas/VistaComponentes.vue'),
    },
  ],
})

export default rutas
