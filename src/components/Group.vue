<template>
  <div class="mb-10 border-b pb-4">
    <h2 class="mb-5 text-xl font-bold">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
});
</script>
