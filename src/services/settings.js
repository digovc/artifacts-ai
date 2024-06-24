class Settings {
  getSettings() {
    const settings = localStorage.getItem('settings_0');
    return JSON.parse(settings);
  }
}

export default new Settings();
