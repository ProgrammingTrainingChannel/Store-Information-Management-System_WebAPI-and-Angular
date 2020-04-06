"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("./shared/component/login.component");
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'measurementUnit', component: measurementUnit_component_1.measurementUnitComponent },
                    { path: 'supplier', component: supplier_component_1.supplierComponent },
                    { path: 'item', component: item_component_1.itemComponent },
                    { path: 'purchaseOrder', component: purchaseOrder_component_1.purchaseOrderComponent },
                    { path: 'entry', component: entry_component_1.entryComponent },
                    { path: 'issue', component: issue_component_1.issueComponent },
                    { path: 'asset', component: asset_component_1.assetComponent },
                    { path: 'reportRequestList', component: reportPurchaseOrder_component_1.reportPurchaseOrderComponent },
                    { path: 'reportEntryList', component: reportEntry_component_1.reportEntryComponent },
                    { path: 'reportIssueList', component: reportIssue_component_1.reportIssueComponent },
                    { path: 'reportBinCard', component: bincard_component_1.reportBinCardComponent },
                    { path: 'reportItemTransactionComponent', component: itemTransaction_component_1.reportItemTransactionComponent },
                    { path: 'reportItemListComponent', component: itemList_component_1.reportItemListComponent },
                    { path: 'reportAssetComponent', component: reportAsset_component_1.reportAssetComponent }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map