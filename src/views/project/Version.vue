<template>
  <div class="flex items-center">
    <div class="bg-gray-600 w-4 h-px"></div>
    <MiniButton class="border border-gray-400">
      <div class="text-xs -mb-1">
        <slot/>
      </div>
    </MiniButton>
  </div>
</template>
<script setup>

import MiniButton from "@/components/MiniButton.vue";
</script>
