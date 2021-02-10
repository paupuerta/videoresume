import { createApp } from 'vue'
import App from './App.vue'
//import Vue3VideoPlayer from '@paupuerta/vue3-video-player'
//import '@paupuerta/vue3-video-player/dist/vue3-video-player.css'
import Vue3VideoPlayer from './components/vue3-video-player'
// import '@paupuerta/vue3-video-player/dist/vue3-video-player.css'
import es from './assets/vueVideoPlayerConfig'

const app = createApp(App)

app.use(Vue3VideoPlayer, {
  lang: es
}).mount('#app')