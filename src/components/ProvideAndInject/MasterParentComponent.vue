<script setup>
import SchoolComponent from '@/components/ProvideAndInject/SchoolComponent.vue'
import PracticeComponent from '@/components/ProvideAndInject/PracticeComponent.vue'
import { provide } from 'vue'

const studentName = 'Christian David'
const studentAge = '33'
const studentLocation = ['Berlin', 'Barcelona']

provide('personInloved', 'Mar')
provide('inlovedAge', 30)
provide('inlovedLocation', 'Berlin')

// Provide Array
provide('friends', ['Laila', 'Jessy', 'Maria', 'Denes'])

// Provide Object

provide('games', {
  id: 1,
  title: 'Epic Adventure Game',
  genre: ['Action', 'Adventure', 'RPG'],
  platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
  releaseDate: '2022-03-15',
  developer: {
    name: 'Awesome Game Studios',
    location: 'San Francisco, CA',
    teamSize: 50
  }
})

// Using Provide With Array Of Objects
provide('moreGames', [
  {
    title: 'Space Explorer',
    genre: 'Sci-Fi',
    platform: 'PC',
    releaseDate: '2023-05-20'
  },
  {
    title: 'Fantasy Quest',
    genre: 'Fantasy',
    platform: 'PlayStation',
    releaseDate: '2023-07-10'
  },
  {
    title: 'Inception',
    director: 'Christopher Nolan',
    genre: 'Sci-Fi',
    releaseDate: '2010-07-16'
  },
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    genre: 'Drama',
    releaseDate: '1994-09-23'
  }
])
</script>

<template>
  <SchoolComponent
    :studentName="studentName"
    :studentAge="studentAge"
    :studentLocation="studentLocation"
  />

  <PracticeComponent />
</template>
