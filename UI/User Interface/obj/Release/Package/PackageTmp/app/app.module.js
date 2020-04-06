"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var index_1 = require("./_directives/index");
var login_component_1 = require("./shared/component/login.component");
var index_2 = require("./_services/index");
var lookup_service_1 = require("./shared/services/lookup.service");
var app_component_1 = require("./app.component");
var home_component_1 = require("./shared/component/home.component");
var measurementUnit_component_1 = require("./moduleMasterData/component/measurementUnit.component");
var supplier_component_1 = require("./moduleMasterData/component/supplier.component");
var item_component_1 = require("./moduleMasterData/component/item.component");
var purchaseOrder_component_1 = require("../app/modulePurchaseOrder/component/purchaseOrder.component");
var entry_component_1 = require("../app/moduleEntry/component/entry.component");
var issue_component_1 = require("../app/moduleIssue/component/issue.component");
var asset_component_1 = require("../app/moduleAsset/component/asset.component");
var reportPurchaseOrder_component_1 = require("../app/moduleReport/component/reportPurchaseOrder.component");
var reportEntry_component_1 = require("../app/moduleReport/component/reportEntry.component");
var reportIssue_component_1 = require("../app/moduleReport/component/reportIssue.component");
var reportAsset_component_1 = require("../app/moduleReport/component/reportAsset.component");
var bincard_component_1 = require("../app/moduleReport/component/bincard.component");
var itemTransaction_component_1 = require("../app/moduleReport/component/itemTransaction.component");
var itemList_component_1 = require("../app/moduleReport/component/itemList.component");
var measurementUnit_service_1 = require("./moduleMasterData/services/measurementUnit.service");
var supplier_service_1 = require("./moduleMasterData/services/supplier.service");
var item_service_1 = require("./moduleMasterData/services/item.service");
var purchaseOrder_service_1 = require("../app/modulePurchaseOrder/service/purchaseOrder.service");
var entry_service_1 = require("../app/moduleEntry/service/entry.service");
var issue_service_1 = require("../app/moduleIssue/service/issue.service");
var asset_service_1 = require("../app/moduleAsset/service/asset.service");
var summaryReport_service_1 = require("../app/moduleReport/service/summaryReport.service");
var pageNotFound_component_1 = require("./shared/pageNotFound.component");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                measurementUnit_component_1.measurementUnitComponent,
                supplier_component_1.supplierComponent,
                item_component_1.itemComponent,
                purchaseOrder_component_1.purchaseOrderComponent,
                entry_component_1.entryComponent,
                issue_component_1.issueComponent,
                asset_component_1.assetComponent,
                reportPurchaseOrder_component_1.reportPurchaseOrderComponent,
                reportEntry_component_1.reportEntryComponent,
                reportIssue_component_1.reportIssueComponent,
                bincard_component_1.reportBinCardComponent,
                itemTransaction_component_1.reportItemTransactionComponent,
                itemList_component_1.reportItemListComponent,
                reportAsset_component_1.reportAssetComponent,
                pageNotFound_component_1.PageNotFoundComponent,
                index_1.AlertComponent
            ],
            providers: [
                measurementUnit_service_1.measurementUnitService,
                supplier_service_1.supplierService,
                item_service_1.itemService,
                purchaseOrder_service_1.purchaseOrderService,
                entry_service_1.entryService,
                issue_service_1.issueService,
                summaryReport_service_1.summaryReportService,
                asset_service_1.assetService,
                lookup_service_1.lookupService,
                index_2.AlertService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map