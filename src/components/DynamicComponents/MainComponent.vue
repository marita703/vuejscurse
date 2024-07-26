<script setup>
import { ref } from 'vue'
import Component1 from '@/components/DynamicComponents/Component1.vue'
import Component2 from '@/components/DynamicComponents/Component2.vue'
import Component3 from '@/components/DynamicComponents/Component3.vue'

const currentTab = ref('Component1')

const tabs = {
  Component1,
  Component2,
  Component3
}
</script>

<template>
  <h1>Main Component</h1>
  <button @click="currentTab = 'Component1'">What is Html</button>
  <button @click="currentTab = 'Component2'">What is CSS</button>
  <button @click="currentTab = 'Component3'">What is JS</button>

  <!-- Dynamics Component -->

  <component :is="tabs[currentTab]" />
</template>
