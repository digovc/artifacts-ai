<template>
  <div class="p-2 space-y-12 w-2/4 m-auto">
    <Title>Settings</Title>
    <Group title="General">
      <Subgroup title="Theme">
        <Field v-model="settings.general.theme" :options="['light', 'dark']" label="Theme" type="select"/>
      </Subgroup>
    </Group>
    <Group title="LLM Providers">
      <Subgroup title="OpenAI">
        <Field v-model="settings.providers.openai.apiKey" label="API Key" type="password"/>
      </Subgroup>
      <Subgroup title="Anthropic">
        <Field v-model="settings.providers.anthropic.apiKey" label="API Key" type="password"/>
      </Subgroup>
      <Subgroup title="DeepSeek">
        <Field v-model="settings.providers.deepseek.apiKey" label="API Key" type="password"/>
      </Subgroup>
      <Subgroup title="Groq">
        <Field v-model="settings.providers.groq.apiKey" label="API Key" type="password"/>
      </Subgroup>
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

const settings = ref({
  general: {
    theme: 'light',
  },
  providers: {
    openai: {
      apiKey: '',
    },
    anthropic: {
      apiKey: '',
    },
    deepseek: {
      apiKey: '',
    },
    groq: {
      apiKey: '',
    },
  },
});

const loadSettings = () => {
  const settingsData = database.get('settings_0');

  if (!settingsData?.id) return

  settings.value = settingsData;
  settings.value.providers.deepseek = settings.value.providers.deepseek || { apiKey: '' }
  settings.value.providers.groq = settings.value.providers.groq || { apiKey: '' }
};

const saveSettings = () => {
  settings.value.id = 'settings_0';
  database.update(settings.value);
};

onMounted(() => {
  loadSettings();
});
</script>
