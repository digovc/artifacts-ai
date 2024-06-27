<template>
  <div class="h-screen">
    <router-view/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import globalCommands from "@/services/global-commands.js";

onMounted(() => {
  globalCommands.init();
});
</script>
