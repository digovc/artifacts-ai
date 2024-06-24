<template>
  <div class="bg-gray-200 h-full flex flex-col">
    <div class="flex items-center justify-between px-4 py-2">
      <div>
        <Title>Projects</Title>
      </div>
      <div>
        <Button :icon="faPlus" @click="createProject">
          Create project
        </Button>
      </div>
    </div>
    <div class="grow overflow-y-auto p-12">
      <div class="grid grid-cols-4 gap-8" v-if="projects.length">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
      </div>
      <Empty v-else @onButtonClick="createProject">
        <template #title>
          No projects yet
        </template>
        <template #description>
          Create a project to get started and collaborate with your AI.
          The project will contain all the data and artifacts for the AI model.
        </template>
        <template #button>
          Create project
        </template>
      </Empty>
    </div>
  </div>
</template>
<script setup>
import Title from "@/components/Title.vue";
import ProjectCard from "@/views/projects/ProjectCard.vue";
import Button from "@/components/Button.vue";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Empty from "@/components/Empty.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import database from "@/services/database.js";
import globalCommands from "@/services/global-commands.js";

const projects = ref([]);
const router = useRouter();

const loadProjects = () => {
  const allProjects = database.getAll("projects");
  projects.value = allProjects.sort((a, b) => new Date(b.created) - new Date(a.created));
};

const createProject = () => {
  globalCommands.createProject()
};

onMounted(() => {
  loadProjects();
});
</script>
