<template>
  <Card @click="openProject" class="group" v-if="!project.isDeleted">
    <div class="text-lg uppercase">
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

const router = useRouter();

const props = defineProps({
  project: Object,
});

const openProject = () => {
  router.push(`/projects/${ props.project.id }`);
};

const deleteProject = (event) => {
  props.project.isDeleted = true;
  database.delete("projects", props.project.id);
  event.stopPropagation();
  return false;
};
</script>
