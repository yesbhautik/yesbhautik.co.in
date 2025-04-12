<script setup lang="ts">
import { ICON_MAP } from '../config/icons'
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

const props = defineProps<{
  icon: string
}>()

// Check if the icon is one of our custom icons
const isCustomIcon = props.icon in ICON_MAP

// Get the color mode for icon filtering
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>

<template>
  <!-- For built-in component icons -->
  <Slidev v-if="icon === 'slidev'" class="text-4xl opacity-50" />
  <VueUse v-else-if="icon === 'vueuse'" class="text-4xl opacity-50" />
  <VueReactivity v-else-if="icon === 'vue-reactivity'" class="text-4xl opacity-50" />
  <VueDemi v-else-if="icon === 'vue-demi'" class="text-4xl opacity-50" />
  <Unocss v-else-if="icon === 'unocss'" class="text-4xl opacity-50" />
  <Vitest v-else-if="icon === 'vitest'" class="text-4xl opacity-50" />
  <Elk v-else-if="icon === 'elk'" class="text-4xl opacity-50" />
  <AnthonyFu v-else-if="icon === 'af'" class="text-4xl opacity-50" />
  
  <!-- For custom icons defined in ICON_MAP -->
  <img 
    v-else-if="isCustomIcon" 
    :src="ICON_MAP[icon]" 
    class="w-20 opacity-50" 
    :alt="icon.split('-').pop()"
    :style="{ 
      filter: isDark
        ? 'grayscale(100%) brightness(0.3) invert(1)' 
        : 'grayscale(100%) brightness(1)'
    }"
  />
  <!-- Fallback for regular icon classes -->
  <div v-else class="text-3xl opacity-50" :class="icon || 'i-carbon-unknown'" />
</template> 