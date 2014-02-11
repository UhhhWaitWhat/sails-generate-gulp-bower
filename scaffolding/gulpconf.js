module.exports = {
	src: 'assets',
	destination: '.tmp',

	scripts: [
		'js/**/*.js'
	],

	scriptsBrowserify: [
		'js-modules/index.js'
	],

	styles: [
		'css/**/*.css'
	],

	templates: [
		'templates/**/*.+(hbs|handlebars)'
	]
}