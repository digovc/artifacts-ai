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
  <Context :x="menuContextX" :y="menuContextY" v-if="showMenuContext">
    <div class="flex flex-col">
      <div>context</div>
      <div>context</div>
      <div>context</div>
      <div>context</div>
    </div>
  </Context>
</template>
<script setup>
import MiniButton from "@/components/MiniButton.vue";
import IconButton from "@/components/IconButton.vue";
import { faArrowRight, faFileLines, faRobot } from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";
import Context from "@/components/Context.vue";

const inputMessage = ref("");
const emits = defineEmits(["onAddReferenceClick", "onSendMessage"]);
const menuContextX = ref(0);
const menuContextY = ref(0);
const showMenuContext = ref(false);

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
</script>
