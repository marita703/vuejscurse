<script setup>
import { ref } from 'vue'

const count = ref(10)

const increment = () => count.value++

const decrement = () => count.value--

//First we have to expose all the properties and methods
// then wed be able to use it in the parent component
//use use (defineExpose) to expose our data for the parent to use

defineExpose({ count, increment, decrement })
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>
