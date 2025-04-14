<script setup></script>

<template>
  <main>
    <h2>Esparragus Base</h2>
    <p>
      este se importa desde el main, es un reset y normalizador de estilos,
      se carga de manera global, no se ponen en ninguna vista.
    </p>
    <pre>
      import EsparragusBase from '@/componentes/EsparragusBase.vue'

      app.use(EsparragusBase)
    </pre>
  </main>
</template>
