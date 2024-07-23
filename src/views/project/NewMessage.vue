<template>
  <div class="flex flex-col space-y-2 h-full">
    <div class="flex space-x-2 justify-end">
      <MiniButton :icon="faFileLines" @click="$emit('onAddReferenceClick')" title="Add reference"/>
      <MiniButton :icon="faRobot" @click="openMenuContext" title="Select provider"/>
    </div>
    <div class="grow relative group">
      <MiniButton :icon="faExpand" class="absolute right-2 top-2 invisible group-hover:visible"
                  title="Selected provider" @click="$emit('onFullSize')"/>
      <textarea ref="messageInput" class="w-full h-full outline-none border rounded p-2 resize-none" rows="5" autofocus
                placeholder="Type your message here. You can also paste images or text files."
                v-model="inputMessage" @keydown.enter="sendMessage" @paste="handlePaste"/>
      <div class="absolute right-2 bottom-2">
        <IconButton :icon="faArrowRight" @click="sendMessage"/>
      </div>
    </div>
    <div class="mt-2 text-xs text-center text-gray-500">
      <span v-if="selectedProvider">{{ selectedProvider }} - {{ getSelectedModel() }}</span>
    </div>
  </div>
  <Context :x="menuContextX" :y="menuContextY" v-if="showMenuContext" @onClose="showMenuContext = false">
    <div class="flex flex-col">
      <div v-for="provider in configuredProviders" :key="provider.name" @click="selectProvider(provider.name)"
           class="cursor-pointer hover:bg-gray-200 p-2">
        <span :class="{ 'font-bold': provider.name === selectedProvider }">{{ provider.name }}</span>
      </div>
    </div>
  </Context>
</template>

<script setup>
import Context from "@/components/Context.vue";
import IconButton from "@/components/IconButton.vue";
import MiniButton from "@/components/MiniButton.vue";
import database from "@/services/database.js";
import { SETTINGS_KEY } from "@/services/settings.js";
import { faArrowRight, faExpand, faFileLines, faRobot } from "@fortawesome/free-solid-svg-icons";
import { onMounted, ref, watch } from 'vue';

const configuredProviders = ref([]);
const emits = defineEmits(["onAddReferenceClick", "onSendMessage", "onFullSize", "onFilesDrop"]);
const inputMessage = ref("");
const menuContextX = ref(0);
const menuContextY = ref(0);
const messageInput = ref(null);
const selectedProvider = ref("");
const selectedModel = ref("");
const showMenuContext = ref(false);

const props = defineProps({
  project: Object,
  text: String,
});

watch(() => props.project.id, () => {
  messageInput.value.focus();
});

watch(() => props.text, () => {
  inputMessage.value = props.text;
  setTimeout(() => messageInput.value.focus(), 0);
});

const sendMessage = async (event) => {
  if (event.shiftKey) return;

  const message = inputMessage.value.trim();
  if (!message) return;

  inputMessage.value = "";
  emits("onSendMessage", message);
  event.preventDefault();
  return false;
};

const openMenuContext = (event) => {
  menuContextX.value = event.clientX;
  menuContextY.value = event.clientY;
  showMenuContext.value = true;
};

const selectProvider = (provider) => {
  selectedProvider.value = provider;
  selectedModel.value = getProviderModel(provider);
  saveSelectedProvider(provider);
  showMenuContext.value = false;
};

const saveSelectedProvider = (provider) => {
  let settingsData = database.get(SETTINGS_KEY);
  if (!settingsData) {
    settingsData = { id: SETTINGS_KEY, general: {}, providers: [], providerSelected: provider };
  } else {
    settingsData.providerSelected = provider;
  }
  database.update(settingsData);
};

const loadConfiguredProviders = () => {
  const settingsData = database.get(SETTINGS_KEY);
  configuredProviders.value = settingsData?.providers || [];
  selectedProvider.value = settingsData?.providerSelected || "";
  selectedModel.value = getProviderModel(selectedProvider.value);
};

const handlePaste = (event) => {
  const items = event.clipboardData.items;
  const files = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.kind === 'file') {
      const file = item.getAsFile();
      files.push(file);
    } else if (item.kind === 'string' && item.type === 'text/plain') {
      item.getAsString((text) => {
        const blob = new Blob([text], { type: 'text/plain' });
        const file = new File([blob], 'pasted_text.txt', { type: 'text/plain' });
        files.push(file);
      });
    }
  }

  if (files.length > 0) {
    event.preventDefault();
    emits("onFilesDrop", files);
  }
};

const getProviderModel = (providerName) => {
  const settingsData = database.get(SETTINGS_KEY);
  const provider = settingsData.providers.find(p => p.name === providerName);
  return provider ? provider.model : '';
};

const getSelectedModel = () => {
  return selectedModel.value;
};

onMounted(() => {
  loadConfiguredProviders();
  messageInput.value.focus();
});
</script>
