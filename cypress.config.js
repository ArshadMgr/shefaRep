const { defineConfig } = require("cypress");


module.exports = defineConfig({

  viewportWidth: 1280,
  viewportHeight: 720,


  e2e: {
    projectId: "xgvkov",
    setupNodeEvents(on, config) {
      // implement node event listeners here

      
    },

    baseUrl: 'https://abc.mypaperlessoffice.com/app/Sys/',
    //baseUrl: 'https://mypaperlessoffice-com-staging.azurewebsites.net/app/',

  },
  pageLoadTimeout: 1000000,
  video: false,
  numTestsKeptInMemory: 0,
  requestTimeout: 9000000,
  responseTimeout: 9000000,
    "chromeWebSecurity": false,
    "chromeWebSecurity": false,
    "redirectionLimit": 1000

    
  

});
