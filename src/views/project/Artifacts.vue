<template>
  <div class="h-full flex flex-col p-2 px-4">
    <div class="pb-4 flex space-x-4 items-center">
      <Title>Artifacts</Title>
      <FontAwesomeIcon :icon="faFilePen" class="text-lg mt-1"/>
    </div>
    <div class="flex space-x-2 pb-4">
      <div class="space-x-2">
        <Button :icon="faPlus" @click="createArtifact">
          Create
        </Button>
      </div>
      <div class="flex space-x-2 overflow-x-auto">
        <div v-for="artifact in artifacts" :key="artifact.id">
          <Chip :artifact="artifact" @onClick="selectedArtifact = artifact"
                :isSelected="selectedArtifact.id === artifact.id" @onDeleteClick="deleteArtifact(artifact)">
            {{ artifact.name }}
          </Chip>
        </div>
      </div>
    </div>
    <div class="grow relative">
      <div class="absolute inset-0 overflow-y-auto">
        <Editor v-if="selectedArtifact.id" :fileName="selectedArtifact.name" :content="selectedArtifact.content"
                @onOpenTitleModal="openArtifactTitleModal" @onContentChange="updateArtifactContent"/>
        <Empty v-if="!artifacts.length" :icon="faFilePen">
          <template #title>
            No artifact created
          </template>
          <template #description>
            Add a new artifact by clicking the create button.
            <br/>
            Artifacts are files that the AI model will use as output for your project.
          </template>
          <template #button>
            Create a artifact
          </template>
        </Empty>
        <Empty v-if="artifacts.length && !selectedArtifact.id" :icon="faFilePen">
          <template #title>
            No artifact selected
          </template>
          <template #description>
            Select an artifact to view or edit its content.
          </template>
        </Empty>
      </div>
    </div>
    <div class="flex justify-center pt-4" v-if="selectedArtifact.id">
      <div class="grow overflow-x-auto flex items-center">
        <div class="italic text-sm -mr-0.5 text-gray-600">
          Versions )
        </div>
        <Version/>
      </div>
      <div class="flex justify-end space-x-2">
        <Button :icon="faSave" @click="saveArtifact">
          Save
        </Button>
        <Button :icon="faCopy" @click="copyArtifact">
          Copy
        </Button>
        <Button :icon="faTrash" @click="deleteArtifact(selectedArtifact)">
          Delete
        </Button>
      </div>
    </div>
  </div>
  <Modal v-if="showInputModal" @onClose="showInputModal = false">
    <template #title>
      Edit artifact name
    </template>
    <div>
      <input name="artifact-name" v-model="inputModalTitle" placeholder="Artifact name" autofocus class="border w-80"
             @keyup.enter="saveArtifactName">
    </div>
    <template #commands>
      <Button @click="saveArtifactName">
        Save
      </Button>
    </template>
  </Modal>
</template>
<script setup>
import Title from "@/components/Title.vue";
import Chip from "@/components/Chip.vue";
import Button from "@/components/Button.vue";
import Version from "@/views/project/Version.vue";
import { faCopy, faFileExport, faFilePen, faPlus, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import Editor from "@/components/Editor.vue";
import { onMounted, onUnmounted, ref, watch } from "vue";
import database from "@/services/database.js";
import Empty from "@/components/Empty.vue";
import { filter, Subject, takeUntil } from "rxjs";
import fileSaver from "@/services/file-saver.js";
import clipboard from "@/services/clipboard.js";
import Modal from "@/components/Modal.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const artifacts = ref([]);
const selectedArtifact = ref({});
const onDestroy$ = new Subject();
const showInputModal = ref(false);
const inputModalTitle = ref("");
const contentChangeTimeout = ref(-1);

const props = defineProps({
  project: Object,
})

watch(() => props.project.id, () => {
  loadArtifacts();
})

const loadArtifacts = () => {
  const projectId = props.project.id;
  const filter = x => x.projectId === projectId;
  artifacts.value = database.getByFilter("artifacts", filter);

  if (artifacts.value.length) {
    selectedArtifact.value = artifacts.value[0];
  } else {
    selectedArtifact.value = {};
  }
}

const createArtifact = () => {
  const projectId = props.project.id;

  const name = `artifact-${ new Date().getTime() }.txt`;

  const newArtifact = {
    projectId,
    name: name,
    content: "// hello, world!",
  };

  database.insert("artifacts", newArtifact);
  selectedArtifact.value = newArtifact;
}

const deleteArtifact = (artifact) => {
  if (!artifact.id) return;

  database.delete("artifacts", artifact.id);
  artifacts.value = artifacts.value.filter(x => x.id !== artifact.id);

  if (selectedArtifact.value.id === artifact.id) {
    selectedArtifact.value = {};
  }
}

const saveArtifact = () => {
  if (!selectedArtifact.value.id) return;
  fileSaver.saveFile(selectedArtifact.value.name, selectedArtifact.value.content);
}

const copyArtifact = () => {
  if (!selectedArtifact.value.id) return;
  clipboard.copy(selectedArtifact.value.content);
}

const openArtifactTitleModal = () => {
  if (!selectedArtifact.value.id) return;
  inputModalTitle.value = selectedArtifact.value.name;
  showInputModal.value = true;
}

const saveArtifactName = () => {
  if (!selectedArtifact.value.id) return;
  const update = { name: inputModalTitle.value };
  database.updateFields(selectedArtifact.value.id, update);
  showInputModal.value = false;
}

const updateArtifactContent = (content) => {
  if (!selectedArtifact.value.id) return;
  clearTimeout(contentChangeTimeout.value);

  contentChangeTimeout.value = setTimeout(() => {
    const update = { content };
    database.updateFields(selectedArtifact.value.id, update, false);
  }, 1000);
}

onMounted(() => {
  database.onDocumentInserted$
      .pipe(takeUntil(onDestroy$))
      .pipe(filter(x => x.table === "artifacts" && x.document.projectId === props.project.id))
      .subscribe(x => {
        artifacts.value.push(x.document)
        selectedArtifact.value = x.document;
      });

  database.onDocumentUpdated$
      .pipe(takeUntil(onDestroy$))
      .pipe(filter(x => x.projectId === props.project.id))
      .subscribe(x => {
        artifacts.value = artifacts.value.filter(y => y.id !== x.id);
        artifacts.value.push(x)
        selectedArtifact.value = x
      });
});

onUnmounted(() => {
  onDestroy$.next();
  onDestroy$.complete();
});
</script>
