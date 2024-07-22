<script setup>
// Callbacks function is called whenenver some data changes

import { reactive, watch } from 'vue'

const state = reactive({ username: 'Alex' })

//Here we cant provide a specific porperty of object
// We have to provide the entire object , otherwise we are going to get an error on the console

watch(state, (newValue, oldValue) => {
  //if you are providing a whole object in this case "state", the new and the old values will be the same

  console.log('newValue: ' + newValue)
  console.log('oldValue: ' + oldValue)
})

// if we want to get both values separately, then we need to provide a getter function

watch(
  () => state.username,
  (newValue, oldValue) => {
    //if you are providing a whole object in this case "state", the new and the old values will be the same

    console.log('newValue1: ' + newValue)
    console.log('oldValue1: ' + oldValue)
  }
)
</script>

<template>
  <div>
    <h1>{{ state.username }}</h1>
    <button @click="state.username = 'Jordan'">Change Name</button>
  </div>
</template>
