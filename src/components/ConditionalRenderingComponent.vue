<script setup>
import { ref, reactive } from 'vue'
const isTrue = false
const isFalse = false

let isVisible = ref(true)

const toggleVisibility = reactive(() => (isVisible.value = !isVisible.value))

const isUserLoggedIn = ref(true)

let userName = 'Mar'

let showDetails = ref(isUserLoggedIn)

const isActive = ref(true)

let password = ref('12')
</script>

<!-- how this work -->
<!-- "if" will check if the condition is true, if is not then it goes to "else-if" that checks if this another condition is true, if not, then goes to "else" that gives something in case both of the previos conditions are false -->

<template>
  <div>
    <p v-if="isTrue">This will show if isTrue is true</p>
    <p v-else-if="isFalse">This will show if isFalse is true</p>
    <p v-else>This will show if neither of the conditons above are true</p>

    <!-- v-show -->
    <p v-show="isVisible">
      This paragrah will be shown or hidden based on the value of its visibility
    </p>

    <button @click="toggleVisibility">Toggle visibility</button>
  </div>

  <div>
    <h1 v-if="isUserLoggedIn">Welcome {{ userName }}</h1>
    <p v-else>Please log in to access this content</p>

    <div v-show="showDetails">
      <h4>you are now able to modify your dashboard</h4>
    </div>
  </div>

  <div>
    <div v-if="isActive">
      <h1>My Blog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae quaerat id,
        placeat incidunt quas velit quam magni quasi odio consequuntur quisquam eveniet totam
        officia laudantium exercitationem reiciendis animi recusandae.
      </p>
    </div>

    <button @click="isActive = !isActive">Toggle Post</button>
  </div>

  <div>
    <h3 v-if="password.length > 8">Strong Password</h3>
    <h3 v-else-if="password.length < 8">Weak Password</h3>
    <h3 v-else>Please enter your Password</h3>
  </div>
</template>
