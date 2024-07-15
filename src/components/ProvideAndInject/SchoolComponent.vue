<script setup>
import StudentComponent from '@/components/ProvideAndInject/StudentComponent.vue'

defineProps(['studentName', 'studentAge', 'studentLocation'])
</script>

<template>
  <StudentComponent
    :studentName="studentName"
    :studentAge="studentAge"
    :studentLocation="studentLocation"
  />
</template>
