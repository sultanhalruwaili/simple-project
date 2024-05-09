<script setup>
import {useMainStore} from "~/store";
const store = useMainStore()
const config = useRuntimeConfig()

const navigation = ref([
  {
    id: 1,
    name: 'Dashboard',
    icon: 'solar:home-2-outline',
    link: '/',
    external: false
  }, {
    id: 2,
    name: 'Applications',
    icon: 'solar:programming-outline',
    link: '/applications',
    external: false
  },

  {
    id: 3,
    name: 'Pipelines',
    icon: 'solar:rocket-outline',
    link: '/pipelines',
    external: false
  },

  {
    id: 4,
    name: 'Templates',
    icon: 'solar:file-favourite-outline',
    link: '/templates',
    external: false
  }
  , {
    id: 5,
    name: 'Logs',
    icon: 'solar:calendar-outline',
    link: '/applogs',
    external: false
  }
  , {
    id: 6,
    name: 'Status',
    icon: 'solar:graph-linear',
    link: '/status',
    external: false
  }
])

const activeMenu = computed(() => store.activeMenu)

const navigateToLink = (id) => {
  store.setActiveMenu(id)
}

</script>

<template>
  <div class="nav m-3 rounded-xl flex flex-col justify-between w-16 ">
   <app-logo />
    <div class="flex-1 h-full scroll-smooth overflow-auto">

      <u-popover class="mb-3" v-for="nav in navigation" mode="hover" :popper="{ placement: 'right' }">
        <nuxt-link
            :to="nav.link"
            @click="navigateToLink(nav.id)"
            :target="nav.external? '_blank': '' "
            class="transition text-white ease-in-out mx-auto flex items-center justify-center p-2 w-12 h-12 rounded"
            :class="{ 'text-white bg-white/10 ': activeMenu === nav.id  }">
          <icon :name="nav.icon" class="w-6 h-6" /></nuxt-link>
        <template #panel>
          <div class="text-xs text-white bg-gray-900 p-2">{{ (nav.name) }}</div>
        </template>
      </u-popover>
      <nuxt-link to="http://docs.kernel.dmmil.net/docs" target="_blank" external class="transition text-white ease-in-out mx-auto flex items-center justify-center p-2 w-12 h-12 rounded">
        <icon name="solar:question-square-outline" class="w-6 h-6" /></nuxt-link>

    </div>
    <div class="mx-auto p-4">
      <u-avatar alt="Ahmed Amin" size="md" />
    </div>

  </div>
</template>

<style scoped>

</style>
