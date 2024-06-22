import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'


const app = createApp(App)

app.use(router)

app.use(VueMonacoEditorPlugin, {
  paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs' },
})

app.mount('#app')
