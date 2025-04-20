<script setup lang="ts">
import { ref } from 'vue'

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const { y: scroll } = useWindowScroll()
const mobileMenuOpen = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header class="header z-40">
    <!-- Mobile Header -->
    <div class="mobile-header fixed top-0 left-0 right-0 h-16 bg-white/90 dark:bg-[#050505]/90 flex items-center justify-between px-4 z-50 md:hidden">
      <!-- Logo -->
      <RouterLink to="/" class="w-30" focusable="false">
        <img src="/sign.svg" alt="Logo" class="logo-image" width="100%" height="100%" />
      </RouterLink>
      
      <!-- Controls -->
      <div class="flex items-center gap-4">
        <ToggleTheme />
        <button 
          @click="toggleMobileMenu" 
          class="p-2 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div v-if="!mobileMenuOpen" i-ri-menu-line text-xl />
          <div v-else i-ri-close-line text-xl />
        </button>
      </div>
    </div>
    
    <!-- Mobile Header Spacing - prevents content from being hidden under header -->
    <div class="h-16 md:hidden"></div>
    
    <!-- Desktop Header -->
    <div class="hidden md:block">
      <RouterLink
        class="w-40 absolute xl:fixed m-0 left-3 top-3 select-none outline-none"
        to="/"
        focusable="false"
      >
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
        <!-- Desktop Navigation -->
        <div class="right grid print:op0">
          <RouterLink to="/posts" title="Blog">
            <span>Blog</span>
          </RouterLink>
          <RouterLink to="/projects" title="Projects">
            <span>Projects</span>
          </RouterLink>
          <RouterLink to="/uses" title="Uses">
            Uses
          </RouterLink>
          <RouterLink to="/photos" title="Photos">
            <span>Photos</span>
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
          <a href="https://www.linkedin.com/in/yesbhautik/" target="_blank" title="LinkedIn">
            <div i-ri-linkedin-line />
          </a>
          <a href="https://github.com/yesbhautik" target="_blank" title="GitHub">
            <div i-uil-github-alt />
          </a>
          <a href="https://links.yesbhautik.co.in" target="_blank" title="Links">
            <div i-line-md:link />
          </a>
          <a href="/feed.xml" target="_blank" title="RSS">
            <div i-la-rss-square style="font-size:1.25rem; margin: 0 -0.125rem;" />
          </a>
          <ToggleTheme />
        </div>
      </nav>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <div 
      v-if="mobileMenuOpen" 
      class="mobile-menu fixed inset-0 backdrop-blur-md bg-white/70 dark:bg-[#050505]/70 z-40 pt-20 pb-4 px-4 flex flex-col"
    >
      <div class="mobile-menu-items flex flex-col gap-6 text-xl h-full">
        <RouterLink @click="toggleMobileMenu" to="/posts" title="Blog" class="flex justify-center">
          <span>Blog</span>
        </RouterLink>
        <RouterLink @click="toggleMobileMenu" to="/projects" title="Projects" class="flex justify-center">
          <span>Projects</span>
        </RouterLink>
        <RouterLink @click="toggleMobileMenu" to="/uses" title="Uses" class="flex justify-center">
          <span>Uses</span>
        </RouterLink>
        <RouterLink @click="toggleMobileMenu" to="/photos" title="Photos" class="flex justify-center">
          <span>Photos</span>
        </RouterLink>
        <RouterLink @click="toggleMobileMenu" to="/demos" title="Demos" class="flex justify-center">
          <span>Demos</span>
        </RouterLink>
        <RouterLink @click="toggleMobileMenu" to="/chat" title="Let's Chat" class="flex justify-center">
          <span>Let's Chat</span>
        </RouterLink>
        <RouterLink @click="toggleMobileMenu" to="/media" title="Media" class="flex justify-center">
          <span>Media</span>
        </RouterLink>
        
        <div class="external-links mt-auto border-t border-black/10 dark:border-white/10 pt-6">
          <div class="flex justify-center gap-8 mt-2">
            <a href="https://www.linkedin.com/in/yesbhautik/" target="_blank" title="LinkedIn" class="text-2xl">
              <div i-ri-linkedin-line />
            </a>
            <a href="https://github.com/yesbhautik" target="_blank" title="GitHub" class="text-2xl">
              <div i-uil-github-alt />
            </a>
            <a href="https://links.yesbhautik.co.in" target="_blank" title="Links" class="text-2xl">
              <div i-line-md:link />
            </a>
            <a href="/feed.xml" target="_blank" title="RSS" class="text-2xl">
              <div i-la-rss-square />
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll to top button (visible on all screens) -->
    <button
      title="Scroll to top"
      fixed right-3 bottom-3 w-10 h-10 hover:op100 rounded-full
      hover-bg-hex-8883 transition duration-300 z-100 print:hidden
      :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'"
      @click="toTop()"
    >
      <div i-ri-arrow-up-line />
    </button>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
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

.mobile-menu {
  animation: slideDown 0.3s ease;
  overflow-y: auto;
}

.mobile-menu-items a {
  opacity: 0.8;
  padding: 0.5rem 0;
}

.mobile-menu-items a:hover {
  opacity: 1;
}

.mobile-header {
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  background-image: radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                    radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                    radial-gradient(circle at 90% 40%, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  backdrop-filter: blur(8px);
}

.dark .mobile-header {
  background-image: radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                    radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                    radial-gradient(circle at 90% 40%, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
