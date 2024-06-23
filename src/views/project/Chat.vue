<template>
  <div class="h-full flex flex-col p-4 py-2">
    <div class="pb-4">
      <Title>
        {{ project.name }}
      </Title>
    </div>
    <div class="grow relative">
      <div class="absolute inset-0 overflow-y-auto border rounded p-4 pr-6" ref="messagesContainer">
        <div class="flex flex-col space-y-8" v-if="messages.length">
          <Message v-for="message in messages" :key="message.id" :message="message"/>
        </div>
        <Empty v-else>
          <template #title>
            No messages yet
          </template>
          <template #description>
            Start the conversation by sending a message.
            <br>
            You can also add files as references and artifacts as context for the AI model.
          </template>
        </Empty>
      </div>
    </div>
    <div>
      <div class="flex space-x-2 overflow-x-auto py-4" v-if="references.length">
        <Chip v-for="reference in references" :key="reference.id" :reference="reference"
              @onClick="openReference(reference)"
              @onDeleteClick="deleteReference(reference)">
          {{ reference.name }}
        </Chip>
      </div>
      <div v-else class="text-center pt-8 flex justify-center items-center space-x-4">
        <Button :icon="faFile" @click="selectReferences">
          Add references
        </Button>
        <div class="text-xs font-thin">
          You can add files as references
        </div>
      </div>
    </div>
    <div>
      <NewMessage @onAddReferenceClick="selectReferences" :project="project" @onSendMessage="sendMessage"/>
    </div>
  </div>
  <input ref="referenceInput" type="file" class="hidden" multiple @change="createReferences"/>
</template>
<script setup>
import Title from "@/components/Title.vue";
import NewMessage from "@/views/project/NewMessage.vue";
import Chip from "@/components/Chip.vue";
import Message from "@/views/project/Message.vue";
import { onMounted, onUnmounted, ref, watch } from "vue";
import database from "@/services/database.js";
import Empty from "@/components/Empty.vue";
import Button from "@/components/Button.vue";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import messageSender from "@/services/message-sender.js";
import { filter, Subject, takeUntil } from "rxjs";

const messages = ref([]);
const references = ref([]);
const referenceInput = ref(null);
const onDestroy$ = new Subject();
const messagesContainer = ref(null);

const props = defineProps({
  project: Object,
})

watch(() => props.project, () => {
  loadMessages();
  loadReferences();
});

const loadMessages = () => {
  const projectId = props.project.id;
  const filter = x => x.projectId === projectId;
  messages.value = database.getByFilter("messages", filter);
  moveToBottom();
};

const moveToBottom = () => {
  setTimeout(() => {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }, 100);
}

const loadReferences = () => {
  const projectId = props.project.id;
  const filter = x => x.projectId === projectId;
  references.value = database.getByFilter("references", filter);
};

const selectReferences = () => {
  referenceInput.value.click();
};

const createReferences = async () => {
  const files = referenceInput.value.files;

  for (const file of files) {
    await createReferenceToFile(file);
  }

  referenceInput.value.value = "";
};

const createReferenceToFile = async file => {
  const reader = new FileReader();
  reader.readAsText(file);

  reader.onload = () => {
    const content = reader.result;

    const reference = {
      name: file.name,
      content,
      projectId: props.project.id,
    };

    database.insert("references", reference);
    references.value.push(reference);
  };
};

const deleteReference = reference => {
  database.delete("references", reference.id);
  references.value = references.value.filter(x => x.id !== reference.id);
};

const openReference = reference => {
  const url = URL.createObjectURL(new Blob([reference.content]));
  window.open(url, "_blank");
};

const sendMessage = async message => {
  const projectId = props.project.id;

  const newMessage = {
    content: message,
    projectId,
    from: "user",
  };

  database.insert("messages", newMessage);
  await messageSender.send(message, projectId);
};

onMounted(() => {
  database.onDocumentInserted$
      .pipe(takeUntil(onDestroy$))
      .pipe(filter(x => x.table === "messages" && x.document.projectId === props.project.id))
      .subscribe(x => {
        messages.value.push(x.document)
        moveToBottom();
      });
});

onUnmounted(() => {
  onDestroy$.next();
  onDestroy$.complete();
});
</script>
