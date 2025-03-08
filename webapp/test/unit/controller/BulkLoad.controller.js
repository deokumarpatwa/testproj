/*global QUnit*/

sap.ui.define([
	"comintapptics/md_bulkload/controller/BulkLoad.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BulkLoad Controller");

	QUnit.test("I should test the BulkLoad controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
