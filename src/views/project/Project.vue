<template>
  <div class="h-full grid grid-cols-2">
    <div class="border-r">
      <Chat :project="project"/>
    </div>
    <div>
      <Artifacts :project="project"/>
    </div>
  </div>
</template>
<script setup>
import Chat from "@/views/project/Chat.vue";
import Artifacts from "@/views/project/Artifacts.vue";
import { onMounted, ref, watch } from "vue";
import database from "@/services/database.js";
import { useRouter } from "vue-router";

const project = ref({});
const router = useRouter();

watch(router.currentRoute, () => {
  loadProject();
});

const loadProject = () => {
  const projectId = router.currentRoute.value.params.id;
  project.value = database.get(projectId);
};

onMounted(() => {
  loadProject();
});
</script>
