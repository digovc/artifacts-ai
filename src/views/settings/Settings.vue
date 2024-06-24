<template>
  <div class="p-2 space-y-12 w-2/4 m-auto">
    <Title>Settings</Title>
    <Group title="General">
      <Subgroup title="Theme">
        <Field v-model="settings.general.theme" :options="['light', 'dark']" label="Theme" type="select"/>
      </Subgroup>
    </Group>
    <Group title="LLM Provider">
      <Subgroup title="Configuration">
        <Field v-model="settings.provider.name" :options="providerOptions.map(option => option.label)" label="Provider"
               type="select"/>
        <Field v-model="settings.provider.model" :options="modelsForSelectedProvider" label="Model" type="select"/>
        <Field v-model="settings.provider.apiKey" label="API Key" type="password"/>
      </Subgroup>
    </Group>
    <Button @click="saveSettings">Save Settings</Button>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import Group from '@/components/Group.vue';
import Subgroup from '@/components/Subgroup.vue';
import Field from '@/components/Field.vue';
import Button from '@/components/Button.vue';
import database from '@/services/database.js';
import Title from "@/components/Title.vue";
import { providers } from '@/services/providers.js';

const settings = ref({
  general: { theme: 'light' },
  provider: { name: '', url: '', model: '', apiKey: '' }
});

const providerOptions = providers;

const modelsForSelectedProvider = ref([]);

const loadSettings = () => {
  const settingsData = database.get('settings_0');
  if (!settingsData?.id) return;
  settingsData.provider = settingsData.provider || {};
  settings.value = settingsData;
};

const saveSettings = () => {
  const selectedProvider = providerOptions.find(option => option.label === settings.value.provider.name);
  settings.value.provider.url = selectedProvider ? selectedProvider.url : '';
  settings.value.id = 'settings_0';
  database.update(settings.value);
};

watch(() => settings.value.provider.name, (newProvider) => {
  const selectedProvider = providerOptions.find(option => option.label === newProvider);
  modelsForSelectedProvider.value = selectedProvider ? selectedProvider.models : [];
  settings.value.provider.model = '';
});

onMounted(() => {
  loadSettings();
});
</script>
