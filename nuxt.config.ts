import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          // tailwindcss: {},
          'tailwindcss/nesting': {},
          autoprefixer: {},
        },
      },
    },
  },
  css: [
    '@/assets/css/index.scss',
  ],
})
