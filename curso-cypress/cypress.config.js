const { defineConfig } = require("cypress");

module.exports = defineConfig ({
  projectId: "ajrigf",
  e2e: {
    setupNodeEvents(on, config) {
      video: true
      // implement node event listeners here
    },
  },
});

/*
module.exports = defineConfig({
  projectId: "ajrigf",
  e2e: {
      setupNodeEvents(on, config) {
        "video"; true,
          { "reporter"; "mochawesome",
              "reporterOptions"; 
                  { "reportDir"; "cypress/report/mochawesome-report",
                  "overwrite"; true,
                  "html"; true,
                  "json"; false,
                  "timestamp"; "mmddyyyy_HHMMss" }}
      },
  },
});
*/