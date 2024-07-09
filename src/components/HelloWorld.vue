<!-- JS -->

<script setup>
import NestedComponent from '@/components/NestedComponent.vue'
import TextInterpolation from '@/components/TextInterpolation.vue'
import AttributeBinding from '@/components/AttributeBinding.vue'
import GlobalStyle from '@/components/GlobalStyle.vue'
import LocalStyle from '@/components/LocalStyle.vue'
import CombinedStyle from '@/components/CombinedStyle.vue'
import ModuleStyle from '@/components/ModuleStyle.vue'
import MyEvent from '@/components/MyEvent.vue'
console.log('Hello World')
</script>

<!-- Html -->

<template>
  <div class="container">
    <h1>Hello World (this is a parent component)</h1>
    <NestedComponent />
    <TextInterpolation />
    <AttributeBinding />
    <GlobalStyle />
    <LocalStyle />
    <CombinedStyle />
    <ModuleStyle />
    <MyEvent />
  </div>
</template>
<!-- Css -->

<style>
.container {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: blueviolet;
}
</style>
