<template>
  <div class="h-full flex flex-col p-2 px-4">
    <div class="pb-4 flex space-x-4 items-center">
      <Title>Artifacts</Title>
      <FontAwesomeIcon :icon="faFilePen" class="text-lg mt-1"/>
    </div>
    <div class="flex space-x-2 pb-4">
      <div class="space-x-2">
        <IconButton :icon="faPlus" @click="createArtifact" title="Create artifact"/>
      </div>
      <div class="flex space-x-2 overflow-x-auto pb-4">
        <div v-for="artifact in artifacts" :key="artifact.id">
          <Chip :artifact="artifact" @onClick="selectArtifact(artifact)"
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
            <div @click="createArtifact">
              Create artifact
            </div>
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
        <Version v-for="(version, index) in selectedArtifact.versions" :key="index" @click="changeVersion(index)">
          v.{{ index + 1 }}
        </Version>
      </div>
      <div class="flex justify-end space-x-2">
        <IconButton :icon="faCopy" @click="copyArtifact" title="Copy artifact"/>
        <IconButton :icon="faSave" @click="saveArtifact" title="Save artifact"/>
        <IconButton :icon="faTrash" @click="deleteArtifact(selectedArtifact)" title="Delete artifact"/>
      </div>
    </div>
  </div>
  <Modal v-if="showInputModal" @onClose="showInputModal = false">
    <template #title>
      Edit artifact name
    </template>
    <div>
      <input ref="artifactNameInput" name="artifact-name" v-model="inputModalTitle" placeholder="Artifact name"
             autofocus class="border w-80 indent-1" @keyup.enter="saveArtifactName">
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
import { faCopy, faFilePen, faPlus, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import Editor from "@/components/Editor.vue";
import { nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import database from "@/services/database.js";
import Empty from "@/components/Empty.vue";
import { filter, Subject, takeUntil } from "rxjs";
import fileSaver from "@/services/file-saver.js";
import clipboard from "@/services/clipboard.js";
import Modal from "@/components/Modal.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import IconButton from "@/components/IconButton.vue";
import notification from "@/services/notification.js";

const artifacts = ref([]);
const selectedArtifact = ref({});
const onDestroy$ = new Subject();
const showInputModal = ref(false);
const inputModalTitle = ref("");
const artifactNameInput = ref(null);

const props = defineProps({
  project: Object,
})

watch(() => props.project.id, () => {
  loadArtifacts();
})

const loadArtifacts = () => {
  const projectId = props.project.id;
  const filter = x => x.projectId === projectId;
  artifacts.value = database.getByFilter("artifacts", filter).sort((a, b) => a.name.localeCompare(b.name));

  if (artifacts.value.length) {
    selectArtifact(artifacts.value[0])
  } else {
    selectArtifact({})
  }
}

const createArtifact = async () => {
  const projectId = props.project.id;
  const name = `artifact-${ new Date().getTime() }.txt`;
  const content = `# Artifact ${ new Date().getTime() }\n\n`;

  const newArtifact = {
    projectId,
    name: name,
    content: content,
  };

  database.insert("artifacts", newArtifact);
  artifacts.value.sort((a, b) => a.name.localeCompare(b.name));
  selectArtifact(newArtifact);
}

const deleteArtifact = (artifact) => {
  if (!artifact.id) return;

  database.delete("artifacts", artifact.id);
  artifacts.value = artifacts.value.filter(x => x.id !== artifact.id);

  if (selectedArtifact.value.id === artifact.id) {
    selectArtifact({});
  }

  notification.showNotification("Artifact deleted");
}

const saveArtifact = () => {
  if (!selectedArtifact.value.id) return;
  fileSaver.saveFile(selectedArtifact.value.name, selectedArtifact.value.content);
}

const copyArtifact = () => {
  if (!selectedArtifact.value.id) return;
  clipboard.copy(selectedArtifact.value.content);
}

const openArtifactTitleModal = async () => {
  if (!selectedArtifact.value.id) return;
  inputModalTitle.value = selectedArtifact.value.name;
  showInputModal.value = true;
  await nextTick();
  artifactNameInput.value.select();
}

const saveArtifactName = () => {
  if (!selectedArtifact.value.id) return;
  const newName = inputModalTitle.value;
  if (!newName) return;
  selectedArtifact.value.name = newName;
  const update = { name: newName };
  database.updateFields(selectedArtifact.value.id, update);
  artifacts.value.sort((a, b) => a.name.localeCompare(b.name));
  showInputModal.value = false;
}

const updateArtifactContent = (content) => {
  if (!selectedArtifact.value.id) return;
  selectedArtifact.value.versions = selectedArtifact.value.versions || [];
  selectedArtifact.value.versions.push(content);
  selectedArtifact.value.content = content;
  const versions = selectedArtifact.value.versions;
  const update = { content, versions };
  database.updateFields(selectedArtifact.value.id, update, false);
  notification.showNotification("Artifact content updated");
}

const changeVersion = index => {
  const content = selectedArtifact.value.versions[index];
  selectedArtifact.value.content = content;
  const update = { content };
  database.updateFields(selectedArtifact.value.id, update, false);
};

const selectArtifact = (artifact) => {
  artifact = artifact || {};
  selectedArtifact.value = artifact;
  nextTick(() => {
    const artifactTab = document.querySelector(`[key='${artifact.id}']`);
    if (artifactTab) {
      artifactTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });
}

onMounted(() => {
  database.onDocumentInserted$
      .pipe(takeUntil(onDestroy$))
      .pipe(filter(x => x.table === "artifacts" && x.document.projectId === props.project.id))
      .subscribe(x => {
        artifacts.value.push(x.document)
        artifacts.value.sort((a, b) => a.name.localeCompare(b.name));
        selectArtifact(x.document)
      });

  database.onDocumentUpdated$
      .pipe(takeUntil(onDestroy$))
      .pipe(filter(x => x.projectId === props.project.id))
      .subscribe(x => {
        artifacts.value = artifacts.value.filter(y => y.id !== x.id);
        artifacts.value.push(x)
        artifacts.value.sort((a, b) => a.name.localeCompare(b.name));
        selectArtifact(x)
      });
});

onUnmounted(() => {
  onDestroy$.next();
  onDestroy$.complete();
});
</script>
