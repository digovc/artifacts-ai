<template>
  <div class="h-full border rounded overflow-hidden flex flex-col">
    <div class="text-sm font-thin p-1 px-2 border-b flex space-x-2 group items-center cursor-pointer"
         @click="$emit('onOpenTitleModal')">
      <div>
        {{ fileName }}
      </div>
      <FontAwesomeIcon :icon="faPen" class="text-xs text-gray-400 invisible group-hover:visible"/>
    </div>
    <div class="grow" v-if="content !== ''">
      <vue-monaco-editor :language="getLanguage()" theme="vs" :options="editorOptions" :value="content"
                         @change="changeValue" @focusout="saveChangedContent"/>
    </div>
  </div>
</template>
<script setup>
import { editorLanguages } from "@/constants/editor-languages.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { ref, watch } from "vue";

const emits = defineEmits(['onOpenTitleModal', 'onContentChange'])
const isChangePending = ref(false)
const localContent = ref()

const props = defineProps({
  fileName: String,
  content: String,
})

watch(() => props.content, () => {
  localContent.value = props.content
})

const editorOptions = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  readOnly: false,
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
</script>
