<script setup lang="ts">
defineComponent({
  name: 'CounterComponent'
})

const props = defineProps({
  defaultCount: {
    type: Number,
    default: 0
  }
})

const count = ref(props.defaultCount)

const increment = () => {
  count.value++
}
</script>

<template>
  <button v-on:click="increment">
    {{ count }}
  </button>
</template>
