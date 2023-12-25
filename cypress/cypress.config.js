const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      pageLoadTimeout: 100000
      
      
      // implement node event listeners here
    },
  },
});
