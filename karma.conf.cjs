const {createDefaultConfig} = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = config => {
    config.set(
        merge(createDefaultConfig(config), {
            frameworks: ['mocha', 'chai'],
            client: {
                mocha: {ui: 'bdd'}
            },
            files: [
                {
                    pattern: config.grep ? config.grep : 'src/**/*.test.js',
                    type: 'module'
                },
            ],
            esm: {
                // if you are using 'bare module imports' you will need this option
                nodeResolve: true,
            },
	    browsers: ['ChromeHeadlessNoSandbox'],
		customLaunchers: {
	    	ChromeHeadlessNoSandbox: {
        	base: 'ChromeHeadless',
        	flags: ['--no-sandbox']
    		}
	    },	
        }),
    );
    return config;
}

