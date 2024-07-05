<template>
  <div class="fixed bottom-4 right-4 z-50">
    <TransitionGroup tag="div" enter-active-class="transition-all duration-500 ease-out"
                     enter-from-class="opacity-0 translate-y-8" enter-to-class="opacity-100 translate-y-0"
                     leave-active-class="transition-all duration-500 ease-in"
                     leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-8"
                     class="space-y-2">
      <div v-for="notification in notifications" :key="notification.id"
           class="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg max-w-sm cursor-pointer"
           @click="closeNotification(notification.id)">
        {{ notification.text }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import notificationService from '@/services/notification';

const notifications = ref([]);

const addNotification = (notification) => {
  notifications.value.push(notification);
  setTimeout(() => {
    closeNotification(notification.id);
  }, 5000);
};

const closeNotification = (id) => {
  notifications.value = notifications.value.filter(n => n.id !== id);
};

onMounted(() => {
  notificationService.subscribe(addNotification);
});

onUnmounted(() => {
  notificationService.unsubscribe(addNotification);
});
</script>
