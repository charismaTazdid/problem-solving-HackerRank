class ConfigManager {
  constructor() {
    this.databaseConfig = { /* database configuration */ };
    this.apiKey = "your_api_key";
    // Other application-wide configurations
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ConfigManager();
    }
    return this.instance;
  }

  getDatabaseConfig() {
    return this.databaseConfig;
  }

  getApiKey() {
    return this.apiKey;
  }

  // Additional methods to retrieve other configurations
}

// Usage
const configManager = ConfigManager.getInstance();

// Accessing configurations
const databaseConfig = configManager.getDatabaseConfig();
const apiKey = configManager.getApiKey();