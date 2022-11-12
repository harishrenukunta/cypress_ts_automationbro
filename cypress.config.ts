import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		excludeSpecPattern: 'cypress/e2e/**/*.js',
		specPattern: ['cypress/e2e/Basic/*.ts'],
		baseUrl: 'http://practice.automationbro.com',
	},
});
