<template>
  <Main/>
</template>

<script>
import Main from './components/Main'

export default {
  name: 'App',
  components: {
    Main 
  }
}
</script>

<style>
/* override browser default */
html,
body {
  margin: 0;
  padding: 0;
}

/* use viewport-relative units to cover page fully */
body {
  height: 100vh;
  width: 100vw;
}

/* include border and padding in element width and height */
* {
  box-sizing: border-box;
}

#app {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
