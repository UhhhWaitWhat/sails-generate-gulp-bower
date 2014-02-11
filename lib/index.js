var $path = require('path');
var $merge = require('./merge-json');

var scaffolding = $path.resolve(__dirname, '../scaffolding');

module.exports = {
	before: require('./before'),

	targets: {
		'./gulpconf.js': {copy: $path.join(scaffolding, 'gulpconf.js')},
		'./gulpfile.js': {copy: $path.join(scaffolding, 'gulpfile.js')},
		'./bower.json': {copy: $path.join(scaffolding, 'bower.json')},
		'./.bowerrc': {copy: $path.join(scaffolding, '.bowerrc')},
		'./assets/js-modules/index.js': {copy: $path.join(scaffolding, 'assets/js-modules/index.js')},
		'./assets/css': {folder: {}},
		'./assets/templates': {folder: {}},
		'./assets/js': {folder: {}},
		'./package.json': { exec: $merge('package.json')}
	}
};