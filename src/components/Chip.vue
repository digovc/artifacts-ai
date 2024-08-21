<template>
  <div class="flex space-x-2 rounded pl-2 pr-1 py-.5 cursor-pointer items-center hover:bg-gray-200 group border"
       :class="{ 'bg-gray-200': isSelected }">
    <div v-if="icon" class="-mt-px">
      <FontAwesomeIcon :icon="icon" class="text-xs"/>
    </div>
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
  icon: {
    type: Object,
    default: null,
  },
});
</script>
