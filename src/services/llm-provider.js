import settings from "@/services/settings.js";
import { providers } from "@/constants/providers.js";

class LLMProvider {
  getPath(provider) {
    return provider.path;
  }

  async sendMessage(messages, onData) {
    const config = settings.getSettings();
    const selectedProviderName = config.providerSelected;
    const provider = providers.find(p => p.label === selectedProviderName);
    const providerOnConfig = config.providers.find(p => p.name === selectedProviderName);

    if (!provider) {
      throw new Error(`Provider ${ selectedProviderName } is not configured.`);
    }

    const url = providerOnConfig.proxyUrl || provider.url;
    const apiKey = providerOnConfig.apiKey;
    const model = providerOnConfig.model;
    const path = this.getPath(provider);

    const response = await fetch(`${ url }${ path }`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ apiKey }`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        max_tokens: 4096,
        messages: messages,
        model: model,
        stream: true,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${ response.status }`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");

      for (let i = 0; i < lines.length - 1; i++) {
        const line = lines[i].trim();

        let dataDone = false

        switch (provider.name) {
          case 'ollama':
            dataDone = this.receiveDataOllama(line, onData);
            break;
          default:
            dataDone = this.receiveData(line, onData);
            break;
        }

        if (dataDone) break;
      }

      buffer = lines[lines.length - 1];
    }
  }

  receiveData(line, onData) {
    if (!line.startsWith("data: ")) return false;

    const data = line.substring(6);
    if (data === "[DONE]") return true;
    if (data === '{"type":"message_stop"}') return true;
    const parsed = JSON.parse(data);

    if (parsed.choices?.length && parsed.choices[0].delta?.content) {
      onData(parsed.choices[0].delta?.content);
    } else if (parsed.delta?.text) {
      onData(parsed.delta?.text);
    }
  }

  receiveDataOllama(line, onData) {
    const parsed = JSON.parse(line);
    if (parsed.done) return true;
    if (!parsed.message?.content) return;
    onData(parsed.message.content);
  }
}

export default new LLMProvider();
