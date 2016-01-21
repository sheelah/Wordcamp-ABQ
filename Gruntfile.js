'use strict';
module.exports = function(grunt) {

	// load all grunt tasks matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);

	// Show elapsed time
	require('time-grunt')(grunt);

	grunt.initConfig({

		// watch for changes and trigger sass, jshint, uglify and livereload
		watch: {
			sass: {
				files: ['sass/**/*.{scss,sass}'],
				tasks: ['sass:dist', 'postcss']
			},
		},

		// sass
		sass: {
			options: {
				sourceMap: true,
				sourceMapContents: true
			},
			dist: {
				options: {
					outputStyle: 'expanded',
				},
				files: {
					'style.css': 'sass/style.scss',
				}
			},
		},

		// postcss
		postcss: {
      		options: {
        		map: true,
        		processors: [
          			require('autoprefixer')({browsers: ['last 2 versions', 'ie 9', 'ios 6', 'android 4']})
        		]
      		},
      		dist: {
        	src: '**/*.css'
      		}
    	},

	});

	// register task
	grunt.registerTask('default', ['dev']);
	grunt.registerTask('dev', ['watch']);
	grunt.registerTask('build', ['sass:dist', 'postcss']);

};
