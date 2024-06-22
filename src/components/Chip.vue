<template>
  <div class="flex space-x-4 bg-gray-100 rounded pl-4 pr-3 py-1 cursor-pointer items-center hover:bg-gray-200 group">
    <div class="whitespace-nowrap text-sm">
      <slot/>
    </div>
    <div class="invisible group-hover:visible">
      <FontAwesomeIcon :icon="faTimes" class="text-sm"/>
    </div>
  </div>
</template>
<script setup>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
</script>
