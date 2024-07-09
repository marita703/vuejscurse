<script setup>
import { ref, computed } from 'vue'

const number = ref(5)

const squaredNumber = computed(() => {
  return number.value * number.value
})

const firstName = ref('Maria del Mar ')
const lastName = ref('Martinez')

const fullName = computed(() => firstName.value + ' ' + lastName.value)

const counter = ref(0)
const squaredCounter = computed(() => counter.value ** 2)
</script>

<template>
  <h1>Original Number {{ number }}</h1>
  <h1>Squared Number {{ squaredNumber }}</h1>
  <h2>Complete Name {{ fullName }}</h2>
  <h3>Counter {{ counter }}</h3>
  <h3>Squared Counter {{ squaredCounter }}</h3>
  <button @click="counter++">Increment Counter</button>
</template>
