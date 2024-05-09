<script setup>
const props = defineProps({
  label: String,
  vertical: Boolean,
  value: String | Number | Boolean | Object | Array | null | undefined
})
</script>

<template>
  <div :class="{'flex-col': vertical}" class="px-0.5 py-4 gap-2 flex justify-between border-b border-b-gray-50 dark:border-b-primary-800 last-of-type:border-b-0 ">
    <div class="min-w-[150px]" v-if="props.label">
      <p class="text-xs opacity-50">{{ props.label }}</p>
    </div>
    <div class="text-sm">
      <slot/>
      <p v-if="props.value" class="text-start" dir="auto" > {{ props.value }}</p>
    </div>

  </div>
</template>

<style scoped>

</style>
