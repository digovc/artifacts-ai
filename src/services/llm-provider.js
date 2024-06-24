import settings from "@/services/settings.js";
import { providers } from "@/constants/providers.js";

class LLMProvider {
  async sendMessage(messages, onData) {
    const config = settings.getSettings();
    const provider = providers.find(p => p.label === config.provider.name);
    const url = provider.url;
    const apiKey = config.provider.apiKey;
    const model = config.provider.model;

    const response = await fetch(`${ url }/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ apiKey }`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: model,
        stream: true,
        messages: messages,
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
      if (done) {
        break;
      }

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");

      for (let i = 0; i < lines.length - 1; i++) {
        const line = lines[i].trim();
        if (line.startsWith("data: ")) {
          const data = line.substring(6);
          if (data === "[DONE]") {
            return;
          }
          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices[0].delta?.content || "";
            onData(content);
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        }
      }

      buffer = lines[lines.length - 1];
    }
  }
}

export default new LLMProvider();
