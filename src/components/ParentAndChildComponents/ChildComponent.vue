<script setup>
import { ref } from 'vue'

const userName = ref('')
const email = ref('')
const password = ref('')
</script>

<template>
  <button @click="$emit('incrementCounter')">INCREMENT COUNTERRRRR</button>

  <form
    @submit.prevent="$emit('userInfo', userName, email, password)"
    style="margin-top: 3em; margin-bottom: 3em"
  >
    <input type="text" v-model="userName" placeholder="user name" />
    <input type="email" v-model="email" placeholder="e-mail" />
    <input type="password" v-model="password" placeholder="password" />
    <button Submit>Submit</button>
  </form>
</template>
