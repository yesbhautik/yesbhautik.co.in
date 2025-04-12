<template>
  <svg viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Bhautik Bavadiya @ yesbhautik.co.in</title>
    <!-- Each letter as a separate path for better animation control -->
    <path d="M20 20h15v15h-15v15h15" class="letter" style="animation-delay: 0s;" />
    <path d="M20 20h15v15h-15v15h15" class="letter" style="animation-delay: 10s;" />

  </svg>
</template>

<style scoped>
@media (prefers-reduced-motion) {
  .letter {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}

@media print {
  .letter {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}

@keyframes drawLetter {
  0% {
    stroke-dashoffset: 100px;
    stroke-dasharray: 0 100px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    stroke-dasharray: 100px 0;
    stroke-dashoffset: 0;

  }
  90% {
    stroke-dasharray: 100px 0;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 100px 0;
    stroke-dashoffset: 0;
  }

}

.letter {
  stroke: #303030;
  stroke-width: 2.5px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  stroke-dashoffset: 100px;
  stroke-dasharray: 0 100px;
  animation: drawLetter 5s ease-in-out forwards infinite;
}

.dark .letter {
  stroke: #fdfdfd;
}
</style> 