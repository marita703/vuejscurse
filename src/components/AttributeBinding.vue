<script setup>
const myChannel = 'https://www.marw3b.dev/'
const amazingImage =
  'https://www.verdict.co.uk/wp-content/uploads/2022/12/Shutterstock_2183804245.jpg'
const altText = 'just a random w3b picture'

// Dynamic Binding

const imageInfo = {
  src: 'https://media.istockphoto.com/id/1370016371/photo/web3-world-wide-web-based-on-blockchain-incorporating-decentralization-and-token-based.jpg?s=612x612&w=0&k=20&c=gF2UzFFW0sfInYz00-obiuGUv2enz3C1gr1yfGOhfME=',
  alt: 'just a random w3b picture',
  height: 600,
  width: 400
}
</script>

<template>
  <a v-bind:href="myChannel">Mar's website</a>
  <a :href="myChannel">Mar's website</a>
  <img class="hola" :src="amazingImage" style="margin-top: 2rem" :alt="altText" />
  <img :src="imageInfo" />
</template>

<!-- css -->

<style>
.hola {
  width: 600px;
  height: 500px;
}
</style>
