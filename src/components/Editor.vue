<template>
  <div class="h-full border rounded overflow-hidden flex flex-col">
    <div class="text-sm font-thin p-1 px-2 border-b">
      artifact-1.js
    </div>
    <div class="grow">
      <vue-monaco-editor language="javascript" theme="vs" :options="editorOptions"/>
    </div>
  </div>
</template>
<script setup>

const editorOptions = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  readOnly: false,
}

</script>
