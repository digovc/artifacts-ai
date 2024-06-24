<template>
  <Teleport to="body">
    <div class="absolute inset-0 bg-black z-10 bg-opacity-50 flex justify-center items-center"
         @click="$emit('onClose')">
      <Card @click.stop class="space-y-4">
        <div class="font-bold">
          <slot name="title"/>
        </div>
        <div>
          <slot/>
        </div>
        <div class="text-right space-x-2">
          <slot name="commands"/>
          <Button @click="$emit('onClose')">
            Cancel
          </Button>
        </div>
      </Card>
    </div>
  </Teleport>
</template>
<script setup>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";

defineEmits(["onClose"]);
</script>
