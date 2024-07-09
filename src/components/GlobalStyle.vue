<template>
  <h1 class="text-red">Global Stylying</h1>

  <p>Trying local scope in this component</p>
</template>

<!-- this is a global style... since is going to replicate in all the components that use this class -->
<!-- if u want to just use this style locally you need to add the attribute scoped  -->
<style scoped>
.text-red {
  color: red;
}
</style>
