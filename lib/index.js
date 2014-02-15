var $path = require('path');
var $merge = require('./merge-json');
var $remove = require('./remove');

var scaffolding = $path.resolve(__dirname, '../scaffolding');

module.exports = {
	before: require('./before'),
	templatesDirectory: $path.resolve(__dirname, '../templates'),

	targets: {
		'./gulpconf.js': {copy: $path.join(scaffolding, 'gulpconf.js')},
		'./gulpfile.js': {copy: $path.join(scaffolding, 'gulpfile.js')},
		'./.bowerrc': {copy: $path.join(scaffolding, '.bowerrc')},
		'./bower.json': {template: 'bower.json'},

		'./assets/js-modules/index.js': {copy: $path.join(scaffolding, 'assets/js-modules/index.js')},
		'./assets/css': {folder: {}},
		'./assets/img': {folder: {}},
		'./assets/styles': {exec: $remove},
		'./assets/images': {exec: $remove},

		'./.sailsrc': {exec: $merge('.sailsrc')},
		'./Gruntfile.js': {exec: $remove},
		'./package.json': { exec: $merge('package.json')}
	}
};