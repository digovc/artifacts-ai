<template>
  <div class="h-screen">
    <router-view/>
    <Notification/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import globalCommands from "@/services/global-commands.js";
import Notification from '@/components/Notification.vue';
import notification from "@/services/notification.js";

onMounted(() => {
  globalCommands.init();
  notification.showNotification("Welcome to the Artifacts AI!");
});
</script>
