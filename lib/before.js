var $util = require('util');
var $path = require('path');
var _ = require('lodash');

module.exports = function(scope, cb) {

	if (!scope.rootPath) {
		return cb(new Error(
			'Missing scope variable: `rootPath`\n' +
			'Please make sure it is specified and try again.'
		));
	}

	_.defaults(scope, {
		currentTime: new Date(),
		scaffolding: $path.resolve(__dirname, '../scaffolding')
	});

	cb();
};
