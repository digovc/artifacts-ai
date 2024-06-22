import configuration from "@/services/configuration.js";
import axios from "axios";

class OpenAI {
  async sendMessage(messages) {
    const config = configuration.getConfig()
    const OPENAI_API_KEY = config.providers.openai.apiKey

    const response = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/chat/completions',
      headers: {
        'authorization': `Bearer ${ OPENAI_API_KEY }`,
        'content-type': 'application/json'
      },
      data: {
        model: 'gpt-4o',
        max_tokens: 1024,
        messages: messages
      }
    });

    return response.data
  }
}

export default new OpenAI();
