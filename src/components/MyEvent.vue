<script setup>
import { ref } from 'vue'
let count = ref(0)
function incrementCounter() {
  count.value++
}

function decrementCounter() {
  count.value--
}

const submitHandler = (e) => {
  e.preventDefault()
  alert('Valid Credentials')
}

const showMessage = (message) => {
  alert('Message: ' + message)
}
</script>

<template>
  <h1>Count: {{ count }}</h1>
  <button v-on:click="count++">Increment</button>
  <button @:click="incrementCounter">Increment with Function</button>
  <button @:click="decrementCounter">Decrement with Function</button>

  <form @:submit="submitHandler" style="margin-top: 2rem">
    <input type="text" placeholder="Please enter your name" />
    <input type="email" placeholder="Please enter your email" />
    <button>submit</button>
  </form>

  <button v-on:click="showMessage('this is my message')">Show Message</button>
</template>
