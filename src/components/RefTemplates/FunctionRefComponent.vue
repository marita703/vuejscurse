<script setup>
const myRefFunction = (el) => {
  console.log(el)
  el.textContent = 'textChanged'
  el.style.color = 'hotpink'
}
</script>

<template>
  <h1 :ref="myRefFunction">This is an initial Value</h1>
</template>
