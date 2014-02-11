var sailsgen = require('sails-generate')
	, path = require('path');

var scope = {
	generatorType: 'gulp-bower',
	rootPath: process.cwd(),
	modules: {
		'gulp-bower': path.resolve(__dirname, '../lib')
	},

	//generatorName: process.argv[2],
};

sailsgen(scope, function (err) {
	if (err) throw err;

	console.log('Done.');
});

