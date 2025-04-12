<script setup lang="ts">
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const { y: scroll } = useWindowScroll()
</script>

<template>
  <header class="header z-40">
    <RouterLink
      class="w-40 absolute xl:fixed m-0 left-3 top-3 select-none outline-none lt-md:hidden"
      to="/"
      focusable="false"
    >
    <!-- <Logo /> -->
    <img src="/sign.svg" alt="Logo" class="logo-image" width="100%" height="100%" />
    </RouterLink>
    <button
      title="Scroll to top"
      fixed right-3 bottom-3 w-10 h-10 hover:op100 rounded-full
      hover-bg-hex-8883 transition duration-300 z-100 print:hidden
      :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'"
      @click="toTop()"
    >
      <div i-ri-arrow-up-line />
    </button>
    <nav class="nav">
      <div class="spacer" />
      <div class="right" print:op0>
        <RouterLink to="/posts" title="Blog">
          <span class="lt-md:hidden">Blog</span>
          <div i-ri-article-line md:hidden />
        </RouterLink>
        <RouterLink to="/projects" title="Projects">
          <span class="lt-md:hidden">Projects</span>
          <div i-ri-lightbulb-line class="md:hidden" />
        </RouterLink>
        <RouterLink to="/uses" class="lt-md:hidden" title="Uses">
          Uses
        </RouterLink>
        <RouterLink to="/photos" title="Photos">
          <span class="lt-md:hidden">Photos</span>
          <div i-ri-camera-3-line class="md:hidden" />
        </RouterLink>
        <RouterLink to="/demos" title="Demos">
          <div i-ri-screenshot-line />
        </RouterLink>
        <RouterLink to="/chat" title="Let's Chat">
          <div i-ri-chat-1-line />
        </RouterLink>
        <RouterLink to="/media" title="Media">
          <div i-bx:camera-movie />
        </RouterLink>
        <a href="https://www.linkedin.com/in/yesbhautik/" target="_blank" title="LinkedIn" class="lt-md:hidden">
          <div i-ri-linkedin-line />
        </a>
        <a href="https://github.com/yesbhautik" target="_blank" title="GitHub" class="lt-md:hidden">
          <div i-uil-github-alt />
        </a>
        <a href="https://links.yesbhautik.co.in" target="_blank" title="Links" class="lt-md:hidden">
          <div i-line-md:link />
        </a>
        <a href="/feed.xml" target="_blank" title="RSS" class="lt-md:hidden">
          <div i-la-rss-square style="font-size:1.25rem; margin: 0 -0.125rem;" />
        </a>
        <ToggleTheme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.logo-image {
  width: 100%;
  height: 100%;
  transform: rotate(-2deg);
  padding: 0.5rem;
}

html:not(.dark) .logo-image {
  filter: invert(1);
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
