//Require dependencies
var Gulper = require('gulper');
var gulp = require('gulp');
var stat = require('gulper-static');
var bower = require('gulper-bower');

//Setup gulper
var gulper = new Gulper({
	dest: '.tmp/public',
	views: {
		src: 'views-in/**',
		dest: 'views'
	}
});

//Attach our plugins
gulper.plugin(bower.js, []);
gulper.plugin(bower.css, []);
gulper.plugin(bower.assets, []);
gulper.plugin(stat.js('assets/js/**/*', 'assets'), ['bower']);
gulper.plugin(stat.css('assets/css/**/*', 'assets'), ['bower']);
gulper.plugin(stat.assets('assets/other/**/*', 'assets'), ['bower']);

//Bind our gulp tasks
gulper.attach(gulp);
gulp.task('default', ['build']);