<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BarraNavegacion from './componentes/navegacion/BarraNavegacion.vue';
</script>

<template>
  <BarraNavegacion>
    <RouterLink to="/">Bienvenida</RouterLink>
    <RouterLink to="/clases">Clases</RouterLink>
    <RouterLink to="/componentes">Componentes</RouterLink>
  </BarraNavegacion>

  <RouterView />
</template>
