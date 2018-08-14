sap.ui.define([
	"com/jonasdp/trac2018/controller/BaseController",
	"sap/ui/model/Filter"
], function (BaseController, Filter) {
	"use strict";

	return BaseController.extend("com.jonasdp.trac2018.controller.DetailDetail", {
		
		onInit: function(){
			this.getRouter().getRoute("DetailDetail").attachPatternMatched(this._onRouteMatched, this);
		},
		
		_onRouteMatched: function(oEvent){
			this.getView().setBusy(true);
			var that = this;
			
			var aFilters = [new Filter("OrderID", sap.ui.model.FilterOperator.EQ, oEvent.getParameter("arguments").orderID)];
			
			this.getModel().read("/Order_Details", {
				filters: aFilters,
				success: function(oData){
					that.getModel("orderItems").setData(oData.results);
				},
				error: function(oError){
					that.showError(oError);
				}
			});
			
			this.getView().setBusy(false);	
		}

	});

});