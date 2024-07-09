<!-- Working with Reactive functions let you store primitive data types, no strings, no numbers, no boolean etcs -->

<script setup>
import { reactive } from 'vue'
let initialState = reactive({ count: 0 })

let anotherIntialState = reactive({ val: { count: 0 }, users: ['Mar', 'Chris'] })

function onSumCLick() {
  initialState.count++
}

function onSubsClick() {
  initialState.count--
}

function add10Handler() {
  anotherIntialState.val.count += 10
}

function changeUserHandler() {
  anotherIntialState.users[0] = 'Ricardo'
  anotherIntialState.users[1] = 'Marcela'
}

function addUserHandler() {
  anotherIntialState.users.push('Valentina')
}
</script>

<template>
  <h1>Count: {{ initialState.count }}</h1>
  <button @click="onSumCLick">+</button>
  <button @click="onSubsClick">-</button>

  <h1>Current Count: {{ anotherIntialState.val.count }}</h1>
  <h2>Users: {{ anotherIntialState.users }}</h2>

  <button @click="add10Handler">Add 10</button>

  <button @click="changeUserHandler">Change User</button>

  <button @click="addUserHandler">add one more user</button>
</template>
