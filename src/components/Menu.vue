<template>
  <div class="h-full flex flex-col justify-between p-2 border-r">
    <div class="space-y-2">
      <IconButton :icon="faHome" @click="openHome"/>
      <IconButton :icon="faPlus" @click="createProject"/>
      <IconButton :icon="faGear"/>
    </div>
    <div class="space-y-2">
      <IconButton :icon="faQuestionCircle"/>
      <IconButton :icon="faGithub"/>
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
</script>
