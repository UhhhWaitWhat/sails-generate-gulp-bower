var path = require('path');
var merge = require('./merge-json');

function scaff(pat) {
	var scaffolding = path.resolve(__dirname, '../scaffolding');
	return path.join(scaffolding, pat);
}

module.exports = {
	before: require('./before'),
	templatesDirectory: path.resolve(__dirname, '../templates'),

	targets: {
		//Gulp stuff
		'./gulpfile.js': {copy: scaff('gulpfile.js')},
		
		//Bower stuff
		'./.bowerrc': {copy: scaff('.bowerrc')},
		'./bower.json': {template: 'bower.json'},

		//Other stuff
		'./.sailsrc': {exec: merge('.sailsrc')},
		'./package.json': { exec: merge('package.json')},
		'./views-in': {folder: {}},
	}
};