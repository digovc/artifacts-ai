class ExtensionExtractor {
  getExtension(name) {
    const defaultExtension = 'txt';
    if (!name) return defaultExtension;
    if (!name.includes('.')) return defaultExtension;
    return name.split('.').pop();
  }
}

export default new ExtensionExtractor()
