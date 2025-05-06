<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="contenedor reticula">

    <div class="columna-2">
      <ul>
        <li>
          Listado
          <ul>
            <li><RouterLink :to="{name: 'Clases'}">Index</RouterLink></li>
          </ul>
        </li>
        <li>
          Estructura
          <ul>
            <li><RouterLink :to="{name: 'Contenedor'}">Contenedor</RouterLink></li>
            <li><RouterLink :to="{name: 'Reticula'}">Reticula</RouterLink></li>
            <li><RouterLink :to="{name: 'Reticula Contenedor'}">Reticula Contenedor</RouterLink></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="columna-5">
      <h1>Clases</h1>
      <router-view />
    </div>

  </main>
</template>
