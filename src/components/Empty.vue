<template>
  <div class="flex flex-col justify-center items-center space-y-8 py-12 h-full text-gray-400">
    <div>
      <FontAwesomeIcon :icon="icon" class="text-6xl"/>
    </div>
    <div class="text-center space-y-2">
      <Title>
        <slot name="title">title</slot>
      </Title>
      <div class="font-thin">
        <slot name="description">description</slot>
      </div>
    </div>
    <div v-if="$slots.button">
      <Button :icon="faPlus" @click="$emit('onButtonClick')">
        <slot name="button">button</slot>
      </Button>
    </div>
  </div>
</template>
<script setup>
import Button from "@/components/Button.vue";
import { faBoxOpen, faPlus } from "@fortawesome/free-solid-svg-icons";
import Title from "@/components/Title.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineEmits(["onButtonClick"]);

defineProps({
  icon: {
    type: Object,
    default: faBoxOpen,
  },
});
</script>
