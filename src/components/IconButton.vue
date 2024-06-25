<template>
  <div class="hover:bg-gray-500 w-10 h-10 rounded flex justify-center items-center cursor-pointer">
    <div>
      <FontAwesomeIcon :icon="icon" class="text-2xl"/>
    </div>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({
  icon: Object,
})
</script>
