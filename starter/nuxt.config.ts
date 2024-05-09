// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  devtools: { enabled: false },

  ssr:false,
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/ui',
    'nuxt-icon',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts'
  ],

  fontMetrics: {
    fonts: ['Inter']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'Inter': [100, 300, 400],
    }
  },

  colorMode: {
    preference: 'light',
    fallback: 'light'
  },

  ui: {
    icons: ['solar'],
  },

  runtimeConfig: {

  },

  routeRules: {
    '/**': {headers: {'Access-Control-Allow-Origin': '*'}},
    '/**/**': {cors: true},
  }

})