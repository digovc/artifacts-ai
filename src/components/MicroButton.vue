<template>
  <FontAwesomeIcon :icon="icon" class="text-gray-400 hover:text-gray-600 cursor-pointer"/>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({
  icon: Object,
})

</script>
