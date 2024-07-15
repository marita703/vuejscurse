<script setup>
import ChildComponent from '@/components/ParentAndChildComponents/ChildComponent.vue'
import { ref } from 'vue'

let count = ref(0)

const formHandler = (name, email, password) => {
  console.log('User Name', name)
  console.log(' email', email)
  console.log('password', password)
}
</script>

<template>
  <h1>Count: {{ count }}</h1>
  <ChildComponent @incrementCounter="count++" @userInfo="formHandler" />
</template>
