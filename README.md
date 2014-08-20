Sails Generator for Gulp and Bower Support
==========================================

This module provides a [Sails.js](http://sailsjs.org/) generator. It provides configuration for the [gulp.js](http://gulpjs.com/) build system and integrates it with the  [Bower](http://bower.io/) package manager.

Install
-------
Simply run
	
	npm install sails-generate-gulp-bower

You should have sails installed globally, so now you can run

	sails generate gulp-bower

inside of a sails project's folder. After this, you should execute

	npm install
	bower install

to install all new dependencies.

Gulper
------
This generator uses a self-spun gulp framework named [gulper](https://github.com/PaulAvery/node-gulper), to allow for easier configuration. You may want to check out its documentation and existing plugins for things like template precompiling, browserify integration etc.

Usage
-----
The gulp configuration provides several useful tasks, which are listed below.

### build
Compiles all available and required files into the smallest amount of bundles possible and links them into all views.

This includes the following scripts:

* Standard scripts
* Scripts from bower packages

And the following styles:
* Standard styles
* Styles from bower packages

In addition, any specified assets are copied to the target folder as well.

### watch
Does the same as the build task, except for compiling into single files. Instead it updates blazingly fast on any file changes.

### lint
Runs jshint and csslint over all corresponding files in your project folder. Excludes anything in your `.gitignore` file.

### clean
Removes all files created by gulp.

Considerations when switching from Grunt
----------------------------------------
Several things should be considered when you first start using the provided gulp tasks.

### View Handling
As I do not consider it good style, to commit the automatically inserted scripts and styles to git each time gulp updates them, views are now stored in `views-in`. After injection is done, the views are written to the `views` folder, so you should exclude this folder from git.

In addition the injection comments have changed and are now:

	<!-- //CSS// --><!-- \\CSS\\ -->
	<!-- //JS// --><!-- \\JS\\ -->

### Sails lift
Sails lift does not start grunt anymore, but it does not start gulp either. As far as I could see from the sails source, grunt integration was more of a hack, spawning grunt via forever in a child process. If this is wrong or anyone writes a good hook for gulp integration, let me know and I will include it.
But for now, you will have to run `gulp watch` in a second terminal.

### Bower Location
By default, your bower packages will be put into `assets/components`. You may wish to exlude this folder from your `.gitignore`.