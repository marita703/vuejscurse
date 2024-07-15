<script setup>
import { inject } from 'vue'

const friendsList = inject('friends')

const games = inject('games')

const moreGames = inject('moreGames')
</script>

<template>
  <h4>Injecting Array</h4>
  <ul v-for="(friend, index) in friendsList" :key="index">
    <li>{{ friend }}</li>
  </ul>

  <hr />

  <h4>Inject object</h4>
  <ul v-for="(game, index) in games" :key="index">
    <li>{{ game }}</li>
  </ul>

  <h4>Inject Array of Objects</h4>
  <ul v-for="(anotherGame, index) in moreGames" :key="index">
    <li>{{ anotherGame }}</li>
  </ul>

  <h4>Inject Object destructuring</h4>
  <ul v-for="({ title, genre, platform, releaseDate }, index) in moreGames" :key="index">
    <li>{{ title }}</li>
    <li>{{ genre }}</li>
    <li>{{ platform }}</li>
    <li>{{ releaseDate }}</li>
  </ul>
</template>
