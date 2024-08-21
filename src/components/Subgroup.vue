<template>
  <div class="border p-4 rounded-md">
    <h3 class="mb-2 text-lg font-semibold cursor-pointer space-x-2" @click="toggleOpen">
      <span v-if="isOpen">▼</span>
      <span v-else>►</span>
      <span>{{ title }}</span>
    </h3>
    <div v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  title: String,
});

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>
