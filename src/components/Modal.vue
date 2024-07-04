<template>
  <Teleport to="body">
    <div class="absolute inset-0 bg-black z-10 bg-opacity-50 flex justify-center items-center"
         @click="closeModal"
         @keydown.esc="closeModal"
         tabindex="0"
         ref="modalContainer">
      <Card @click.stop class="space-y-4">
        <div class="font-bold">
          <slot name="title"/>
        </div>
        <div>
          <slot/>
        </div>
        <div class="text-right space-x-2">
          <slot name="commands"/>
          <Button @click="closeModal">
            Cancel
          </Button>
        </div>
      </Card>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";

const emit = defineEmits(["onClose"]);
const modalContainer = ref(null);

const closeModal = () => {
  emit('onClose');
};

const handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
  modalContainer.value.focus();
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
});
</script>
