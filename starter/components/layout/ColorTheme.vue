<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
   <u-button class="fixed bottom-10 right-10 transition rounded-full h-12 w-12 z-50" color="black" @click.prevent="isDark = !isDark">
    <icon class="w-8 h-8" :name="isDark ? 'meteocons:clear-day-fill' : 'meteocons:starry-night-fill'" />
  </u-button>
</template>
