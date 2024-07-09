<template>
  <!-- I can only use the apostrofe and not the quotes -->
  <h1 v-bind:class="myClasses['m-class']">Using Module CSS with $ Syntax (kebab-case)</h1>
  <h1 v-bind:class="myClasses.mClassCammelCaseSitnax">
    Using Module CSS with $ Syntax (cammelCaseSitnax)
  </h1>
</template>

<style module="myClasses">
/* kebab-case */

.m-class {
  background: red;
  color: white;
}

/* cammelCaseSitnax */

.mClassCammelCaseSitnax {
  background-color: green;
  color: white;
}
</style>
