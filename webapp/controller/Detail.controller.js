sap.ui.define([
	"com/jonasdp/trac2018/controller/BaseController",
	"sap/ui/model/Filter",
	"com/jonasdp/trac2018/model/Formatter"
], function (BaseController, Filter, Formatter) {
	"use strict";

	return BaseController.extend("com.jonasdp.trac2018.controller.Detail", {
		
		formatter: Formatter,
		
		onInit: function(){
			this.getRouter().getRoute("Detail").attachPatternMatched(this._onRoutingMatched, this);
		},
		
		_onRoutingMatched: function(oEvent){
			this.getView().setBusy(true);
			
			var that = this;
			
			var aFilters = [new Filter("CustomerID", sap.ui.model.FilterOperator.EQ, oEvent.getParameter("arguments").customerID)];
			
			this.getModel().read("/Orders", {
				filters: aFilters,
				success: function(oData){
					that.getModel("orders").setData(oData.results);
				},
				error: function(oError){
					that.showError(oError);
				}
			});
			
			this.getView().setBusy(false);
		},
		
		onOrderPress: function(oEvent){
			this.getModel("order").setData(oEvent.getSource().getSelectedItem().getBindingContext("orders").getObject());
			var sCustId = this.getModel("customer").getProperty("/CustomerID");
			var sOrderId = this.getModel("order").getProperty("/OrderID");
			
			this.getRouter().navTo("DetailDetail", {
				customerID: sCustId,
				orderID: sOrderId
			});
			
			this.getModel("appView").setProperty("/layout", "ThreeColumnsEndExpanded");
		}

	});

});