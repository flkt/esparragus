<template>
  <esparragus-base />
</template>

<style lang="scss">
@charset 'UTF-8';
@use 'sass:map';
@use '@/_configuracion/var_tipografia' as variable;

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: clamp(variable.$texto-tamanio-min, var(--es-texto-tamanio, 18px), variable.$texto-tamanio-max);
  font-family: var(--es-texto-familia, sans-serif), sans-serif;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
}

body {
  line-height: variable.$texto-interlineado;
  margin: 0;
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6,
caption {
  font-family: var(--es-titulo-familia, sans-serif), sans-serif;
  line-height: variable.$titulo-interlineado;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
figcaption,
details,
caption {
  max-width: variable.$texto-ancho-lectura;
}

hgroup {
  > * :not(:first-child) {
    margin-top: 0;
  }

  > * :not(:last-child) {
    margin-bottom: 0;
  }
}

code,
pre,
samp,
kbd,
var {
  font-family: var(--es-codigo-familia, monospace), monospace;
  font-size: max(0.9em, variable.$texto-tamanio-min);
}

small {
  font-size: max(0.85em, variable.$texto-tamanio-min);
}

sub,
sup {
  font-size: max(0.75em, variable.$texto-tamanio-min);
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

iframe,
img {
  border: none;
}

figure,
picture,
img,
[disabled] {
  cursor: cell;
  pointer-events: none;
}

a {
  overflow-wrap: break-word;
  hyphens: auto;
}

a,
button,
input,
output,
select,
textarea,
::file-selector-button {
  font: inherit;
}

a,
button,
summary,
select,
input[type='button'],
input[type='submit'],
input[type='reset'],
::file-selector-button {
  cursor: pointer;
}

</style>
