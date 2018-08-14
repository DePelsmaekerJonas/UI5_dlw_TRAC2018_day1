sap.ui.define([
	"com/jonasdp/trac2018/controller/BaseController",
	"sap/ui/model/Filter"
], function (BaseController, Filter) {
	"use strict";

	return BaseController.extend("com.jonasdp.trac2018.controller.Master", {
		
		onSearchCustomer: function(oEvent){
			this.getView().setBusy(true);
			
			// add filter for search
			var aFilters = [];
			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("CompanyName", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.byId("idCustomerList");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "CompanyName");
			
			this.getView().setBusy(false);
		},
		
		onCustomerPress: function(oEvent){
			this.getModel("customer").setData(oEvent.getSource().getBindingContext().getObject()); 
			var sCustId = this.getModel("customer").getProperty("/CustomerID");
			this.getRouter().navTo("Detail", {
				customerID: sCustId
			});
			this.getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
		}

	});

});