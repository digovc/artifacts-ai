<template>
  <div class="h-full border rounded overflow-hidden flex flex-col relative">
    <div class="text-sm font-thin p-1 px-2 border-b flex space-x-2 group items-center cursor-pointer">
      <div @click="$emit('onOpenTitleModal')">
        {{ fileName }}
      </div>
      <MicroButton :icon="faPen" @click="$emit('onOpenTitleModal')"/>
      <MicroButton :icon="faCopy" @click="copyFileName"/>
    </div>
    <IconButton @click="saveChangedContent" class="absolute top-4 right-4 rounded z-10 animate-pulse"
                v-if="isChangePending" :icon="faSave">
    </IconButton>
    <div class="grow" v-if="content !== ''">
      <vue-monaco-editor :language="getLanguage()" theme="vs" :options="editorOptions" :value="content"
                         @change="changeValue" @keyup="onEditorKeyUp"/>
    </div>
  </div>
</template>
<script setup>
import IconButton from "@/components/IconButton.vue";
import globalCommands from "@/services/global-commands.js";
import { editorLanguages } from "@/constants/editor-languages.js";
import { faCopy, faPen, faSave } from "@fortawesome/free-solid-svg-icons";
import { ref, watch } from "vue";
import clipboard from "@/services/clipboard.js";
import MicroButton from "@/components/MicroButton.vue";

const emits = defineEmits(['onOpenTitleModal', 'onContentChange'])
const isChangePending = ref(false)
const localContent = ref()

const props = defineProps({
  fileName: String,
  content: String,
})

watch(() => props.content, () => {
  if (localContent.value === props.content) return
  localContent.value = props.content
  isChangePending.value = false
})

watch(() => props.fileName, () => {
  isChangePending.value = false
})

const editorOptions = {
  automaticLayout: true,
  formatOnPaste: true,
  formatOnType: true,
  readOnly: false,
  wordWrap: "on",
  minimap: {
    enabled: false
  }
}

const changeValue = (value) => {
  localContent.value = value
  isChangePending.value = true
}

const getLanguage = () => {
  if (!props.fileName) return 'plaintext'
  if (!props.fileName.includes('.')) return 'plaintext'
  const extension = props.fileName.split('.').pop()
  const languages = editorLanguages.filter(x => x[0].includes(extension))
  if (languages.length > 0) return languages[0][1]
  return extension;
}

const saveChangedContent = () => {
  if (!isChangePending.value) return
  isChangePending.value = false
  emits('onContentChange', localContent.value)
}

const onEditorKeyUp = (event) => {
  if (event.code === 'KeyN' && event.ctrlKey) {
    globalCommands.createProject()
  }
}

const copyFileName = () => {
  clipboard.copy(props.fileName)
}
</script>
