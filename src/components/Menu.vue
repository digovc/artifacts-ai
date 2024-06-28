<template>
  <div class="h-full flex flex-col p-4 border-r bg-black text-white items-center space-y-4">
    <div>
      <img src="/src/assets/logo-color-180.png" class="w-14 h-14" alt="Artifacts AI"/>
    </div>
    <div class="space-y-2 grow">
      <IconButton :icon="faHome" @click="openHome" title="Home"/>
      <IconButton :icon="faPlus" @click="createProject" title="Create Project"/>
      <IconButton :icon="faGear" @click="openConfiguration" title="Settings"/>
    </div>
    <div class="space-y-2">
      <IconButton :icon="faQuestionCircle" @click="openHelp" title="Help"/>
      <IconButton :icon="faGithub" @click="openGithub" title="Github"/>
    </div>
  </div>
</template>
<script setup>
import IconButton from "@/components/IconButton.vue";
import { faGear, faHome, faPlus, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "vue-router";
import globalCommands from "@/services/global-commands.js";

const router = useRouter();

const openHome = () => {
  router.push("/");
};

const createProject = () => {
  globalCommands.createProject();
};

const openConfiguration = () => {
  router.push("/settings");
};

const openHelp = () => {
  window.open("https://youtu.be/x5nJSPIKfvo", "_blank");
};

const openGithub = () => {
  window.open("https://github.com/digovc/artifacts-ai.git", "_blank");
};
</script>
