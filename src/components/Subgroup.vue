<template>
  <div class="mb-5">
    <h3 class="mb-2 text-lg font-semibold">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
