<template>
  <div class="hover:bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
    <div class="-mt-0.5">
      <div v-if="icon">
        <FontAwesomeIcon :icon="icon" class="text-sm text-gray-600"/>
      </div>
      <div v-else>
        <slot>+</slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({
  icon: {
    type: Object,
    default: null
  }
})
</script>
