sap.ui.define([
	"com/jonasdp/trac2018/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.jonasdp.trac2018.controller.DetailDetail", {
		
		onInit: function(){
			this.getRouter().getRoute("DetailDetail").attachPatternMatched(this._onRouteMatched, this);
		},
		
		_onRouteMatched: function(oEvent){
			this.getView().setBusy(true);
			var that = this;
			
			var sOrderId = oEvent.getParameter("arguments").orderID;
			
			this.getModel("orderItemsModel").read("/OrderSet(SalesDocument='" + sOrderId + "')", {
				urlParameters: {
					$expand: "NavOrderItems"
				},
				success: function(oData){
					that.getModel("orderItems").setData(oData.NavOrderItems.results);
				},
				error: function(oError){
					that.showError(oError);
				}
			});
			
			this.getView().setBusy(false);	
		}

	});

});