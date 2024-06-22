<template>
  <div class="h-full flex flex-col p-4 space-y-2">
    <div class="flex space-x-2">
      <IconButton></IconButton>
      <Title>Project title</Title>
    </div>
    <div class="grow relative">
      <div class="absolute inset-0 overflow-y-auto space-y-12">
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
    <div class="flex items-center space-x-2 py-2">
      <div>
        <MiniButton/>
      </div>
      <div class="flex space-x-2 overflow-x-auto">
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
    </div>
    <div>
      <NewMessage/>
    </div>
  </div>
</template>
<script setup>
import Title from "@/components/Title.vue";
import IconButton from "@/components/IconButton.vue";
import MiniButton from "@/components/MiniButton.vue";
import NewMessage from "@/views/project/NewMessage.vue";
import Chip from "@/components/Chip.vue";
import Message from "@/views/project/Message.vue";
</script>
