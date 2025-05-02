<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="contenedor">
    <h1>Componentes, vista de listas</h1>

    <ul>
      <li>
        <RouterLink :to="{name: 'Componentes'}">Index</RouterLink>
      </li>
      <li>
        <RouterLink :to="{name: 'Navegacion'}">Navegacion</RouterLink>
      </li>
    </ul>

    <router-view />
  </main>
</template>
