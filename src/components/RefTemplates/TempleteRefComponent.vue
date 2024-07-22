<script setup>
import { onMounted, ref } from 'vue'

// This time is going to be used as a reference and no reactivity

const myRef = ref('Mar')

//This is going to log in the console the reference, the html element that contains the reference
onMounted(() => {
  console.log(myRef.value)
  myRef.value.focus()
  myRef.value.value = 'Something else'
})

//this just give us the value of the ref
console.log(myRef.value)
</script>

<template>
  <h1>Ref as Reference</h1>

  <div>
    <input type="text" placeholder="Enter your name" ref="myRef" />
  </div>
</template>
