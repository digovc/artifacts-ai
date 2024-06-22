<template>
  <div class="bg-gray-200 h-full flex flex-col">
    <div class="flex items-center justify-between px-12 py-2">
      <div>
        <Title>Projects</Title>
      </div>
      <div>
        <div>add +</div>
      </div>
    </div>
    <div class="grow overflow-y-auto p-12 grid grid-cols-4 gap-8">
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
  </div>
</template>
<script setup>
import Title from "@/components/Title.vue";
import ProjectCard from "@/views/projects/ProjectCard.vue";
</script>
