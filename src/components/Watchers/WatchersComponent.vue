<script setup>
// Callbacks function is called whenenver some data changes

import { ref, watch } from 'vue'

const message = ref('Hello, Vue!')

const inputText = ref('')

// whatch for changes in input text and update the message accordingly'

watch(inputText, (newValue, oldValue) => {
  //you can perform some logic here when input text changes

  console.log(newValue)
  console.log(oldValue)
  message.value = `You typed: ${newValue}`
})
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="inputText" placeholder="Type something ... " />
  </div>
</template>
