module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-shell');

	// Project configuration.
	grunt.initConfig({
		shell : {
			install : {
				command : "npm install"
			}
		},
		jshint : {
			server : {
				src : ["serverRoot/src/**/*.js"],
				options : {
					jshintrc : "serverRoot/src/.jshintrc"
				}
			},
			client : {
				src : ["clientRoot/js/src/**/*.js"],
				options : {
					jshintrc: "clientRoot/js/src/.jshintrc"
				}
			}
		}
	});

	grunt.registerTask("default", ["shell:install", "jshint:server", "jshint:client"]);
};
