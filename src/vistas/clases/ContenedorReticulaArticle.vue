<script setup></script>

<template>
  <article>
    <h2>Clase .contenedor.reticula</h2>
    <p>
      Cuando se utilizan la clase contenedor y reticula en el mismo elemento,
      se crea una combinacion de ambas clases para formar una reticula con los margenes
      del contenedor juntando los espacios horizontales entre las columnas pero
      agregando margenes internos en cada una de ellas.
    </p>
    <p>
      Se puede utilizar para acomodar en reticula elementos con color o imagen de fondo.
    </p>
    <h3>Ejemplo de uso</h3>
    <p>
      Nota. para ejemplos de uso se utilizan colores de fondo, pero ni la clase .reticula,
      ni la clase .columna deben especificar color de fondo.
    </p>
    <pre>
      &lsaquo;div class="contenedor reticula" style="background-color: #f005;"&rsaquo;

        &lsaquo;div class="columna-3" style="background-color: #f0f5;"&rsaquo;
          columna-3
        &lsaquo;/ div&rsaquo;

        &lsaquo;div class="columna-4" style="background-color: #ff05;"&rsaquo;
          columna-4
        &lsaquo;/ div&rsaquo;

      &lsaquo;/ div&rsaquo;
    </pre>
    <div class="contenedor reticula" style="background-color: #f005;">
      <div class="columna-7">
        <p>.contenedor.reticula</p>
      </div>
      <div class="columna-3" style="background-color: #f0f5;">
        <p>columna-3</p>
      </div>
      <div class="columna-4" style="background-color: #ff05;">
        <p>columna-4</p>
      </div>
    </div>
  </article>
</template>
