<script setup></script>

<template>
  <article>
    <h2>Clase .contenedor</h2>
    <p>
      El .contenedor es una clase que se puede aplicar a cualquier etiqueta o componente.
      Se utiliza sobre todo para mantener el mismo ancho y margenes en bloques generales
      como el
      <code lang="en">header</code>,
      <code lang="en">footer</code>,
      <code lang="en">nav</code>,
      <code lang="en">main</code>,
      <code lang="en">div</code>,
      <code lang="en">section</code>,
      . . . etc.
    </p>
    <p>
      Si existe un elemento con .contenedor dentro de otro, se ajustan los margenes internos y
      externos para lograr que los elementos empiecen horizontalmente en el mismo lugar.
    </p>
    <h3>Ejemplo de uso</h3>
    <p>
      Nota. para ejemplos de uso se utilizan colores de fondo, pero la clase contenedor no debe
      especificar color de fondo.
    </p>
    <pre>
      &lsaquo;div class="contenedor" style="background-color: #f005;"&rsaquo;

        cualquier cosa

        &lsaquo;div class="contenedor" style="background-color: #f005;"&rsaquo;
          contenedor anidado
        &lsaquo;/ div&rsaquo;

      &lsaquo;/ div&rsaquo;
    </pre>
    <div class="contenedor" style="background-color: #f005;">
      cualquier cosa
      <div class="contenedor" style="background-color: #f005;">
        contenedor anidado
      </div>
    </div>
  </article>
</template>
