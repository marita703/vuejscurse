<!-- JS -->

<script setup>
import NestedComponent from '@/components/NestedComponent.vue'
import TextInterpolation from '@/components/TextInterpolation.vue'
console.log('Hello World')
</script>

<!-- Html -->

<template>
  <h1>Hello World (this is a parent component)</h1>
  <NestedComponent />
  <TextInterpolation />
</template>
<!-- Css -->

<style>
h1 {
  color: blueviolet;
}
</style>
