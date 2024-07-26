<script setup>
import { useCounter } from '@/shared/useCounter.js'

const counter = useCounter()

// what if i want to use the same logic of this component but not use the ui of this component
// I can create a compsosable
</script>

<template>
  <h1>{{ counter.count }}</h1>
  <button @click="counter.increment">Increment BUtton</button>
  <button @click="counter.decrement">Decrement BUtton</button>
</template>
