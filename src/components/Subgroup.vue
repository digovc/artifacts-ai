<template>
  <div class="mb-5">
    <h3 class="mb-2 text-lg font-semibold">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
});
</script>
