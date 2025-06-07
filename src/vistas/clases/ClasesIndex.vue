<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <p>
      En esta sección se encuentran enlistadas todas las clases creadas.
    </p>

    <h2>Estructura</h2>
    <div class="reticula">
      <RouterLink :to="{name: 'Contenedor'}" class="columna-1">Contenedor</RouterLink>
      <RouterLink :to="{name: 'Contenedor Reticula'}" class="columna-1">Contenedor Reticula</RouterLink>
      <RouterLink :to="{name: 'Reticula'}" class="columna-1">Reticula</RouterLink>
    </div>
  </div>
</template>
