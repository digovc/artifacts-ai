<template>
  <div class="h-full flex flex-col p-4">
    <div class="pb-4">
      <Title>Artifacts</Title>
    </div>
    <div class="flex space-x-2">
      <div>
        <Button :icon="faPlus">Create</Button>
      </div>
      <div class="flex space-x-2 overflow-x-auto pb-4">
        <Chip>artifact-1.js</Chip>
        <Chip>artifact-2.js</Chip>
        <Chip>artifact-3.js</Chip>
        <Chip>artifact-4.js</Chip>
        <Chip>artifact-5.js</Chip>
        <Chip>artifact-6.js</Chip>
        <Chip>artifact-7.js</Chip>
        <Chip>artifact-8.js</Chip>
        <Chip>artifact-9.js</Chip>
        <Chip>artifact-10.js</Chip>
      </div>
    </div>
    <div class="grow relative">
      <div class="absolute inset-0 overflow-y-auto">
        <Editor/>
      </div>
    </div>
    <div class="flex justify-center pt-4">
      <div class="grow overflow-x-auto flex items-center">
        <div class="italic text-sm -mr-0.5 text-gray-600">
          Versions )
        </div>
        <Version/>
        <Version/>
        <Version/>
      </div>
      <div class="flex justify-end space-x-2">
        <Button :icon="faSave">Save</Button>
        <Button :icon="faCopy">Copy</Button>
        <Button :icon="faTrash">Delete</Button>
      </div>
    </div>
  </div>
</template>
<script setup>

import Title from "@/components/Title.vue";
import Chip from "@/components/Chip.vue";
import Button from "@/components/Button.vue";
import Version from "@/views/project/Version.vue";
import { faCopy, faPlus, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import Editor from "@/components/Editor.vue";
</script>
