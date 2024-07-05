<template>
  <FontAwesomeIcon :icon="icon" class="text-xs text-gray-400 invisible group-hover:visible hover:text-gray-600"/>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({
  icon: Object,
})

</script>
