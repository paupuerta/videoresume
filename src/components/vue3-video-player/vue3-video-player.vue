<template>
  <div class="vcp-container" ref="vcp-el">
    <video
      ref="vcp-video"
      :title="title"
      :cover="cover"
      :loop="loop"
      :playsinline="playsinline"
      :src="source"></video>
    <Layers v-bind="$attrs" />
    <Dashboard v-if="!isMobile" :controls="controls" :muted="muted" />
    <MobileDashboard v-if="isMobile" :controls="controls" :muted="muted" />
  </div>
</template>

<script>
import './style/common.less'

// import { provide } from 'vue'
import { inject } from 'vue'
import { EVENTS, DEFAULT_CONFIG } from './constants'
import { parseMediaList } from './helper/media'
import { initVideoCore } from './core'
import coreMixins from './mixins'
// import { isMobile, toCamelCase, guid } from './helper/util.js'
import { isMobile, toCamelCase } from './helper/util.js'
import Dashboard from './dashboard/dashboard.vue'
import MobileDashboard from './dashboard/mobile-dashboard.vue'
import Layers from './layers/layers.vue'

export default {
  name: 'Vue3VideoPlayer',
  inheritAttrs: false,
  mixins: [coreMixins],
  components: {
    Dashboard,
    MobileDashboard,
    Layers
  },
  props: {
    src: [String, Array],
    autoplay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    playsinline: {
      type: Boolean,
      default: true
    },
    title: String,
    cover: String,
    logo: String,
    muted: {
      type: Boolean,
      default: false
    },
    controls: {
      type: [String, Boolean],
      default: true
    },
    lang: {
      type: [String, Object],
      default: 'en'
    },
    core: {
      type: Function
    },
    viewCore: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const playerKey = inject('playerKey')
    console.log("video-player" + playerKey)
    return {
      playerKey
    }
/*
  setup (props) {
    const playerKey = 'key-' + guid()
    provide('playerKey', playerKey)

    return {
      playerKey
    }
    */
  },
  data () {
    return {
      isMobile: isMobile,
      player: null
    }
  },

  computed: {
    source: function () {
      const { src } = this
      if (!src) {
        return ''
      }
      const resolution = DEFAULT_CONFIG.resolution
      const medias = parseMediaList(src)
      let url
      medias.forEach((media) => {
        if (media.resolution === resolution) {
          url = media.src
        }
      })
      if (!url) {
        if (typeof medias[0] === 'object' && medias[0].src) {
          url = medias[0].src
        } else if (typeof medias[0] === 'string') {
          url = medias[0]
        }
      }
      if (this.player) {
        this.player.setSource(src)
      }
      return url
    }
  },
  created () {
    this._playerKey = this.playerKey
    this.on(EVENTS.GLOBAL_AUTO_PLAY, (status) => {
      this.player.setConfig('autoplay', status)
    })
  },
  mounted () {
    // const self = this
    this.player = this.videoCore = initVideoCore({
      ...this.$props,
      videoEl: this.$refs['vcp-video'],
      el: this.$refs['vcp-el'],
      eventEmitter: {
        on: this.on,
        emit: this.emit,
        off: this.off
      }
    })
    Object.values(EVENTS).forEach(item => {
      this.player.on(item, (e) => {
        const cc = toCamelCase(`on-${item}`)
        if (typeof this.$attrs[cc] === 'function') {
          this.$attrs[cc](e)
        }
      })
    })
    this._coreID = this.videoCore.id
    this.emit(EVENTS.LIFECYCLE_INITING, this.player)
    const _this = this
    this.player.$video.addEventListener("leavepictureinpicture", (_event) => {
      console.log('leave')
      _this.emit(EVENTS.IN_PICTURE, 'OUT')
    });
    this.player.$video.addEventListener("enterpictureinpicture", (_event) => {
      console.log('enterpicture')
      _this.emit(EVENTS.IN_PICTURE, 'IN')
    });
    try {
      this.viewCore.map(item => {
        if (typeof item === 'function') {
          item(this.player, this.player.config)
        }
      })
    } catch (err) {
      console.error(err)
    }
  },
  beforeUnmount () {
    this.player.destroy()
  }

}
</script>

<style lang="less">

.vcp-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #000;
}
.vcp-container  video{
  display: block;
  background-color: #000;
  // vertical-align: middle;
  width: 100%;
  height: 100%;
}
</style>
