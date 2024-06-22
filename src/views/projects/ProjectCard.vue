<template>
  <Card @click="openProject">
    <div class="text-lg uppercase">title</div>
    <div class="italic text-sm grow">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </div>
    <div class="flex justify-end">
      <div>delete</div>
    </div>
  </Card>
</template>
<script setup>
import Card from "@/components/Card.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const openProject = () => {
  router.push("/projects/1");
};
</script>
