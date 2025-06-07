<script setup></script>

<template>
  <article>
    <h2>Clase .reticula</h2>
    <p>
      La .reticula es una tipo especial de contenedor en donde sus .columnas
      se utilizan de forma controlada para crear espacios de ancho específico
      en porcentaje en relación al espacio en que se encuentran.
    </p>
    <p>
      La .reticula siempre lleva un elemento hije con la clase .columna-*
    </p>
    <h3>Configuración</h3>
    <p>
      En el archivo de configuracion map_clases.scss, la clase $reticula requiere
      al menos llevar el atributo 'columnas' que definirá la cantidad máxima de
      columnas que puede contener un renglón. Pueden utilizarse los atributos
      'general' y 'adaptable' para configurar la retícula de manera general.
    </p>
    <pre>
      $reticula: (
        'columnas': 7,
        'general': (),
        'adaptable': ()
      );</pre>
    <p>
      En la construcción de la clase, se utilizo un renglón flex, separado con un gap
      de --es-espaciado-base, que es una variable responsiva que también utilizan
      todos los contenedores.
    </p>
    <h3>Ejemplo de uso</h3>
    <p>
      Para ejemplos de uso se utilizan colores de fondo, pero ni la clase .reticula,
      ni la clase .columna tienen ni deberían tener especificado un color por buena práctica.
    </p>
    <pre>
      &lsaquo;div class="reticula" style="background-color: #f005;"&rsaquo;

        &lsaquo;div class="columna-1" style="background-color: #00f5;"&rsaquo;
          columna-1
        &lsaquo;/ div&rsaquo;

        . . .

      &lsaquo;/ div&rsaquo;
    </pre>
    <div class="reticula" style="background-color: #f005;">
      <div class="columna-7">
        <p>.reticula</p>
      </div>
      <div class="columna-1" style="background-color: #00f5;">
        <p>columna-1</p>
      </div>
      <div class="columna-1" style="background-color: #00f5;">
        <p>columna-1</p>
      </div>
      <div class="columna-1" style="background-color: #00f5;">
        <p>columna-1</p>
      </div>
      <div class="columna-1" style="background-color: #00f5;">
        <p>columna-1</p>
      </div>
      <div class="columna-1" style="background-color: #00f5;">
        <p>columna-1</p>
      </div>
      <div class="columna-1" style="background-color: #00f5;">
        <p>columna-1</p>
      </div>
      <div class="columna-1" style="background-color: #00f5;">
        <p>columna-1</p>
      </div>
      <div class="columna-2" style="background-color: #00f5;">
        <p>columna-2</p>
      </div>
      <div class="columna-5" style="background-color: #00f5;">
        <p>columna-5</p>
      </div>
      <div class="columna-3" style="background-color: #00f5;">
        <p>columna-3</p>
      </div>
      <div class="columna-4" style="background-color: #00f5;">
        <p>columna-4</p>
      </div>
      <div class="columna-6" style="background-color: #00f5;">
        <p>columna-6</p>
      </div>
      <div class="columna-7" style="background-color: #00f5;">
        <p>columna-7</p>
      </div>
    </div>
  </article>
</template>
