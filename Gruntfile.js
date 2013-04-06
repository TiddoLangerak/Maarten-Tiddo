module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-simple-mocha');

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
		simplemocha : {
			options : {
				ui : 'bdd'
			},
			all : {
				src : 'serverRoot/test/**/*.js'
			}
		},
		karma : {
			unit : {
				configFile : "karma.conf.js",
				browsers : ["Chrome"]
			}
		},
		uglify : {
			all : {
				files: {
					"clientRoot/js/min/all.min.js" : ["clientRoot/js/src/**/*.js"]
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

	grunt.registerTask("default", ["shell", "jshint", "simplemocha", "karma", "uglify", "less"]);
	grunt.registerTask("noInstall" , ["jshint", "simplemocha", "karma", "uglify", "less"]);
};
