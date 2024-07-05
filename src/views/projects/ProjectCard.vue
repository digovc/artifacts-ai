<template>
  <Card @click="openProject" class="group select-none" v-if="!isDeleted">
    <div class="text-lg">
      {{ project.name }}
    </div>
    <div class="italic text-sm grow">
      {{ project.description }}
    </div>
    <div class="flex justify-end invisible group-hover:visible">
      <div>
        <MiniButton :icon="faTrash" @click="deleteProject"/>
      </div>
    </div>
  </Card>
</template>
<script setup>
import Card from "@/components/Card.vue";
import { useRouter } from "vue-router";
import MiniButton from "@/components/MiniButton.vue";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import database from "@/services/database.js";
import { ref } from "vue";
import notification from "@/services/notification.js";

const router = useRouter();
const isDeleted = ref(false);

const props = defineProps({
  project: Object,
});

const openProject = () => {
  router.push(`/projects/${ props.project.id }`);
};

const deleteProject = (event) => {
  const projectId = props.project.id;
  database.delete("projects", projectId);
  const itemFilter = (item) => item.projectId === projectId;
  database.deleteByFilter("messages", itemFilter);
  database.deleteByFilter("artifacts", itemFilter);
  database.deleteByFilter("references", itemFilter);
  isDeleted.value = true;
  event.stopPropagation();
  notification.showNotification("Project deleted");
  return false;
};
</script>
