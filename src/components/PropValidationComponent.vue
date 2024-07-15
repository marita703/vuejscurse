<script setup>
// you do this in order to specify what type is yhe props of the Props

// Basic Validation
// const props = defineProps({
//   fullName: String,
//   age: Number
// })

// Complex Validation

const props = defineProps({
  fullName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <p>{{ props.fullName }}</p>
  <p>{{ props.age }}</p>
</template>
