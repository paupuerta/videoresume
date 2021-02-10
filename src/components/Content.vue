<template>
  <div class="content">
    <div class="player-container">
      <vue3-video-player
        src="https://media.vued.vanthink.cn/sparkle_your_name_am720p.mp4"
      />
    </div>

    <div class="handle" style="cursor: ew-resize; z-index: 13">
      <div class="icon-divider icon-divider-livevideo" id="icon-divider"></div>
    </div>

    <Transcript class="transcript"></Transcript>
  </div>
</template>

<script>
import Transcript from "./Transcript.vue";

export default {
  name: "Content",
  components: {
    Transcript,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.content{
  display: flex;
}
.transcript {
  flex: 0.519833 1 0%;
}

.player-container {
  flex: 0.480167 1 0%;
}
.icon-divider {
    background: url(/assets/iconDivider.png) 0 0;
    background-size: 100% 100%;
}
.icon-divider {
    position: relative;
    width: 27.5px;
    height: 19px;
    top: 9px;
    left: -13px;
    transition: all 1s;
}
</style>
