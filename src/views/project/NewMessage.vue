<template>
  <div class="flex flex-col space-y-2">
    <div class="flex space-x-2 justify-end">
      <MiniButton :icon="faFileLines" @click="$emit('onAddReferenceClick')"/>
      <MiniButton :icon="faRobot" @click="openMenuContext"/>
    </div>
    <div class="grow relative">
      <textarea class="w-full h-full outline-none border rounded p-2 resize-none" rows="5" autofocus
                placeholder="Type your message here" v-model="inputMessage" @keydown.enter="sendMessage"/>
      <div class="absolute right-2 bottom-4">
        <IconButton :icon="faArrowRight" @click="sendMessage"/>
      </div>
    </div>
  </div>
  <Context :x="menuContextX" :y="menuContextY" v-if="showMenuContext" @onClose="showMenuContext = false">
    <div class="flex flex-col">
      <div v-for="provider in configuredProviders" :key="provider.name" @click="selectProvider(provider.name)"
           class="cursor-pointer hover:bg-gray-200 p-2">
        {{ provider.name }}
      </div>
    </div>
  </Context>
</template>

<script setup>
import Context from "@/components/Context.vue";
import IconButton from "@/components/IconButton.vue";
import MiniButton from "@/components/MiniButton.vue";
import { SETTINGS_KEY } from "@/services/settings.js";
import database from "@/services/database.js";
import { faArrowRight, faFileLines, faRobot } from "@fortawesome/free-solid-svg-icons";
import { onMounted, ref } from "vue";

const inputMessage = ref("");
const emits = defineEmits(["onAddReferenceClick", "onSendMessage"]);
const menuContextX = ref(0);
const menuContextY = ref(0);
const showMenuContext = ref(false);
const configuredProviders = ref([]);
const selectedProvider = ref("");

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
};

onMounted(() => {
  loadConfiguredProviders();
});
</script>
