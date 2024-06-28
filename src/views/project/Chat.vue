<template>
  <div class="h-full flex flex-col p-4 py-2">
    <div class="pb-4 group flex space-x-4 items-center">
      <Title @click="openInputModal" class="cursor-pointer uppercase">
        {{ project.name }}
      </Title>
      <FontAwesomeIcon :icon="faPen" @click="openInputModal" class="invisible group-hover:visible"/>
    </div>
    <div class="grow relative">
      <div class="absolute inset-0 overflow-y-auto border rounded p-4 pr-6" ref="messagesContainer">
        <div class="flex flex-col space-y-4" v-if="messages.length">
          <Message v-for="message in messages" :key="message.id" :message="message"
                   @onRefresh="editOrRefreshMessage(message, false)"
                   @onEdit="editOrRefreshMessage(message, true)"></Message>
          <TempMessage/>
        </div>
        <Empty v-else :icon="faMessage">
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
      <References :references="references" @onOpenReference="openReference" @onDeleteReference="deleteReference"
                  @onSelectReference="selectReferences" @onFilesDrop="handleFilesDrop"/>
    </div>
    <div>
      <NewMessage @onAddReferenceClick="selectReferences" @onSendMessage="sendMessage" :project="project"
                  :text="newMessage"/>
    </div>
  </div>
  <input ref="referenceInput" type="file" class="hidden" multiple @change="createReferences"/>
  <Modal v-if="showInputModal" @onClose="showInputModal = false">
    <template #title>
      Edit project name
    </template>
    <div>
      <input ref="projectNameInput" name="project-name" v-model="project.name" placeholder="Project name" autofocus
             class="border w-80 indent-1" @keyup.enter="saveProjectName"/>
    </div>
    <template #commands>
      <Button @click="saveProjectName">
        Save
      </Button>
    </template>
  </Modal>
</template>
<script setup>
import Button from "@/components/Button.vue";
import Empty from "@/components/Empty.vue";
import Message from "@/views/project/Message.vue";
import Modal from "@/components/Modal.vue";
import NewMessage from "@/views/project/NewMessage.vue";
import References from "@/views/project/References.vue";
import TempMessage from "@/views/project/TempMessage.vue";
import Title from "@/components/Title.vue";
import database from "@/services/database.js";
import messageSender from "@/services/message-sender.js";
import streamProvider from "@/services/stream-provider.js";
import { filter, Subject, takeUntil } from "rxjs";
import { nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMessage, faPen } from "@fortawesome/free-solid-svg-icons";

const messages = ref([]);
const messagesContainer = ref(null);
const onDestroy$ = new Subject();
const projectNameInput = ref(null);
const referenceInput = ref(null);
const references = ref([]);
const showInputModal = ref(false);
const newMessage = ref("");

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

const handleFilesDrop = async files => {
  for (const file of files) {
    await createReferenceToFile(file);
  }
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
  await messageSender.send(message, projectId).catch(() => {
    streamProvider.onEnd$.next(0);
  });
};

const saveProjectName = () => {
  const update = { name: props.project.name }
  database.updateFields(props.project.id, update);
  showInputModal.value = false;
};

const openInputModal = async () => {
  showInputModal.value = true;
  await nextTick();
  projectNameInput.value.select();
};

const editOrRefreshMessage = (message, edit) => {
  const messagesInversed = messages.value.slice().reverse();

  for (const message1 of messagesInversed) {
    database.delete("messages", message1.id);
    message1.isDeleted = true;
    if (message1.id === message.id) break;
  }

  messages.value = messages.value.filter(x => !x.isDeleted);

  if (edit) {
    newMessage.value = message.content;
    return;
  }

  if (message.from === "user") {
    sendMessage(message.content);
  } else {
    messageSender.send(message.content, props.project.id);
  }
};

onMounted(() => {
  database.onDocumentInserted$
      .pipe(takeUntil(onDestroy$))
      .pipe(filter(x => x.table === "messages" && x.document.projectId === props.project.id))
      .subscribe(x => {
        messages.value.push(x.document)
        moveToBottom();
      });

  streamProvider.onData$
      .pipe(takeUntil(onDestroy$))
      .subscribe(() => moveToBottom());
});

onUnmounted(() => {
  onDestroy$.next();
  onDestroy$.complete();
});
</script>
