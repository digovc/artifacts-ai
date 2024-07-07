<template>
  <div class="mb-5 flex space-x-2 items-center">
    <label :for="label" class="block mb-1 whitespace-nowrap w-32">{{ label }}</label>
    <input v-if="type === 'text'" :id="label" :value="modelValue" @input="updateValue" class="w-full p-2 border rounded"
           type="text"/>
    <input v-if="type === 'password'" :id="label" :value="modelValue" @input="updateValue" class="w-full p-2 border rounded"
           type="password"/>
    <select v-if="type === 'select'" :id="label" :value="modelValue" @change="updateValue"
            class="w-full p-2 border rounded">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<script setup>
  defineProps({
  label: String,
  type: String,
  options: Array,
  modelValue: [String, Number],
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
