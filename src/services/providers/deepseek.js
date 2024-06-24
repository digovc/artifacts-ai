import settings from "@/services/settings.js";

class DeepSeek {
  async sendMessage(messages, onData) {
    const config = settings.getSettings();
    const DEEPSEEK_API_KEY = config.providers.deepseek.apiKey;

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ DEEPSEEK_API_KEY }`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-coder',
        stream: true,
        frequency_penalty: 0,
        presence_penalty: 0,
        temperature: 0.6,
        top_p: 1,
        messages: messages
      })
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

export default new DeepSeek();
