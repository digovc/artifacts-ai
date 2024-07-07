<template>
  <div class="space-y-12 w-2/4 m-auto h-full overflow-y-auto p-8">
    <Title>Settings</Title>
    <Group title="General">
      <Subgroup title="Theme">
        <Field v-model="settings.general.theme" :options="['light', 'dark']" label="Theme" type="select"/>
      </Subgroup>
    </Group>
    <Group title="LLM Providers">
      <Button @click="addProvider">Add Provider</Button>
      <div v-for="(provider, index) in settings.providers" :key="index" class="pb-4 mb-4">
        <Subgroup :title="'Provider ' + (index + 1)">
          <Field v-model="provider.name" :options="providerOptions.map(option => option.label)" label="Provider"
                 type="select"/>
          <Field v-model="provider.model" :options="getModelsForProvider(provider.name)" label="Model" type="select"/>
          <Field v-if="provider.model === 'custom'" v-model="provider.customModel" label="Custom Model"
                 type="text"/>
          <Field v-model="provider.apiKey" label="API Key" type="password"/>
          <Field v-model="provider.proxyUrl" label="Proxy URL" type="text"/>
          <Button class="mt-2" @click="() => removeProvider(index)">Remove</Button>
        </Subgroup>
      </div>
    </Group>
    <Button @click="saveSettings">Save Settings</Button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Group from '@/components/Group.vue';
import Subgroup from '@/components/Subgroup.vue';
import Field from '@/components/Field.vue';
import Button from '@/components/Button.vue';
import database from '@/services/database.js';
import Title from "@/components/Title.vue";
import { providers } from "@/constants/providers.js";
import { SETTINGS_KEY } from "@/services/settings.js";

const settings = ref({
  general: { theme: 'light' },
  providers: []
});

const providerOptions = providers;

const loadSettings = () => {
  const settingsData = database.get(SETTINGS_KEY);
  if (!settingsData?.id) return;
  settingsData.providers = settingsData.providers || [];
  settingsData.providers = settingsData.providers.map(provider => {
    const selectedProvider = providerOptions.find(option => option.label === provider.name);
    const models = selectedProvider ? [...selectedProvider.models, 'custom'] : ['custom'];
    if (!models.includes(provider.model)) {
      provider.customModel = provider.model;
      provider.model = 'custom';
    }
    return provider;
  });
  settings.value = settingsData;
};

const saveSettings = () => {
  const settingsToSave = JSON.parse(JSON.stringify(settings.value));
  settingsToSave.providers = settingsToSave.providers.map(provider => {
    const selectedProvider = providerOptions.find(option => option.label === provider.name);
    provider.url = selectedProvider ? selectedProvider.url : '';
    if (provider.model === 'custom') {
      provider.model = provider.customModel;
    }
    return provider;
  });

  if (settingsToSave.providers.length && !settingsToSave.providerSelected) {
    settingsToSave.providerSelected = settingsToSave.providers[0].name;
  }

  settingsToSave.id = SETTINGS_KEY;
  database.update(settingsToSave);
  loadSettings(); // Reload settings after saving
};

const addProvider = () => {
  settings.value.providers.push({ name: '', model: '', customModel: '', apiKey: '', proxyUrl: '' });
};

const removeProvider = (index) => {
  settings.value.providers.splice(index, 1);
};

const getModelsForProvider = (providerName) => {
  const selectedProvider = providerOptions.find(option => option.label === providerName);
  return selectedProvider ? [...selectedProvider.models, 'custom'] : ['custom'];
};

onMounted(() => {
  loadSettings();
});
</script>
