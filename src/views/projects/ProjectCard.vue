<template>
  <Card @click="openProject" class="group">
    <div class="text-lg uppercase">
      {{ project.name }}
    </div>
    <div class="italic text-sm grow">
      {{ project.description }}
    </div>
    <div class="flex justify-end invisible group-hover:visible">
      <div>
        <MiniButton :icon="faTrash"/>
      </div>
    </div>
  </Card>
</template>
<script setup>
import Card from "@/components/Card.vue";
import { useRouter } from "vue-router";
import MiniButton from "@/components/MiniButton.vue";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const router = useRouter();

const props = defineProps({
  project: Object,
});

const openProject = () => {
  router.push(`/projects/${ props.project.id }`);
};
</script>
