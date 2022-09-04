import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
    css: [
      '@fortawesome/fontawesome-svg-core/styles.css',
      "~/assets/css/tailwind.css",
      '~/assets/css/index.css',
    ]
})
