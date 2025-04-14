import { createRouter, createWebHistory } from 'vue-router'
import Bienvenida from '../vistas/VistaBienvenida.vue'

const rutas = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Bienvenida',
      component: Bienvenida,
    },
    {
      path: '/componentes',
      component: () => import('../vistas/VistaComponentes.vue'),
      children: [
        {
          path: '',
          name: 'Componentes',
          component: () => import('../vistas/componentes/SubvistaComponentes.vue'),
        },
        {
          path: 'esparragus-base',
          name: 'Esparragus Base',
          component: () => import('../vistas/componentes/EsparragusBase.vue'),
        },
      ]
    },
  ],
})

export default rutas
