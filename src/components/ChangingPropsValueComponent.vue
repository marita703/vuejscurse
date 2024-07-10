<script setup>
const myFavoriteNumberProp = defineProps(['myFavoriteNumber'])

// we cannot change the value of any prop
// myFavoriteNumberProp.myFavoriteNumber = 10
</script>

<template>
  <h1>{{ myFavoriteNumberProp.myFavoriteNumber }}</h1>
</template>
