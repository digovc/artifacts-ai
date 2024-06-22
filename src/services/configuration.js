class Configuration {
  getConfig() {
    const configJson = localStorage.getItem('config') || '{}'
    return JSON.parse(configJson);
  }
}

export default new Configuration();
