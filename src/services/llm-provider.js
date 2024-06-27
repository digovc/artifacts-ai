import settings from "@/services/settings.js";
import { providers } from "@/constants/providers.js";

class LLMProvider {
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

    const response = await fetch(`${ url }/v1/chat/completions`, {
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
        if (line.startsWith("data: ")) {
          const data = line.substring(6);
          if (data === "[DONE]") return;
          if (data === '{"type":"message_stop"}') return;

          const parsed = JSON.parse(data);

          if (parsed.choices?.length && parsed.choices[0].delta?.content) {
            onData(parsed.choices[0].delta?.content);
          } else if (parsed.delta?.text) {
            onData(parsed.delta?.text);
          }
        }
      }

      buffer = lines[lines.length - 1];
    }
  }
}

export default new LLMProvider();
