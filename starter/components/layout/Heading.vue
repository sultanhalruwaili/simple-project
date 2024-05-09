<script setup lang="ts">
const props = defineProps({
  is: {
    type: String,
    default: 'h1'
  },
  sub: {
    type: String
  },
  total: {
    type: Number
  }
})

const style = computed(() => {
  return {
    'text-3xl': props.is === 'h1',
    'text-2xl': props.is === 'h2',
    'text-xl': props.is === 'h3',
    'text-lg': props.is === 'h4',
    'text-base': props.is === 'h5',
    'text-sm': props.is === 'h6'
  }
})

</script>

<template>
  <div class="tracking-tight ">
    <component :is="is" :class="style" class="flex capitalize items-center gap-2">
      <slot /> <u-badge v-if="total" color="white" variant="solid">{{ total }}</u-badge>
    </component>
    <p v-if="sub" class="text-xs dark:text-white opacity-40 py-1">
      {{ sub }}
    </p>
  </div>
</template>

<style scoped>

</style>
