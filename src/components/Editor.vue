<template>
  <div class="h-full border rounded overflow-hidden flex flex-col">
    <div class="text-sm font-thin p-1 px-2 border-b">
      {{ fileName }}
    </div>
    <div class="grow" v-if="content !== ''">
      <vue-monaco-editor :language="language" theme="vs" :options="editorOptions" :value="content"/>
    </div>
  </div>
</template>
<script setup>
import { editorLanguages } from "@/constants/editor-languages.js";
import { ref, watch } from "vue";

const language = ref('plaintext')

const props = defineProps({
  fileName: String,
  content: String,
})

const editorOptions = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  readOnly: false,
}

watch(() => props.fileName, (newFileName) => {
  console.log(newFileName)
  language.value = getLanguage(newFileName)
})

const getLanguage = (fileName) => {
  const extension = fileName.split('.').pop()
  const languages = editorLanguages.filter(x => x[0].includes(extension))

  if (languages.length > 0) {
    return languages[0][1]
  }

  return extension;
}
</script>
