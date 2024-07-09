<script setup>
import { ref } from 'vue'
let peoples = ref(['Alex', 'John', 'Mar'])

const books = ref([
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    publicationYear: 1960
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    publicationYear: 1949
  },
  {
    id: 3,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    publicationYear: 1925
  },
  {
    id: 4,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Coming-of-age',
    publicationYear: 1951
  },
  {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    publicationYear: 1997
  }
])

const movies = ref([
  [
    'The Shawshank Redemption',
    'The Godfather',
    'The Dark Knight',
    "Schindler's List",
    'The Green Mile'
  ],
  ['Pulp Fiction', 'Fight Club', 'Forrest Gump', 'The Silence of the Lambs', 'The Usual Suspects'],
  [
    'Inception',
    'The Matrix',
    'Interstellar',
    'Blade Runner',
    'Eternal Sunshine of the Spotless Mind'
  ],
  ['The Lord of the Rings', 'Star Wars', 'Harry Potter', 'The Hobbit', 'Jurassic Park'],
  ['Titanic', 'Avatar', 'The Terminator', 'The Sixth Sense', 'Gladiator']
])

const games = ref({
  id: 1,
  title: 'Epic Adventure Game',
  genre: ['Action', 'Adventure', 'RPG'],
  platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
  releaseDate: '2022-03-15',
  developer: {
    name: 'Awesome Game Studios',
    location: 'San Francisco, CA',
    teamSize: 50
  },
  ratings: {
    metacritic: 90,
    user: 4.8
  },
  features: {
    singlePlayer: true,
    multiplayer: true,
    onlineCoop: true,
    splitScreen: false
  },
  systemRequirements: {
    minimum: {
      os: 'Windows 10',
      processor: 'Intel Core i5',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 970',
      storage: '50 GB available space'
    },
    recommended: {
      os: 'Windows 11',
      processor: 'Intel Core i7',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 3080',
      storage: '100 GB available space'
    }
  },
  storyline: 'Embark on a thrilling adventure to save the world from impending doom!',
  characters: ['Hero', 'Sidekick', 'Villain', 'NPCs'],
  achievements: [
    { id: 1, name: 'Master Explorer', description: 'Explore every corner of the game world' },
    { id: 2, name: 'Legendary Warrior', description: 'Complete the game on the hardest difficulty' }
  ]
})

const complexGamesObj = ref({
  game1: {
    title: 'Space Explorer',
    genre: 'Sci-Fi',
    platform: 'PC',
    releaseDate: '2023-05-20'
  },
  game2: {
    title: 'Fantasy Quest',
    genre: 'Fantasy',
    platform: 'PlayStation',
    releaseDate: '2023-07-10'
  },
  movie1: {
    title: 'Inception',
    director: 'Christopher Nolan',
    genre: 'Sci-Fi',
    releaseDate: '2010-07-16'
  },
  movie2: {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    genre: 'Drama',
    releaseDate: '1994-09-23'
  },
  book1: {
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    publicationYear: 1965
  },
  book2: {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    publicationYear: 1960
  }
})
</script>

<template>
  <p v-for="(p, index) in peoples" :key="index">{{ p }}</p>
  <div>
    <p
      v-for="(books, index) in books"
      :key="index"
      style="color: blue; background-color: antiquewhite"
    >
      {{ books }}
    </p>
  </div>

  <div>
    <ul v-for="({ id, title, author, genre, publicationYear }, index) in books" :key="index">
      <li>{{ id }}</li>
      <li>{{ title }}</li>
      <li>{{ author }}</li>
      <li>{{ genre }}</li>
      <li>{{ publicationYear }}</li>
    </ul>
  </div>

  <div>
    <!-- Nested for loop -->
    <ul v-for="(movie, i) in movies" :key="i">
      <li v-for="(m, index) in movie" :key="index">{{ m }}</li>
    </ul>
  </div>

  <div>
    <!-- objects inside of objects -->
    <ul v-for="(value, keys, index) in games" :key="index">
      <li>{{ index }}</li>
      <li>{{ keys }}</li>
      <li>{{ value }}</li>
    </ul>
  </div>

  <div>
    <ul v-for="(game, index) in complexGamesObj" :key="index">
      <!-- Getting all the objects -->
      <li>{{ game }}</li>
      <br />

      <!-- Getting single value from Object  -->
      <li v-for="(property, i) in game" :key="i">{{ property }}</li>
    </ul>
  </div>

  <div>
    <ul v-for="(number, index) in 5" :key="index">
      {{
        number
      }}
    </ul>
  </div>
</template>
