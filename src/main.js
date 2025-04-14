import '@/estilos/documentacion.css'

import { createApp } from 'vue'

import App from './App.vue'
import rutas from './rutas'

import EsparragusBase from '@/componentes/EsparragusBase.vue'

const app = createApp(App)

app.use(rutas)
app.use(EsparragusBase)

app.mount('#app')
