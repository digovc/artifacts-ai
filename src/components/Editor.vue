<template>
  <div class="h-full border rounded overflow-hidden flex flex-col">
    <div class="text-sm font-thin p-1 px-2 border-b">
      {{ fileName }}
    </div>
    <div class="grow">
      <vue-monaco-editor language="javascript" theme="vs" :options="editorOptions" :value="content"/>
    </div>
  </div>
</template>
<script setup>

defineProps({
  fileName: String,
  content: String,
})

const editorOptions = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  readOnly: false,
}

</script>
