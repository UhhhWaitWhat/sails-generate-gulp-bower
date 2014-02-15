//Dependencies
var gulp		= require('gulp'),
	concat		= require('gulp-concat'),
	uglify		= require('gulp-uglify'),
	bower		= require('gulp-bower-files'),
	browserify	= require('gulp-browserify'),
	minify		= require('gulp-minify-css'),
	filter		= require('gulp-filter'),
	handlebars	= require('gulp-handlebars'),
	ehandlebars = require('gulp-ember-handlebars'),
	clean		= require('gulp-clean');

var config = require('./gulpconf');

//Prefix our arrays
var inv = [], arrs = ['scripts', 'scriptsBrowserify', 'styles', 'templates']
for(var x in arrs) {
	inv[arrs[x]] = config[arrs[x]].map(function(val) {
		return '!' + val;
	});
	config[arrs[x]] = config[arrs[x]].map(function(val) {
		return config.src + '/' + val;
	});
}

//Compiles js files into two files, bundle.js, browserify.js and bower.js
gulp.task('scripts', ['clean'], function() {
	//Our normal scripts
	gulp.src(config.scripts, {base: config.src})
		.pipe(concat('bundles/bundle.js'))
		.pipe(uglify({outSourceMap: true}))
		.pipe(gulp.dest(config.destination));

	//Our browserified scripts
	gulp.src(config.scriptsBrowserify, {base: config.src})
		.pipe(browserify({debug: true}))
		.pipe(concat('bundles/browserify.js'))
		.pipe(uglify({outSourceMap: true}))
		.pipe(gulp.dest(config.destination));

	//Our bower scripts
	bower()
		.pipe(filter('**/*.js'))
		.pipe(concat('bundles/bower.js'))
		.pipe(uglify({outSourceMap: true}))
		.pipe(gulp.dest(config.destination));
});

//Compiles css files into two files, bundle.css and bower.css
gulp.task('styles', ['clean'], function() {
	//Our normal styles
	gulp.src(config.styles, {base: config.src})
		.pipe(concat('bundles/bundle.css'))
		.pipe(minify())
		.pipe(gulp.dest(config.destination));

	//Our bower styles
	bower()
		.pipe(filter('**/*.css'))
		.pipe(concat('bundles/bower.css'))
		.pipe(minify())
		.pipe(gulp.dest(config.destination));
});

//Compiles handlebars templates into single file templates.js
gulp.task('templates', ['clean'], function() {
	gulp.src(config.templates, {base: config.src})
		.pipe(handlebars({wrapped: true}))
		.pipe(concat('bundles/templates.js'))
		.pipe(uglify({outSourceMap: true}))
		.pipe(gulp.dest(config.destination));
});

//Combiles handlebars templates in a way ember can use them
gulp.task('templates-ember', ['clean'], function() {
	gulp.src(config.templates, {base: config.src})
		.pipe(ehandlebars({
			outputType: 'browser',
			templateRoot: ''
		}))
		.pipe(concat('bundles/templates.js'))
		.pipe(uglify({outSourceMap: true}))
		.pipe(gulp.dest(config.destination));
});

//Moves all the remaining assets to the destination
gulp.task('assets', ['clean'], function() {
	//Our normal assets
	gulp.src(config.src + '/**/*.*', {base: config.src})
		.pipe(filter(inv.scripts))
		.pipe(filter(inv.scriptsBrowserify))
		.pipe(filter(inv.styles))
		.pipe(filter(inv.templates))
		.pipe(gulp.dest(config.destination));

	//Our bower assets
	bower()
		.pipe(filter('**/*.!(css|js)'))
		.pipe(gulp.dest(config.destination + '/components'));
});

//Remove existing stuff
gulp.task('clean', function(cb) {
	gulp.src(config.destination, {read: false})
		.pipe(clean())
		.on('end', cb);
});

//Combine our tasks into build and watch
gulp.task('default', ['scripts', 'styles', 'templates', 'assets']);
gulp.task('watch', ['default'], function() {
	gulp.watch(config.src + '/**/*', ['default']);
});