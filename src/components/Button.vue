<template>
  <div class="inline-block">
    <div class="flex space-x-2 bg-gray-600 hover:bg-gray-500 text-white rounded px-4 py-1 cursor-pointer">
      <div v-if="icon">
        <FontAwesomeIcon :icon="icon"/>
      </div>
      <div>
        <slot/>
      </div>
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
