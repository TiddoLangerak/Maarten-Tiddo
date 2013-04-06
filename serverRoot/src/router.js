var express = require("express");
var _ = require("underscore");

var router = {
	route : function (app, configFile) {
		"use strict";
		_.each(configFile.static, function (path, url) {
			app.use(url, express.static(path));
		});
	}
};

module.exports = router;
