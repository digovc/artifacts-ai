<template>
  <div class="flex space-x-2 bg-gray-200 hover:bg-gray-100 rounded px-4 py-1 cursor-pointer">
    <div v-if="icon">
      <FontAwesomeIcon :icon="icon"/>
    </div>
    <div>
      <slot/>
    </div>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({
  icon: {
    type: Object,
    default: null,
  },
});
</script>
