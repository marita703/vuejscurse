<script setup>
import { ref, reactive } from 'vue'
let usersNames = ref(['Michalel', 'Jordan', 'jose', 'mar'])
let userInfo = ref({ name: 'alex', location: ['NYC', 'IDK'], isMarriaged: true, age: '20' })

let friends = reactive([ref('Jordan'), ref('Alex'), ref('Mar')])
</script>

<template>
  <h1>User Names: {{ usersNames }}</h1>
  <button @click="usersNames.push('Chris')">Add User</button>

  <h2>Name: {{ userInfo.name }}</h2>
  <h2>Age: {{ userInfo.age }}</h2>
  <h2>Location: {{ userInfo.location }}</h2>
  <h2>IsMarried: {{ userInfo.isMarriaged }}</h2>

  <button @click="userInfo.name = 'Chris'">Change Name</button>
  <button @click="userInfo.age = 10">Change Age</button>

  <ul>
    <li>{{ friends[0] }}</li>
    <li>{{ friends[1] }}</li>
    <li>{{ friends[2] }}</li>
  </ul>

  <button @click="friends[0] = '🤝'">Hand Shake</button>
  <button @click="friends[1] = '🤝'">Hand Shake</button>
  <button @click="friends[2] = '🤝'">Hand Shake</button>
</template>
