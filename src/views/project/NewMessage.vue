<template>
  <div class="flex flex-col space-y-2">
    <div class="flex space-x-2 justify-end">
      <MiniButton :icon="faRobot"/>
      <MiniButton :icon="faFile"/>
      <MiniButton :icon="faMicrophone"/>
    </div>
    <div class="grow relative">
      <textarea class="w-full h-full outline-none border rounded p-2 resize-none" rows="5"
                placeholder="Type your message here"/>
      <div class="absolute right-2 bottom-4">
        <IconButton :icon="faArrowRight"/>
      </div>
    </div>
  </div>
</template>
<script setup>

import MiniButton from "@/components/MiniButton.vue";
import IconButton from "@/components/IconButton.vue";
import { faArrowRight, faFile, faMicrophone, faRobot } from "@fortawesome/free-solid-svg-icons";
</script>
