<script setup>
import { ref, watch } from 'vue'

const counter = ref(0)

const username = ref('Chris')

watch([username, counter], (newValue, oldValue) => {
  console.log('NeuValue', newValue)
  console.log('OldValue', oldValue)
})
</script>

<template>
  <h1>{{ username }}</h1>
  <h2>{{ counter }}</h2>

  <button @click="username = 'Mar'">change</button>
  <button style="margin-bottom: 3rem" @click="counter++">Increment</button>
</template>
