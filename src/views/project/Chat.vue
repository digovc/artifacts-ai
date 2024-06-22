<template>
  <div class="h-full flex flex-col p-4">
    <div class="pb-4">
      <Title>Project title</Title>
    </div>
    <div class="grow relative">
      <div class="absolute inset-0 overflow-y-auto space-y-12 border rounded p-4">
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
      </div>
    </div>
    <div class="flex space-x-2 overflow-x-auto py-4">
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
      <Chip>reference 1</Chip>
    </div>
    <div>
      <NewMessage/>
    </div>
  </div>
</template>
<script setup>
import Title from "@/components/Title.vue";
import NewMessage from "@/views/project/NewMessage.vue";
import Chip from "@/components/Chip.vue";
import Message from "@/views/project/Message.vue";
</script>
