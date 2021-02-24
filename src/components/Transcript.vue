<template>
  <div class="transcript">
    <div id="cueParagraph0" class="paragraphSpan" data-starttime="0.33" data-endtime="16.43" style="margin: 20px 0px 30px" >
      <div class="mainCueContainer">
        <div class="textSpan" data-starttime="0" data-endtime="2.189">
          <span id="this0_finalSpan" data-paragraphindex="0" class="finalSpan">Welcome to <i>Rust in Motion 1</i>, </span>
        </div>
      </div>
      <div class="mainCueContainer">
        <div class="textSpan" data-starttime="2.19" data-endtime="3.83">
          <span id="this1_finalSpan" data-paragraphindex="0" class="finalSpan"><i>Getting Comfortable with Rust</i>. </span>
        </div>
      </div>
      <div class="mainCueContainer">
        <div class="textSpan" data-starttime="5.87" data-endtime="7.909">
          <span id="this2_finalSpan" data-paragraphindex="0" class="finalSpan">Rust is an exciting new language aiming </span>
        </div>
      </div>
      <div class="mainCueContainer">
        <div class="textSpan" data-starttime="7.91" data-endtime="9.589">
          <span id="this3_finalSpan" data-paragraphindex="0" class="finalSpan" >to be an alternative to C </span>
        </div>
      </div>
      <div class="mainCueContainer">
        <div class="textSpan" data-starttime="9.59" data-endtime="10.75">
          <span id="this4_finalSpan" data-paragraphindex="0" class="finalSpan" >and C++, </span>
        </div>
      </div>
      <div class="mainCueContainer">
        <div class="textSpan" data-starttime="11.03" data-endtime="13.009">
          <span id="this5_finalSpan" data-paragraphindex="0" class="finalSpan" >with the same performance characteristics of those </span>
        </div>
      </div>
      <div class="mainCueContainer">
        <div class="textSpan" data-starttime="13.01" data-endtime="13.9">
          <span id="this6_finalSpan" data-paragraphindex="0" class="finalSpan" >languages, </span>
        </div>
      </div>
      <div class="mainCueContainer">
        <div class="textSpan" data-starttime="14.12" data-endtime="16.3">
          <span id="this7_finalSpan" data-paragraphindex="0" class="finalSpan" >but with certain classes of common bugs </span>
        </div>
      </div>
      <div class="mainCueContainer">
        <div class="textSpan" data-starttime="16.43" data-endtime="18.22">
          <span id="this8_finalSpan" data-paragraphindex="0" class="finalSpan" >eliminated at compile time.</span >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import { EVENTS } from "./vue3-video-player";

let _ee = null;

export default {
  name: "Transcript",
  components: {},
  setup() {
    _ee = inject("ee");
    const playerKey = inject("playerKey");
    console.log("transcript" + playerKey);
    return {
      playerKey,
    };
  },
  data() {
    return {
      progress: 0.0,
      bufferProgress: 0.0,
      previewProgress: 0.0,
      previewTime: "",
      fullscreen: false,
      isPlaying: false,
      isError: false,
      events: {},
      player: { play: {} },
      spanElement: { ele: {}, ini: 0.0, fin: 0.0 },
      spans:[]
    };
  },
  mounted() {
      //textSpan
      const ranges = this.$el.querySelectorAll(".textSpan");
      for(var i = 0; i < ranges.length; i++){
          let spanEle = { ...this.spanElement }
          spanEle.ele = ranges[i]
          spanEle.ini = ranges[i].dataset.starttime
          spanEle.fin = ranges[i].dataset.endtime
          this.spans.push(spanEle)
          let _play = this.player
          ranges[i].addEventListener('click', function(){
            _play.play.seek(this.dataset.starttime)
          });
      }
      console.log(this.spans);
  },
  beforeMount() {
    this.on(EVENTS.LIFECYCLE_INITING, this.init());
    this.on(EVENTS.TIMEUPDATE, this.timeupdate());
    this.on(EVENTS.IN_PICTURE, this.inPicture());

    this.on(EVENTS.PROGRESS, () => {
      const bufferTime = this.$player.getBufferTime();
      const duration = this.$player.getDuration();
      if (bufferTime > 0 && duration > 0) {
        this.bufferProgress = ((bufferTime / duration) * 100).toFixed(2);
      }
    });
    this.on(EVENTS.LOADSTART, () => {
      const bufferTime = this.$player.getBufferTime();
      const duration = this.$player.getDuration();
      this.bufferProgress = ((bufferTime / duration) * 100).toFixed(2);
    });
  },
  methods: {
    init() {
      let _play = this.player;
      return (player) => {
        console.log(player);
        _play.play = player;
        this.$player = player;
        this.$container = this.$player.$el;
      }
    }, 
    inPicture(value) {
      return () => {
        console.log("In picture Event " + value);
      }
    }, 
    timeupdate() {
      let _spans = this.spans
      let _ele = null
      return () => {
        const currentTime = this.$player.getCurrentTime()
        if (!currentTime) {
          return
        }
      
        let el = _spans.find((s) => { 
          return parseFloat(s.ini) <= parseFloat(currentTime) && parseFloat(s.fin) >= parseFloat(currentTime) 
        })
        console.log(el);
        if (el != undefined && _ele != el.ele)
        {
          if (_ele != null) {
            _ele.classList.remove('currentTextClass')
          }
          el.ele.classList.add('currentTextClass')
          _ele = el.ele
        }
      }
    },
    on(event, callback) {
      let eventId;
      if (typeof event === "string") {
        if (this.isGlobalEvent(event)) {
          eventId = event;
        } else {
          eventId = this.eventID(event);
        }
        this.events[eventId] = callback;
        _ee.on(eventId, callback);
      } else if (Array.isArray(event)) {
        event.forEach((item) => {
          if (this.isGlobalEvent(item)) {
            eventId = event;
          } else {
            eventId = this.eventID(item);
          }
          this.events[eventId] = callback;
          _ee.on(eventId, callback);
        });
      }
    },
    emit(event, res) {
      let eventId;
      if (this.isGlobalEvent(event)) {
        eventId = event;
      } else {
        eventId = this.eventID(event);
      }
      _ee.emit(eventId, res);
    },
    off(event, callback) {
      let eventId;
      if (this.isGlobalEvent(event)) {
        eventId = event;
      } else {
        eventId = this.eventID(event);
      }
      _ee.off(eventId, callback);
    },
    removeAllEvents() {
      for (const item in this.events) {
        _ee.off(item, this.events[item]);
      }
    },
    addClass(cls) {
      this.$container.classList.add(cls);
    },
    removeClass(cls) {
      this.$container.classList.remove(cls);
    },
    eventID(event) {
      console.log(`${event}-${this.playerKey}`);
      return `${event}-${this.playerKey}`;
    },
    isGlobalEvent(event) {
      return !!event.match(/global-.*/);
    },
  },
  beforeUnmount() {
    this.removeAllEvents();
  },
};
</script>


<style scoped>
  @import '../assets/styles/variables.css';

  .transcript {
    position: relative;
    width: 100%;
    margin: 0px;
    padding-left: 30px;
    padding-right: 30px;
    text-align: left;
  }

  .mainCueContainer{
    display: inline-block;
  }
  .currentTextClass:not(.disabledHighlighting) > span {
    background-color: var(--transcript-selected-text);
    transition: all 1s;
  }

  .textSpan > span {
    background-color: var(--content-background-color);
    transition: all 1.5s;
  }
</style>