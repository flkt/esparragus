<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="contenedor">


      <h1><RouterLink :to="{name: 'Clases'}">Clases</RouterLink></h1>
      <router-view />


  </main>
</template>
