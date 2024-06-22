<template>
  <div class="flex flex-col space-y-2">
    <div class="flex space-x-2 justify-end">
      <MiniButton/>
      <MiniButton/>
      <MiniButton/>
      <MiniButton/>
      <MiniButton/>
      <MiniButton/>
    </div>
    <div class="grow relative">
      <textarea class="w-full h-full outline-none border rounded p-2 resize-none" rows="5" placeholder="Type your message here"/>
      <IconButton class="absolute right-4 bottom-5 bg-red-50"/>
    </div>
  </div>
</template>
<script setup>

import MiniButton from "@/components/MiniButton.vue";
import IconButton from "@/components/IconButton.vue";
</script>
