import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ssr-carousel ', SsrCarousel)
})