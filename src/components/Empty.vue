<template>
  <div class="flex flex-col justify-center items-center space-y-8 py-12 h-full">
    <div>
      <FontAwesomeIcon :icon="faBoxOpen" class="text-6xl text-gray-600"/>
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
</script>
