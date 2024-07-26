<script setup>
// import RenderFriends from '@/components/AsyncComponents/RenderFriends.vue'

import { ref, defineAsyncComponent } from 'vue'

const RenderFriends = defineAsyncComponent(
  () => import('@/components/AsyncComponents/RenderFriends.vue')
)

const showFriends = ref(false)

const toggleFriends = () => {
  showFriends.value = !showFriends.value
}
</script>

<template>
  <div v-if="showFriends"><RenderFriends /></div>
  <button @click="toggleFriends">Toggle Friends Component</button>
</template>
