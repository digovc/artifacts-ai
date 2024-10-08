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
}

export default new ArtifactsManager()
