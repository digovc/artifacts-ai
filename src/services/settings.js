export const SETTINGS_KEY = 'settings_0';

class Settings {

  isConfigured() {
    const settings = this.getSettings();
    return settings?.providers?.length > 0;
  }

  getSettings() {
    const settings = localStorage.getItem(SETTINGS_KEY);
    return JSON.parse(settings);
  }
}

export default new Settings();
