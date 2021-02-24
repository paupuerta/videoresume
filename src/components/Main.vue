<template>
  <div class="main">
    <Head></Head>
    <Index></Index>
    <Content></Content>
    <Foot></Foot>
  </div>
</template>

<script>
import { provide } from 'vue'
import Head from './Head.vue'
import Index from './Index.vue'
import Content from './Content.vue'
import Foot from './Foot.vue'

import ee from 'event-emitter'

function guid () {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}

export default {
  name: 'Main',
  components: {
    Head,
    Index,
    Content,
    Foot
  },
  setup () {
    provide('ee', ee())
    const playerKey = 'key-' + guid()
    provide('playerKey', playerKey)
    return {
      playerKey
    }
  },
}
</script>

<style scoped>
/* https://stackoverflow.com/questions/54390359/how-to-keep-css-grid-layout-the-same-on-resize */
.main {
  display:grid;
  grid-template-areas:
    "header  header  header"
		"sidebar content content"
		"footer  footer  footer";
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: 7% 88% 5%;
  
  height: 100%;
}

.head {
  grid-area: header;
}
.foot {
  grid-area: footer;
}
.index {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
</style>
