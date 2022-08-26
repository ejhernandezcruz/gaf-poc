const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f8nz46',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   
  },
});
