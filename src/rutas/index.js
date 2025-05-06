import { createRouter, createWebHistory } from 'vue-router'
import Bienvenida from '@/vistas/BienvenidaMain.vue'

const rutas = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Bienvenida',
      component: Bienvenida,
    },
    {
      path: '/clases',
      name: '',
      component: () => import('@/vistas/clases/ClasesMain.vue'),
      children: [
        {
          path: '',
          name: 'Clases',
          component: () => import('@/vistas/clases/ClasesIndex.vue'),
        },
        {
          path: 'contenedor',
          name: 'Contenedor',
          component: () => import('@/vistas/clases/ContenedorArticle.vue'),
        },
        {
          path: 'reticula',
          name: 'Reticula',
          component: () => import('@/vistas/clases/ReticulaArticle.vue'),
        },
        {
          path: 'reticula-contenedor',
          name: 'Reticula Contenedor',
          component: () => import('@/vistas/clases/ReticulaContenedorArticle.vue'),
        },
      ]
    },
    {
      path: '/componentes',
      name: '',
      component: () => import('@/vistas/componentes/ComponentesMain.vue'),
      children: [
        {
          path: '',
          name: 'Componentes',
          component: () => import('@/vistas/componentes/ComponentesIndex.vue'),
        },
        {
          path: 'navegacion',
          name: 'Navegacion',
          component: () => import('@/vistas/componentes/NavegacionArticle.vue'),
        },
      ]
    },
  ],
})

export default rutas
