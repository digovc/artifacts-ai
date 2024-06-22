<template>
  <div class="space-y-4 group">
    <div class="flex space-x-4">
      <div>
        <div class="bg-gray-100 rounded-full w-12 h-12 flex justify-center items-center">
          <FontAwesomeIcon :icon="faRobot" class="text-2xl text-gray-500 -mt-1"/>
        </div>
      </div>
      <div class="grow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. ‘Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
        quasi architecto beatae vitae dicta sunt explicabo.’
      </div>
      <div>
        <div class="bg-gray-100 rounded-full w-12 h-12 flex justify-center items-center">
          <FontAwesomeIcon :icon="faUser" class="text-2xl text-gray-500 -mt-1"/>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center pl-14 invisible group-hover:visible">
      <div class="text-xs italic">
        12/12/2021 12:00
      </div>
      <div class="flex space-x-2 justify-end">
        <MiniButton :icon="faCopy"/>
        <MiniButton :icon="faEdit"/>
        <MiniButton :icon="faRefresh"/>
        <MiniButton :icon="faTrash"/>
      </div>
    </div>
  </div>
</template>
<script setup>
import MiniButton from "@/components/MiniButton.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCopy, faEdit, faRefresh, faRobot, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
</script>
<script setup lang="ts">
</script>
<script setup lang="ts">
</script>
<script setup lang="ts">
</script>
<script setup lang="ts">
</script>
<script setup lang="ts">
</script>
<script setup lang="ts">
</script>
