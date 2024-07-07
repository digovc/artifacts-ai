export const providers = [
  {
    name: 'openai',
    label: 'OpenAI',
    url: 'https://api.openai.com',
    models: ['gpt-4o', 'gpt-4-turbo', 'gpt-4', 'gpt-3.5-turbo']
  },
  {
    name: 'anthropic',
    label: 'Anthropic',
    url: 'https://api.anthropic.com',
    models: ['claude-3-5-sonnet-20240620', 'claude-3-opus-20240229', 'claude-3-sonnet-20240229', 'claude-3-haiku-20240307']
  },
  {
    name: 'groq',
    label: 'Groq',
    url: 'https://api.groq.com/openai',
    models: ['llama3-8b-8192', 'llama3-70b-8192', 'mixtral-8x7b-32768', 'gemma-7b-it']
  },
  { name: 'mistral', label: 'Mistral', url: 'https://api.mistral.ai', models: ['mistral-small', 'mistral-large'] },
  {
    name: 'deepseek',
    label: 'DeepSeek',
    url: 'https://api.deepseek.com',
    models: ['deepseek-chat', 'deepseek-coder']
  },
  {
    name: 'ollama',
    label: 'Ollama',
    url: 'http://localhost:11434',
    models: ['llama2', 'mistral', 'dolphin-mixtral']
  }
];
