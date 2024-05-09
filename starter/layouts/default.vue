<template>
  <Html class="h-full font-inter">
  <div class="h-screen overflow-hidden text-gray-900 bg-primary-800 dark:text-primary-100">
     <div class="flex h-[calc(100svh)]">

      <div class="content flex-1 overflow-y-auto bg-white relative dark:bg-primary-950 mt-4 mb-4 mr-4 rounded-3xl">

         <u-container class="py-8 relative">
     
          <slot />
        </u-container>
      </div>

    </div>
  </div>
  </Html>
</template>

<script setup>



</script>

<style scoped>

</style>
