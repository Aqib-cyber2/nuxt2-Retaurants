import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
      transpile:[
        '@fortawesome/vue-fontawesome',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-solid-svg-icons',
      ],
        postcss: {
          postcssOptions: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
          }
        },
    },

    buildModules: ['@pinia/nuxt'],

    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        '~/assets/css/tailwind.css',
        '~/assets/css/index.css',
    ],
})
