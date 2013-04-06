var should = require("should");
var sinon = require("sinon");
var proxyquire = require('proxyquire');

var use = {};
var express = {
	static : sinon.stub().returns(use)
};
var router = proxyquire("../src/router", {express : express});

describe("router", function() {
	"use strict";
	describe(".route", function() {
		var app;
		beforeEach(function() {
			app = {
				use : sinon.spy(),
				get : sinon.spy(),
				post : sinon.spy(),
				put : sinon.spy(),
				delete : sinon.spy()
			};
		});

		it("should add static routes to an express app", function() {
			var confFile = {
				static : {
					"/someStatic" : "some/static"
				}
			};

			router.route(app, confFile);
			express.static.calledWith("some/static").should.be.true;
			app.use.calledWith("/someStatic", use).should.be.true;
		});
	});
});
var configFile = {
	static : {
		"static/css" : "../clientRoot/css"
	},
	staticFiles : {

	},
	get : {

	},
	post : {

	},
	put : {

	},
	delete : {

	}
}
