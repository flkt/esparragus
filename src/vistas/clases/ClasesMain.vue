<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="contenedor">
    <h1>Clases</h1>
    <ul>
      <li>
        <RouterLink :to="{name: 'Clases'}">Index</RouterLink>
      </li>
      <li>
        <RouterLink :to="{name: 'Contenedor'}">Contenedor</RouterLink>
      </li>
    </ul>

    <router-view />
  </main>
</template>
