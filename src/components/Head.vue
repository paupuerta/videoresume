<template>
  <div class="head" toggleable="lg" type="dark" variant="info">
    <ul class="livevideo-header-nav">

      <li class="livevideo-header-nav-left">
        <img class="avatar" src="https://s.gravatar.com/avatar/8ea7628f5c90398b0073b3d32813e5d7?s=40" alt="" />
      </li>

      <li class="livevideo-header-nav-left">
        <h2 class="name">Pau Puerta Carmona</h2>
      </li>

      <li class="livevideo-header-nav-right">
        <a href="mailto:paupuerta@gmail.com">
          <fa type="fas" icon="envelope" class="icon inline" />
          <span class="textsocial">paupuerta@gmail.com</span>
        </a>
      </li>
      <li class="livevideo-header-nav-right"><div class="livevideo-header-nav-line"></div></li>
      <li class="livevideo-header-nav-right">
        <a href="http://paupuerta.github.io" target="_blank">
        <fa type="fas" icon="globe" class="icon inline" />
        <span class="textsocial">paupuerta.github.io</span>
        </a>
      </li>
      <li class="livevideo-header-nav-right"><div class="livevideo-header-nav-line"></div></li>
      <li class="livevideo-header-nav-right">
        <a href="https://www.linkedin.com/in/paupuerta" target="_blank">
        <fa type="fab" icon="linkedin" class="icon inline" />
        <span class="textsocial">linkedin.com/in/paupuerta</span>
        </a>
      </li>
      <li class="livevideo-header-nav-right"><div class="livevideo-header-nav-line"></div></li>
      <li class="livevideo-header-nav-right">
        <a href="https://github.com/paupuerta" target="_blank">
        <fa type="fab" icon="github" class="icon inline" />
        <span class="textsocial">github.com/paupuerta</span>
        </a>
      </li>
      <li class="livevideo-header-nav-right"><div class="livevideo-header-nav-line"></div></li>
      <li class="livevideo-header-nav-right">
        <a href="https://twitter.com/_paupuerta_" target="_blank">
        <fa type="fab" icon="twitter" class="icon inline" />
        <span class="textsocial">@_paupuerta_</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Head'
}
</script>

<style scoped>
  @import '../assets/styles/variables.css';

  .head {
    background-color: var(--head-background-color);
    color: var(--head-color);
    font-family: var(--font-family);
  }

  .profile {
    display: flex;
  }
  .avatar {
    border-radius: 25%;
    width: auto;
    height: 100%;
  }

  .livevideo-header-nav {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0;
    height: 3.5vw;
    margin: 0;
    width: 100%;
  }

  .livevideo-header-nav-left, .livevideo-header-nav-right {
    display: flex;
    align-items: center;
    padding: 0px;
  }
  .livevideo-header-nav-left {
    padding-left: 1em;
  }

  .livevideo-header-nav-right {
    order: 1;
  }

  .livevideo-header-nav::after {
    content: 'Video CV';
    flex-grow: 1;
    order: 0;
    text-align: center;
    font-size: 2.5em;
  }

  .icon {
    height: 1em;
    width: 1em;
  }
  .icon.inline {
    vertical-align: middle;
  }

  a:link, a:visited {
    border: none;
    color: var(--head-link-color);
    padding: 1vw;
    text-align: right;
    transition-duration: 0.4s;
    text-decoration: none;
    font-size: 1em;
    cursor: pointer;
    display: inline-block;
    position: relative; 
  }

  .theme-liveVideoDefault .livevideo-header-nav-line {
    display: block;
  }
  .livevideo-header-nav-line {
    position: relative;
    width: 1px;
    height: 10px;
    background-color: var(--separator-color);
  }

  .textsocial {
    display: inline-block;
    opacity: 0;
    width: 0;
    transform: scale(0);
  }

  .parent > .textsocial {
    position: absolute;
  }
  .livevideo-header-nav-right:hover .textsocial {
    display: block;

    transition: all 1s;
    opacity: 1;
    width: auto;
    transform: scale(1);
    position: absolute;
    right: 0;
    padding-top: 5px;
  }

</style>

