const path = require('path');

module.exports = function override(config, env) {
	console.log(config);
	return {
		...config,
		resolve: {
			...config.resolve,
			alias: {
				'@': path.join(__dirname, 'src'),
			},
		},
	};
};
