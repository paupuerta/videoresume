import { createApp } from 'vue'
import App from './App.vue'
import Vue3VideoPlayer from './components/vue3-video-player'
// import '@paupuerta/vue3-video-player/dist/vue3-video-player.css'
import es from './plugins/vueVideoPlayerConfig'
import { FontAwesomeIcon } from "./plugins/font-awesome.ts";

const app = createApp(App)

app.use(Vue3VideoPlayer, {
  lang: es
})
.component("fa", FontAwesomeIcon)
.mount('#app')