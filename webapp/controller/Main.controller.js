sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageToast) {
        "use strict";

        return Controller.extend("com.example.salesorder.controller.Main", {
            onInit: function () {
                var oModel = new JSONModel(sap.ui.require.toUrl("com/example/salesorder/mockdata/sales.json"));
                this.getView().setModel(oModel);
            },
            split: function() {
                var oRouter = this.getOwnerComponent().getRouter();
                     oRouter.navTo("SplitView");
             }
        });
    });
