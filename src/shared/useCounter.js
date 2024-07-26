import { ref } from 'vue'

//CounterComposable

export function useCounter(initalValue = 0) {
  const count = ref(initalValue)
  const increment = () => count.value++
  const decrement = () => count.value--

  return { count, increment, decrement }
}
