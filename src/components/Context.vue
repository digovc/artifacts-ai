<template>
  <div class="bg-white rounded-lg fixed shadow-lg overflow-hidden z-10 border min-w-48" v-if="isVisible"
       ref="contextMenu" :style="computedStyle">
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

const emit = defineEmits(['onClose']);

const isVisible = ref(false);
const viewport = ref({ width: 0, height: 0 });
const contextMenu = ref(null);

watch([() => props.x, () => props.y], () => updateViewportSize());

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

    if (props.y + menuHeight > viewport.value.height) {
      style.top = `${ props.y - menuHeight }px`;
    }

    if (props.x + menuWidth > viewport.value.width) {
      style.left = `${ props.x - menuWidth }px`;
    }
  }

  return style;
});

const handleClickOutside = (event) => {
  if (contextMenu.value && !contextMenu.value.contains(event.target)) {
    emit('onClose');
  }
};

onMounted(() => {
  updateViewportSize();
  window.addEventListener('resize', updateViewportSize);
  document.addEventListener('click', handleClickOutside, true);

  nextTick(() => {
    isVisible.value = true;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewportSize);
  document.removeEventListener('click', handleClickOutside, true);
});
</script>
