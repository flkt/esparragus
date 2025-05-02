import './esparragus.scss'

import { createApp } from 'vue'

import App from './App.vue'
import rutas from './rutas'

const app = createApp(App)

app.use(rutas)

app.mount('#app')
