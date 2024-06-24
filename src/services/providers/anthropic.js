import axios from "axios";
import settings from "@/services/settings.js";

class Anthropic {
  async sendMessage(message) {
    const config = settings.getSettings()
    const ANTHROPIC_API_KEY = config.providers.anthropic.apiKey

    const response = await axios({
      method: 'post',
      url: 'https://api.anthropic.com/v1/messages',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      data: {
        model: 'claude-3-5-sonnet-20240620',
        messages: [
          { role: 'user', content: message }
        ]
      }
    });

    console.log(response.data);
  }
}

export default new Anthropic();
