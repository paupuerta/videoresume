<template>
  <div class="content">
    <splitpanes @resize="paneSize = $event[0].size" vertical>
      <pane :size="paneSize" minSize="30%" ref="panevideo">
        <div class="column-header"> Video </div>
        <div class="player-container">
          <vue3-video-player  
              @timeupdate="timeupdate" 
              @pictureinpicture="in_picture" 
              @play="play" 
              src="https://media.vued.vanthink.cn/sparkle_your_name_am720p.mp4" 
          />
        </div>
      </pane>
      <pane :size="100 - paneSize" minSize="32%">
        <div class="column-header opened"> 
          <span v-if="!viewTranscript">Curriculum Vitae</span>
          <span v-if="viewTranscript">Transcript</span>
          <input type="checkbox" v-model="viewTranscript" />
        </div>
        <Curriculo :time="timevideo" v-show="!viewTranscript" class="transcript" :class="{small: isSmall}"></Curriculo>
        <Transcript :time="timevideo" v-show="viewTranscript" class="transcript" ></Transcript>
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

import Transcript from "./Transcript.vue";
import Curriculo from "./Curriculo.vue";

export default {
  name: "Content",
  components: {
    Transcript, Curriculo, Splitpanes, Pane
  },
  data() {
    return {
      inpicture: true,
      paneSize: 50,
      oldsize: 0,
      isSmall: false,
      timevideo: 0,
      viewTranscript: false
    };
  },
  watch: {
    paneSize: function(val) {
      if (val > 50) {
       this.isSmall = true;
        //sidebar-wrapper : width 0;
      } else {
       this.isSmall = false;
      }
    }
  },
  methods: {
    play() { },
    timeupdate(timevalue) {
      // console.log(timevalue.target.currentTime)
      this.timevideo = timevalue.target.currentTime
    },
    in_picture(vari) {
      if (this.inpicture) {
        this.oldsize = this.paneSize; 
        this.paneSize = 0;
      } else {
        this.paneSize = this.oldsize;
        this.oldsize = 0;
      }
      this.inpicture = !this.inpicture;
      console.log("cotentn in picture " + vari)
    }
  },
};
</script>

<style scoped>
@import '../assets/styles/variables.css';

.content{
  display: flex;
}
.transcript {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 60%;
  overflow: auto;
}

.player-container {
  width: fit-content;
  height: fit-content;
  justify-self: center;
  align-self: center;
}

.column-header {
    font-family: var(--font-family);
    background-color: var(--content-column-title-section);
    color: var(--content-column-title-section-text);
    height: 40px;
    min-height: 40px;
    display: flex;
    position: relative;
    padding: 0px;
    justify-content: center;
    align-items: center;
}

.content >>> .splitpanes {
  background-color: var(--content-background-color);
}
.content >>> .splitpanes__pane {
  display: flex;
  flex-direction: column;
}
.content >>> .splitpanes__splitter {
  /* background-color: #ccc; */
  background-color: var(--border-color-pane);
  position: relative;
}
.content >>> .splitpanes__splitter:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: 0.4s;
}
.content >>> .splitpanes--vertical > .splitpanes__splitter:before {
  left: -30px;
  right: -30px;
  z-index: 1;
}
.content >>> .splitpanes--horizontal > .splitpanes__splitter:before {
  top: -30px;
  bottom: -30px;
}
</style>