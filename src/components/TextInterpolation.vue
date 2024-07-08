<!-- JS -->

<script setup>
const myMessage = 'Yellow text '
const myNumber = 100
function add(x, y) {
  return x + y
}
</script>

<!-- Html -->
<template>
  <h2>Text Interpolation Example</h2>
  <p>{{ myMessage }}</p>
  <p>{{ myNumber }}</p>
  <h3>2 + 2 = {{ 2 + 2 }}</h3>
  <h4>this is how I interpolate a function</h4>
  <p>x = 3 ^ y = 2 => x + y = {{ add(3, 2) }}</p>
</template>

<!-- Css -->

<style>
p {
  max-width: fit-content;
  background-color: black;
  color: yellow;
}
</style>
