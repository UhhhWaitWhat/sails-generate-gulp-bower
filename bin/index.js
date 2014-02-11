var sailsgen = require('sails-generate')
	, path = require('path');

var scope = {
	generatorType: 'webapp',
	rootPath: process.cwd(),
	modules: {
		'webapp': path.resolve(__dirname, '../lib')
	},

	//generatorName: process.argv[2],
};

sailsgen(scope, function (err) {
	if (err) throw err;

	console.log('Done.');
});

