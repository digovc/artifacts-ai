<template>
  <div @dragover.prevent @dragenter.prevent @drop="handleDrop">
    <div class="flex space-x-2 overflow-x-auto py-4" v-if="references.length">
      <Chip v-for="reference in references" :key="reference.id" :reference="reference"
            @onClick="$emit('onOpenReference', reference)"
            @onDeleteClick="$emit('onDeleteReference', reference)">
        {{ reference.name }}
      </Chip>
    </div>
    <div v-else class="text-center pt-8 flex justify-center items-center space-x-4 mt-0.5">
      <Button :icon="faFileLines" @click="$emit('onSelectReference')">
        Add references
      </Button>
      <div class="text-xs font-thin">
        Drag and drop references here
      </div>
    </div>
  </div>
</template>
<script setup>
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button.vue";
import Chip from "@/components/Chip.vue";

defineProps({
  references: Array
})

const emits = defineEmits(["onOpenReference", "onDeleteReference", "onSelectReference", "onFilesDrop"])

const handleDrop = event => {
  const files = event.dataTransfer.files;
  if (files.length) {
    event.preventDefault();
    event.stopPropagation();
    const fileArray = Array.from(files);
    emits("onFilesDrop", fileArray);
  }
};
</script>
