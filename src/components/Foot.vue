<template>
  <div class="foot">
    <span id="footer-center" class="module-footer-center"> &copy; Copyright 2021 Pau Puerta </span>
  </div>
</template>

<script>
export default {
  name: "Foot",
};
</script>

<style scoped>
@import '../assets/styles/variables.css';

.foot {
  background-color: var(--footer-background-color);
  color: var(--footer-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}


</style>