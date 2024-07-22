<script setup>
import MyComponentRef from '@/components/RefTemplates/MyComponentRef.vue'
import { onMounted, ref } from 'vue'

const myRef = ref(null)

onMounted(() => {
  console.log(myRef.value)
})
</script>

<template>
  <MyComponentRef :ref="myRef" />
</template>
