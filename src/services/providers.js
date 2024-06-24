export const providers = [
  { name: 'openai', label: 'OpenAI', url: 'https://api.openai.com', models: ['davinci', 'curie', 'babbage', 'ada'] },
  { name: 'anthropic', label: 'Anthropic', url: 'https://api.anthropic.com', models: ['claude-v1', 'claude-v2'] },
  { name: 'groq', label: 'Groq', url: 'https://api.groq.com', models: ['groq-model-1', 'groq-model-2'] },
  { name: 'mistral', label: 'Mistral', url: 'https://api.mistral.com', models: ['mistral-small', 'mistral-large'] },
  {
    name: 'deepseek',
    label: 'DeepSeek',
    url: 'https://api.deepseek.com',
    models: ['deepseek-standard', 'deepseek-advanced']
  }
];
