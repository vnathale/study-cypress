const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '48k6qh',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      projectId: "48k6qh"
    },
  },
});


