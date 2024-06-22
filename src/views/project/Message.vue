<template>
  <div class="space-y-4 group">
    <div class="flex space-x-2">
      <div>
        <div class="bg-gray-100 rounded-full w-12 h-12 flex justify-center items-center">
          from
        </div>
      </div>
      <div class="grow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. ‘Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.’
      </div>
      <div>
        <div class="bg-gray-100 rounded-full w-12 h-12 flex justify-center items-center">
          me
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center pl-14 invisible group-hover:visible">
      <div class="text-sm">timestamp</div>
      <div class="flex space-x-2 justify-end">
        <MiniButton/>
        <MiniButton/>
        <MiniButton/>
        <MiniButton/>
      </div>
    </div>
  </div>
</template>
<script setup>

import MiniButton from "@/components/MiniButton.vue";
</script>
