<template>
  <div class="h-full flex">
    <div>
      <Menu/>
    </div>
    <div class="grow h-full relative">
      <div class="absolute inset-0">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script setup>
import Menu from "@/components/Menu.vue";
</script>
