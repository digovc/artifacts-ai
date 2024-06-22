<template>
  <div class="h-full flex flex-col p-4">
    <div class="pb-4">
      <Title>
        {{ project.name }}
      </Title>
    </div>
    <div class="grow relative">
      <div class="absolute inset-0 overflow-y-auto border rounded p-4">
        <div class="flex flex-col space-y-12" v-if="messages.length">
          <Message v-for="message in messages" :key="message.id" :message="message"/>
        </div>
        <Empty v-else>
          <template #title>
            No messages yet
          </template>
          <template #description>
            Start the conversation by sending a message
          </template>
        </Empty>
      </div>
    </div>
    <div>
      <div class="flex space-x-2 overflow-x-auto py-4" v-if="references.length">
        <Chip v-for="reference in references" :key="reference.id" :reference="reference">
          {{ reference.name }}
        </Chip>
      </div>
      <div v-else class="text-center pt-4 flex justify-center items-center space-x-4">
        <Button :icon="faFile">
          Add references
        </Button>
        <div class="text-xs font-thin">
          You can add files as references
        </div>
      </div>
    </div>
    <div>
      <NewMessage/>
    </div>
  </div>
</template>
<script setup>
import Title from "@/components/Title.vue";
import NewMessage from "@/views/project/NewMessage.vue";
import Chip from "@/components/Chip.vue";
import Message from "@/views/project/Message.vue";
import { onMounted, ref } from "vue";
import database from "@/services/database.js";
import Empty from "@/components/Empty.vue";
import Button from "@/components/Button.vue";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const messages = ref([]);
const references = ref([]);

const props = defineProps({
  project: Object,
})

const loadMessages = () => {
  const projectId = props.project.id;
  const filter = x => x.projectId === projectId;
  messages.value = database.getByFilter("messages", filter);
};

const loadReferences = () => {
  const projectId = props.project.id;
  const filter = x => x.projectId === projectId;
  references.value = database.getByFilter("references", filter);
};

onMounted(() => {
  loadMessages();
  loadReferences();
})
</script>
