<script setup>
import { inject } from 'vue'

defineProps(['studentName', 'studentAge', 'studentLocation'])
const personInloved = inject('personInloved')
const inlovedAge = inject('inlovedAge')
const inlovedLocation = inject('inlovedLocation')
</script>

<template>
  <h1>{{ studentName }}</h1>
  <h1>{{ studentAge }}</h1>
  <h1>{{ studentLocation }}</h1>

  <h2>La persona que siempre se hace pequena pero ya se cansó</h2>

  <h3>{{ personInloved }}</h3>
  <h3>{{ inlovedAge }}</h3>
  <h3>{{ inlovedLocation }}</h3>
</template>
