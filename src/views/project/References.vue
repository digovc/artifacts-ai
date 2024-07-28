<template>
  <div @dragover.prevent @dragenter.prevent @drop="handleDrop">
    <div class="flex space-x-2 overflow-x-auto py-4" v-if="references.length">
      <Chip v-for="reference in references" :key="reference.id" :reference="reference"
            :icon="getIconForReference(reference)"
            @onClick="$emit('onOpenReference', reference)"
            @onDeleteClick="$emit('onDeleteReference', reference)">
        {{ reference.name }}
      </Chip>
    </div>
    <div v-else class="text-center pt-6 flex justify-center items-center space-x-4 mt-0.5">
      <IconButton :icon="faFileLines" @click="$emit('onSelectReference')" title="Add references"/>
      <div class="text-xs font-thin">
        Drag and drop references here
      </div>
    </div>
  </div>
</template>
<script setup>
import { faFileImage, faFileLines, faFileText } from "@fortawesome/free-solid-svg-icons";
import Chip from "@/components/Chip.vue";
import IconButton from "@/components/IconButton.vue";

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

const getIconForReference = (reference) => {
  const extension = reference.name.split('.').pop().toLowerCase();
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];

  if (imageExtensions.includes(extension)) {
    return faFileImage;
  } else {
    return faFileText;
  }
};
</script>
