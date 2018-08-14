sap.ui.define([
	"com/jonasdp/trac2018/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.jonasdp.trac2018.controller.App", {
		onInit: function(){
			this.getModel("appView").setProperty("/layout", "OneColumn");
		}
	});
});