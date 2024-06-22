<template>
  <div class="flex space-x-4 rounded pl-4 pr-3 py-1 cursor-pointer items-center bg-gray-50 hover:bg-gray-200 group"
       :class="{ 'bg-gray-300': isSelected }">
    <div class="whitespace-nowrap text-sm" @click="$emit('onClick')">
      <slot/>
    </div>
    <div class="invisible group-hover:visible">
      <FontAwesomeIcon :icon="faTimes" class="text-sm" @click="$emit('onDeleteClick')"/>
    </div>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

defineEmits(["onClick", "onDeleteClick"]);

defineProps({
  isSelected: Boolean,
})
</script>
