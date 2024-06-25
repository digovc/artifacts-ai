<template>
  <div v-if="isVisible" ref="contextMenu" :class="computedClasses" :style="computedStyle">
    <slot/>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
});

const isVisible = ref(false);
const viewport = ref({ width: 0, height: 0 });
const contextMenu = ref(null);

const updateViewportSize = () => {
  viewport.value = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

const computedStyle = computed(() => {
  const style = {
    top: `${ props.y }px`,
    left: `${ props.x }px`,
  };

  if (contextMenu.value) {
    const { offsetWidth: menuWidth, offsetHeight: menuHeight } = contextMenu.value;

    // Compute if there is enough space downwards
    if (props.y + menuHeight > viewport.value.height) {
      style.top = `${ props.y - menuHeight }px`;
    }

    // Compute if there is enough space rightwards
    if (props.x + menuWidth > viewport.value.width) {
      style.left = `${ props.x - menuWidth }px`;
    }
  }

  return style;
});

const computedClasses = computed(() => {
  return "bg-white rounded-lg p-4 fixed shadow-lg";
});

onMounted(() => {
  updateViewportSize();
  window.addEventListener('resize', updateViewportSize);

  nextTick(() => {
    isVisible.value = true;
  });
});

// Remove event listener when component is destroyed
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewportSize);
});

// Watch for prop changes and update viewport size
watch([() => props.x, () => props.y], updateViewportSize);
</script>
