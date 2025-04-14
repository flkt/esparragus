<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <h1>Componentes</h1>

    <RouterLink :to="{name: 'Esparragus Base'}">Esparragus Base</RouterLink>

    <router-view />
  </main>
</template>
