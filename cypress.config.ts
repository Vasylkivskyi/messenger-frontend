import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  e2e: {
    // setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
