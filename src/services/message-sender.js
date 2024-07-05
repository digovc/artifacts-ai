import database from "@/services/database.js";
import streamProvider from "@/services/stream-provider.js";
import llmProvider from "@/services/llm-provider.js";
import settings from "@/services/settings.js";
import { providers } from "@/constants/providers.js";
import notification from "@/services/notification.js";

class MessageSender {
  async send(message, projectId) {
    const messages = []

    const basePromptImport = await import("@/prompts/base-prompt.md");
    const basePromptDefault = basePromptImport.default;
    const basePromptResponse = await fetch(basePromptDefault);
    const basePrompt = await basePromptResponse.text();

    messages.push({ role: "system", content: basePrompt });
    const references = this._getReferences(projectId);

    if (references) {
      messages.push({ role: "user", content: references });
    }

    const artifacts = this._getArtifacts(projectId);

    if (artifacts) {
      messages.push({ role: "user", content: artifacts });
    }

    const historyMessages = database.getByFilter("messages", x => x.projectId === projectId);

    for (const historyMessage of historyMessages) {
      messages.push({ role: historyMessage.from, content: historyMessage.contentToHistory || historyMessage.content });
    }

    messages.push({ role: "user", content: message });

    const messagesAlternated = [messages[0]]

    for (let i = 1; i < messages.length; i++) {
      const lastMessage = messagesAlternated[messagesAlternated.length - 1];
      if (lastMessage.role === messages[i].role) {
        lastMessage.content += '\n' + messages[i].content;
      } else {
        messagesAlternated.push(messages[i]);
      }
    }

    let content = ''

    const onData = (part) => {
      content += part
      streamProvider.onData$.next(part)
    };

    streamProvider.onStart$.next(0)
    await llmProvider.sendMessage(messagesAlternated, onData);
    streamProvider.onEnd$.next(0)

    const response = content;

    const result = this._extractArtifacts(response);

    this._saveMessage(result.message, result.messageToHistory, response, projectId);
    this._saveArtifacts(result.artifacts, projectId);
  }

  _getReferences(projectId) {
    const filtter = x => x.projectId === projectId;
    const references = database.getByFilter("references", filtter);
    if (!references || !references.length) return '## References\nNo references...'
    const lines = ['## References'];

    for (const reference of references) {
      const extension = this._getExtension(reference.name);

      lines.push(`--reference_start {{ ${ reference.name } }}`);
      lines.push('```' + extension);
      lines.push(reference.content);
      lines.push('```');
      lines.push('--reference_end');
    }

    return lines.join('\n');
  }

  _getArtifacts(projectId) {
    const filtter = x => x.projectId === projectId;
    const artifacts = database.getByFilter("artifacts", filtter);
    if (!artifacts || !artifacts.length) return '## Artifacts\nNo artifacts...'
    const lines = ['## Artifacts'];

    for (const artifact of artifacts) {
      const extension = this._getExtension(artifact.name);
      lines.push(`--artifact_start {{ ${ artifact.name } }}`);
      lines.push('```' + extension);
      lines.push(artifact.content);
      lines.push('```');
      lines.push('--artifact_end');
    }

    return lines.join('\n');
  }

  _getExtension(name) {
    const defaultExtension = 'txt';
    if (!name) return defaultExtension;
    if (!name.includes('.')) return defaultExtension;
    return name.split('.').pop();
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

  _saveArtifacts(artifacts, projectId) {
    if (!artifacts || !artifacts.length) return;

    for (const artifact of artifacts) {
      this._saveArtifact(artifact, projectId);
    }
  }

  _saveArtifact(artifact, projectId) {
    if (!artifact || !artifact.name || !artifact.content) return;
    const filter = x => x.projectId === projectId && x.name === artifact.name;
    const existingArtifact = database.getByFilter("artifacts", filter);

    if (existingArtifact && existingArtifact.length) {
      const existing = existingArtifact[0];
      existing.content = artifact.content;
      existing.versions = existing.versions || [];
      existing.versions.push(artifact.content);
      database.update(existing);
      notification.showNotification(`Artifact ${ artifact.name } updated!`);
      return;
    }

    const newArtifact = {
      name: artifact.name,
      content: artifact.content,
      projectId,
      versions: [
        artifact.content,
      ],
    };

    database.insert("artifacts", newArtifact);
    notification.showNotification(`Artifact ${ artifact.name } created!`);
  }

  _extractArtifacts(response) {
    const lines = response.split('\n');
    const message = [];
    const messageToHistory = [];
    const artifacts = [];
    let currentArtifact = null;

    for (const line of lines) {
      if (line.trim().includes('--artifact_start')) {
        const name = line.replace('--artifact_start', '').trim();
        currentArtifact = { name: name, contentLines: [] };
        continue;
      }

      if (line.trim().includes('--artifact_end')) {
        let contentLines = currentArtifact.contentLines;
        contentLines.shift();
        contentLines.pop();
        currentArtifact.content = contentLines.join('\n');
        const name = currentArtifact.name;
        message.push(`**${ name }**`);
        artifacts.push(currentArtifact);
        currentArtifact = null;
        continue;
      }

      if (currentArtifact) {
        currentArtifact.contentLines.push(line);
        continue;
      }

      message.push(line);
      messageToHistory.push(line);
    }

    return { message: message.join('\n'), messageToHistory, artifacts };
  }
}

export default new MessageSender()
