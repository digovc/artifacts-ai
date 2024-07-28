import database from "@/services/database.js";
import notification from "@/services/notification.js";

class ArtifactsManager {
  getArtifacts(projectId) {
    const filtter = x => x.projectId === projectId;
    const artifacts = database.getByFilter("artifacts", filtter);
    if (!artifacts || !artifacts.length) return '## Artifacts\nNo artifacts...'
    const lines = ['## Artifacts'];

    for (const artifact of artifacts) {
      lines.push(`<artifact name="${ artifact.name }">`);
      lines.push(artifact.content);
      lines.push('</artifact>');
    }

    return lines.join('\n');
  }

  saveArtifacts(artifacts, projectId) {
    if (!artifacts || !artifacts.length) return;

    for (const artifact of artifacts) {
      this._saveArtifact(artifact, projectId);
    }
  }

  extractArtifacts(response) {
    const lines = response.split('\n');
    const message = [];
    const messageToHistory = [];
    const artifacts = [];
    let currentArtifact = null;

    for (const line of lines) {
      if (line.trim().includes('<artifact name="')) {
        const name = line.replace('<artifact name="', '').replace('">', '').trim();
        currentArtifact = { name: name, contentLines: [] };
        continue;
      }

      if (line.trim().includes('</artifact>')) {
        let contentLines = currentArtifact.contentLines;
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

    this._processArtifactsParts(artifacts);

    return { message: message.join('\n'), messageToHistory, artifacts };
  }

  _saveArtifact(artifact, projectId) {
    if (!artifact || !artifact.name || !artifact.content) return;

    const filter = x => x.projectId === projectId && x.name === artifact.name;
    const existingArtifact = database.getByFilter("artifacts", filter);

    if (existingArtifact && existingArtifact.length) {
      this._updateArtifact(existingArtifact[0], artifact.content);
    } else {
      this._createArtifact(artifact, projectId);
    }
  }

  _updateArtifact(existing, newContent) {
    existing.content = newContent;
    existing.versions = existing.versions || [];
    existing.versions.push(newContent);
    database.update(existing);
    notification.showNotification(`Artifact ${ existing.name } updated!`);
  }

  _createArtifact(artifact, projectId) {
    const newArtifact = {
      name: artifact.name,
      content: artifact.content,
      projectId,
      versions: [artifact.content],
    };

    database.insert("artifacts", newArtifact);
    notification.showNotification(`Artifact ${ artifact.name } created!`);
  }

  _processArtifactsParts(artifacts) {
    for (const artifact of artifacts) {
      this._processArtifactParts(artifact);
    }
  }

  _processArtifactParts(artifact) {
    const content = artifact.content.trimStart();
    if (!content.startsWith('<modify_part>')) return;
    const modifications = content.split('<modify_part>');
    const existingArtifact = database.getByFilter("artifacts", x => x.name === artifact.name);
    if (!existingArtifact || !existingArtifact.length) return;
    let currentContent = existingArtifact[0].content;

    for (const modification of modifications) {
      if (!modification.trimStart().startsWith('<old_part>')) continue;
      const oldPart = modification.substring('<old_part>'.length + 1, modification.indexOf('</old_part>'));
      const newPart = modification.substring(modification.indexOf('<new_part>') + '<new_part>'.length, modification.indexOf('</new_part>'));
      currentContent = currentContent.replace(oldPart, newPart);
    }

    artifact.content = currentContent;
  }
}

export default new ArtifactsManager()
