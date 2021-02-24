<template>
  <div class="index" :class="{close: isClose}">
      <div class="index-column-header"> 
        <span class="text" :class="{hide: isClose}" > Index </span>
        <span class="button" :class="{close: isClose}" @click="openCloseNav">&#9776;</span>
      </div>
      <ul :class="{hide: isClose}">
        <li> <span>1. </span> </li>
        <li> <span>2. </span> </li>
        <li> <span>3. </span> </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {
  },
  data() {
    return {
      isClose: false
    }
  },
  methods: {
    openCloseNav: function() {
      this.isClose = !this.isClose
    }
  },
}
</script>

<style scoped>
  @import '../assets/styles/variables.css';

  .index {
    display:flex;
    flex-direction: column;
    width: 14vw;
    max-width: 16em;
    min-width: 8em;
    transition: all 1s;
    font-family: var(--font-family);
    background: var(--background-color);
    color: var(--primary-color);
    border-right: 1px solid var(--border-color);
  }
  .index.close {
    width: 2em;
    min-width: 2em;
  }

  .index-column-header {
    display:flex;
    flex-direction: row;
  }
  .text {
    align-self: center;
    flex: auto;
    text-align: center;
  }

  .hide,
  .text.hide {
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }
  
  .button {
    font-size:30px;
    cursor:pointer;
    transition: all 1s;
  }
  .button.close {
    transform-origin: center;
    transform: translateX(-34px) rotate(90deg); 
  }
</style>
