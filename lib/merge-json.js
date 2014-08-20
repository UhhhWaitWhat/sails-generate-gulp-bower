var fs = require('fs');
var path = require('path');
var _ = require('lodash');

_.defaults = require('merge-defaults');


module.exports = function(output) {
	return function(scope, cb) {
		var inputPath = path.join(scope.scaffolding, output);
		var outputPath = scope.rootPath;
		merge(inputPath, outputPath, cb);
	};
};

function merge(inputFile, outputFile, cb) {
	fs.readFile(inputFile, {encoding: 'utf8'}, function(err, from) {
		if(err) from='{}';
		fs.readFile(outputFile, {encoding: 'utf8'}, function(err, to) {
			if(err) to='{}';

			from = JSON.parse(from);
			to = JSON.parse(to);

			_.defaults(to, from);
			fs.writeFile(outputFile, JSON.stringify(to, null, '  '), cb);
		});
	});
}