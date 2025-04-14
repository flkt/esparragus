<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/">Bienvenida</RouterLink>
  <RouterLink to="/componentes">Componentes</RouterLink>

  <RouterView />
</template>
