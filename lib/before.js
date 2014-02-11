var $util = require('util');
var $path = require('path');
var $fs = require('fs');
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
		scaffolding: $path.resolve(__dirname, '../scaffolding'),
		templateDirectory: $path.resolve(__dirname, '../templates'),
		pkg: JSON.parse($fs.readFileSync($path.join(scope.rootPath, 'package.json')))
	});

	cb();
};
