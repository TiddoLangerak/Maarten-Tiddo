autoWatch = false;
basePath = "clientRoot/js/src";
singleRun = true;
frameworks = ["jasmine"];
reporters = ["progress"];
files = [
	JASMINE,
	JASMINE_ADAPTER,
	"../test/**/*.js"
];

plugins = ["karma-jasmine"]
