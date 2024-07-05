<template>
  <div class="group space-y-2" v-if="!isDeleted">
    <div class="flex space-x-4">
      <div v-if="message.from === 'assistant'">
        <div class="bg-gray-100 rounded-full w-12 h-12 flex justify-center items-center">
          <FontAwesomeIcon :icon="faRobot" class="text-2xl text-gray-500 -mt-1"/>
        </div>
      </div>
      <div class="grow bg-gray-100 p-2 rounded-lg text-sm overflow-auto break-words"
           :class="message.from === 'assistant' ? 'mr-16' : 'ml-16'">
        <Markdown :src="message.content"/>
        <div class="flex space-x-1 text-xs justify-end text-gray-400">
          <div v-if="message.provider">
            {{ message.provider }}
          </div>
          <div v-if="message.model">
            ({{ message.model }})
          </div>
        </div>
      </div>
      <div v-if="message.from === 'user'">
        <div class="bg-gray-100 rounded-full w-12 h-12 flex justify-center items-center">
          <FontAwesomeIcon :icon="faUser" class="text-2xl text-gray-500 -mt-1"/>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center pl-16 invisible group-hover:visible">
      <div class="text-xs italic">
        {{ message.createdAt }}
      </div>
      <div class="flex space-x-2 justify-end">
        <MiniButton :icon="faEdit" @click="$emit('onEdit')" v-if="message.from === 'user'"/>
        <MiniButton :icon="faRefresh" @click="$emit('onRefresh')"/>
        <MiniButton :icon="faCopy" @click="copy"/>
        <MiniButton :icon="faTrash" @click="deleteMessage"/>
      </div>
    </div>
  </div>
</template>
<script setup>
import MiniButton from "@/components/MiniButton.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCopy, faEdit, faRefresh, faRobot, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import clipboard from "@/services/clipboard.js";
import database from "@/services/database.js";
import { ref } from "vue";
import Markdown from "@/components/Markdown.vue";
import notification from "@/services/notification.js";

const isDeleted = ref(false)

const props = defineProps({
  message: Object
})

const copy = () => {
  clipboard.copy(props.message.content);
}

const deleteMessage = () => {
  if (!props.message.id) return
  database.delete("messages", props.message.id)
  isDeleted.value = true
  notification.showNotification("Message deleted")
}
</script>
<style scoped>
.break-words {
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>
