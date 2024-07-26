<script setup>
const vFormateDiv = {
  mounted: (el, binding) => {
    console.log(el)
    console.log(binding)
    el.style.fontSize = binding.value + 'rem'
    el.style.fontStyle = 'italic'
    el.style.color = 'teal'
  }
}
</script>

<template>
  <div v-formate-div="12">Using simple custom directives</div>
</template>
