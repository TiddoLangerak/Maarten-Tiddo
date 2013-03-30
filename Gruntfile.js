module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-less');

	// Project configuration.
	grunt.initConfig({
		shell : {
			serverInstall : {
				command : "npm install"
			},
			clientInstall:{
				command : "bower install"
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
		},
		less : {
			development : {
				files : {
					"clientRoot/css/style.css" : "clientRoot/less/style.less"
				}
			},
			production : {
				options : {
					yuicompress : true
				},
				files : {
					"clientRoot/css/style.min.css" : "clientRoot/less/style.less"
				}
			}
		} 
	});

	grunt.registerTask("default", ["shell", "jshint", "less"]);
};
