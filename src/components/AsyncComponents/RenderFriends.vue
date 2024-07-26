<script setup>
import { ref } from 'vue'

const friends = ref(['chris', 'maria', 'james', 'sebas'])
</script>

<template>
  <h1 v-for="(friend, i) in friends" :key="i">{{ friend }}</h1>
</template>
