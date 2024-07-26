<script setup>
import { ref } from 'vue'

const data = ref(null)

const fetchData = () => {
  //make a get request using fetch

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      //check if the response status is ok or 200

      if (!response.ok) {
        throw new Error(`HTTP Error! Status ${response.status}`)
      }

      //parse the json response

      return response.json()
    })
    .then((responseData) => {
      data.value = responseData
    })
    .catch((error) => {
      console.error(`Error fetching data, error: ${error}`)
    })
}
</script>

<template>
  <h1>Get Data</h1>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <div>
      <h2>Html Data</h2>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>
