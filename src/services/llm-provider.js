import settings from "@/services/settings.js";
import { providers } from "@/constants/providers.js";

class LLMProvider {
  async sendMessage(messages, onData) {
    const config = settings.getSettings();
    if (!config.providers || !config.providers.length) throw new Error('No providers configured.');

    config.providerSelected = config.providerSelected || 0;
    if (config.providerSelected >= config.providers.length) config.providerSelected = 0;

    const providerOnConfig = config.providers[config.providerSelected];
    const selectedProviderName = providerOnConfig.name;
    const provider = providers.find(p => p.label === selectedProviderName);

    if (!provider) {
      throw new Error(`Provider ${ selectedProviderName } is not configured.`);
    }

    const url = this.getUrl(providerOnConfig, provider);

    const response = await fetch(url, {
      method: 'POST',
      headers: this.getHeaders(provider, providerOnConfig),
      body: this.getBody(messages, providerOnConfig),
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

        switch (provider.name.toLowerCase()) {
          case 'google':
            dataDone = this.receiveDataGoogle(line, onData);
            break;
          case 'ollama':
            dataDone = this.receiveDataOllama(line, onData);
            break;
          default:
            dataDone = this.receiveData(line, onData);
            break;
        }

        if (dataDone) break;
        if (provider.name.toLowerCase() === 'google' && reader.closed) break;
      }

      buffer = lines[lines.length - 1];
    }
  }

  getBody(messages, providerOnConfig) {
    switch (providerOnConfig.name.toLowerCase()) {
      case 'google':
        return this.getGoogleBody(messages);
      default:
        return JSON.stringify({
          max_tokens: 4096,
          messages: messages,
          model: providerOnConfig.model,
          stream: true,
        });
    }
  }

  getGoogleBody(messages) {
    const contents = [];
    messages?.forEach(message => {
      const role = message.role === 'assistant' ? 'model' : 'user';
      contents.push({
        role: role,
        parts: [{
          text: message.content
        }]
      });

      if (message.role === 'system') {
        contents.push({
          role: 'model',
          parts: [{
            text: 'Understood'
          }]
        });
      }
    });

    return JSON.stringify({ contents });
  }

  getHeaders(provider, providerOnConfig) {
    switch (providerOnConfig.name.toLowerCase()) {
      case 'google':
        return this.getGoogleHeaders(providerOnConfig);
      default:
        return {
          'Authorization': `Bearer ${ providerOnConfig.apiKey }`,
          'Content-Type': 'application/json',
        };
    }
  }

  getGoogleHeaders(providerOnConfig) {
    return {
      'x-goog-api-key': providerOnConfig.apiKey,
      'Content-Type': 'application/json',
    };
  }

  getUrl(providerOnConfig, provider) {
    switch (provider.name.toLowerCase()) {
      case 'google':
        return this.getGoogleUrl(providerOnConfig, provider);
      default:
        return `${ providerOnConfig.proxyUrl || provider.url }${ provider.path }`;
    }
  }

  getGoogleUrl(providerOnConfig, provider) {
    const url = providerOnConfig.proxyUrl || provider.url;
    const path = provider.path;
    return `${ url }${ path }/${ providerOnConfig.model }:streamGenerateContent?alt=sse`;
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

  receiveDataGoogle(line, onData) {
    const json = line.substring(6);
    const parsed = JSON.parse(json);
    if (!parsed.candidates.length) return false;
    onData(parsed.candidates[0].content.parts[0].text);
  }

  receiveDataOllama(line, onData) {
    const parsed = JSON.parse(line);
    if (parsed.done) return true;
    if (!parsed.message?.content) return;
    onData(parsed.message.content);
  }
}

export default new LLMProvider();
