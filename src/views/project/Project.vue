<template>
  <div class="h-full grid grid-cols-2">
    <div class="border-r">
      <Chat/>
    </div>
    <div>
      <Artifacts/>
    </div>
  </div>
</template>
<script setup>
import Chat from "@/views/project/Chat.vue";
import Artifacts from "@/views/project/Artifacts.vue";
</script>
