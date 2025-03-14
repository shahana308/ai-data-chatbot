import { defineConfig } from "cypress";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("cypress-fail-fast/plugin")(on, config);

      return config;
    },
    baseUrl: "http://localhost:3000/",
    experimentalInteractiveRunEvents: true,
    viewportWidth: 1400,
    viewportHeight: 900,
    defaultCommandTimeout: 20000,
    requestTimeout: 20000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
  video: true,
});
