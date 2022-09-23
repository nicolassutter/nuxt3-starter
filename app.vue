<script setup lang="ts">
import '~/assets/main.scss'

useHead({
  title: 'Nuxt Starter',
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<template>
  <div
    id="app"
    class="app"
  >
    <NuxtPage></NuxtPage>
  </div>
</template>
