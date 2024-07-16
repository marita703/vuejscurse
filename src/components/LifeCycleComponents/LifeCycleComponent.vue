<script setup>
import {
  ref,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onBeforeMount
} from 'vue'

const message = ref('Hello')

//Lifecycel hooks

onMounted(() => {
  console.log('Component has been mounted')
})

onBeforeMount(() => {
  console.log('Component is about to be mounted')
})

onBeforeUpdate(() => {
  console.log('Component is about to be updated')
})

const updateMessage = () => {
  message.value = 'Updated Message'
}

onUpdated(() => {
  console.log('Component has been updated')
})

onBeforeUnmount(() => {
  console.log('componet is going to be Unmounted')
})

onUnmounted(() => {
  console.log('component is already Unmounted')
})
</script>

<template>
  <h1>Life Cycle Component</h1>
  <p>{{ message }}</p>
  <button @click="updateMessage">Update Message</button>
</template>
