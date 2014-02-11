var $fs = require('fs-extra')

module.exports = function(scope, cb) {
	var todelete = scope.rootPath;

	$fs.remove(todelete, cb);
}