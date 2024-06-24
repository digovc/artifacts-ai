class Settings {
  isConfigured() {
    const settings = this.getSettings();
    return settings?.providers?.openai?.apiKey || false;
  }

  getSettings() {
    const settings = localStorage.getItem('settings_0');
    return JSON.parse(settings);
  }
}

export default new Settings();
