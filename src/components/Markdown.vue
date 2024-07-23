<template>
  <div class="markdown">
    <vue-markdown :source="src" :options="{ forceBlock: true }"/>
  </div>
</template>
<script setup>
import VueMarkdown from 'vue-markdown-render'

defineProps({
  src: String
})
</script>
