<template>
  <nav
    class="navegacion"
    :aria-label="ariaBarraNavegacion"
  >
    <slot />
  </nav>
</template>

<script setup>
  defineProps({
    ariaBarraNavegacion: {
      type: String,
      default: 'Navegación principal',
    }
  })
</script>
