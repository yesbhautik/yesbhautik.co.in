<script setup>
import YesbhautikLogo from '../components/YesbhautikLogo.vue'
</script>

<template>
  <div class="container">
    <h1>Logo Example</h1>
    <div class="logo-container">
      <YesbhautikLogo />
    </div>
    <div class="instructions">
      <h2>How to Use This Logo</h2>
      <p>
        1. Import the component: <code>import YesbhautikLogo from './components/YesbhautikLogo.vue'</code>
      </p>
      <p>
        2. Use it in your template: <code>&lt;YesbhautikLogo /&gt;</code>
      </p>
      <p>
        3. You can customize it by editing the paths in <code>YesbhautikLogo.vue</code>
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.logo-container {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  border: 1px solid #eee;
  border-radius: 8px;
}

.instructions {
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 8px;
}

.instructions code {
  background-color: #e8e8e8;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: monospace;
}

.dark .instructions {
  background-color: #222;
}

.dark .instructions code {
  background-color: #333;
}
</style> 