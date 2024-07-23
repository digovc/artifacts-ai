import database from "@/services/database.js";
import streamProvider from "@/services/stream-provider.js";
import llmProvider from "@/services/llm-provider.js";
import settings from "@/services/settings.js";
import { providers } from "@/constants/providers.js";
import artifactsManager from "@/services/artifacts-manager.js";
import extensionExtractor from "@/services/extension-extractor.js";

class MessageSender {
  async send(message, projectId) {
    const messages = []

    const basePromptImport = await import("@/prompts/base-prompt.md");
    const basePromptDefault = basePromptImport.default;
    const basePromptResponse = await fetch(basePromptDefault);
    const basePrompt = await basePromptResponse.text();

    messages.push({ role: "system", content: basePrompt });
    const references = this._getReferencesText(projectId);

    if (references) {
      messages.push({ role: "user", content: references });
    }

    this._addReferencesImages(projectId, messages);

    const artifacts = artifactsManager.getArtifacts(projectId);

    if (artifacts) {
      messages.push({ role: "user", content: artifacts });
    }

    const historyMessages = database.getByFilter("messages", x => x.projectId === projectId);

    for (const historyMessage of historyMessages) {
      messages.push({ role: historyMessage.from, content: historyMessage.contentToHistory || historyMessage.content });
    }

    messages.push({ role: "user", content: message });

    let content = ''

    const onData = (part) => {
      content += part
      streamProvider.onData$.next(part)
    };

    streamProvider.onStart$.next(0)
    await llmProvider.sendMessage(messages, onData);
    streamProvider.onEnd$.next(0)

    const response = content;

    const result = artifactsManager.extractArtifacts(response);

    this._saveMessage(result.message, result.messageToHistory, response, projectId);
    artifactsManager.saveArtifacts(result.artifacts, projectId);
  }

  _getReferencesText(projectId) {
    const filtter = x => x.projectId === projectId && x.type === 'text';
    const references = database.getByFilter("references", filtter);
    if (!references || !references.length) return '## References\nNo references...'
    const lines = ['## References'];

    for (const reference of references) {
      const extension = extensionExtractor.getExtension(reference.name);

      lines.push(`<reference name="${ reference.name }">`);
      lines.push(reference.content);
      lines.push('</reference>');
    }

    return lines.join('\n');
  }

  _addReferencesImages(projectId, messages) {
    const filtter = x => x.projectId === projectId && x.type === 'image'
    const referencesImages = database.getByFilter("references", filtter);
    if (!referencesImages || !referencesImages.length) return;

    const message = { role: "user", content: [] };
    messages.push(message);

    for (const referenceImage of referencesImages) {
      message.content.push({ type: 'image_url', image_url: { url: referenceImage.content } });
    }
  }

  _saveMessage(message, messageToHistory, messageComplete, projectId) {
    const config = settings.getSettings()
    const provider = providers.find(p => p.label === config.providerSelected);
    const providerOnConfig = config.providers.find(p => p.name === config.providerSelected);

    const newProviderMessage = {
      content: message,
      contentToHistory: messageComplete,
      contentComplete: messageComplete,
      projectId,
      from: "assistant",
      provider: provider.label,
      model: providerOnConfig.model,
    };

    database.insert("messages", newProviderMessage);
  }
}

export default new MessageSender()
