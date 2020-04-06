"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var purchaseOrder_service_1 = require("../service/purchaseOrder.service");
var entry_service_1 = require("../../moduleEntry/service/entry.service");
var issue_service_1 = require("../../moduleIssue/service/issue.service");
var reportComponent = /** @class */ (function () {
    function reportComponent(_purchaseOrderService, _entryService, _issueService) {
        this.ListOfPurchaseOrders = [];
        this.ListOfPurchaseOrderDetails = [];
        this.ListOfEntrys = [];
        this.ListOfEntryDetails = [];
        this.ListOfIssues = [];
        this.ListOfIssueDetails = [];
        this._purchaseOrderService = _purchaseOrderService;
        this._entryService = _entryService;
        this._issueService = _issueService;
    }
    reportComponent.prototype.LoadPurchaseOrders = function () {
        var _this = this;
        this._purchaseOrderService.getPurchaseOrders()
            .subscribe(function (resultData) {
            _this.ListOfPurchaseOrders = resultData;
        }, function (error) {
            alert('getPurchaseOrders failed!');
        });
    };
    ;
    reportComponent.prototype.LoadPurchaseOrderDetails = function () {
        var _this = this;
        this._purchaseOrderService.getPurchaseOrderDetails()
            .subscribe(function (resultData) {
            _this.ListOfPurchaseOrderDetails = resultData;
        }, function (error) {
            alert('getPurchaseOrders failed!');
        });
    };
    ;
    reportComponent.prototype.LoadEntrys = function () {
        var _this = this;
        this._entryService.getEntries()
            .subscribe(function (resultData) {
            _this.ListOfEntrys = resultData;
        }, function (error) {
            alert('getEntrys failed!');
        });
    };
    ;
    reportComponent.prototype.LoadEntryDetails = function () {
        var _this = this;
        this._entryService.getEntryDetails()
            .subscribe(function (resultData) {
            _this.ListOfEntryDetails = resultData;
        }, function (error) {
            alert('getEntrys failed!');
        });
    };
    ;
    reportComponent.prototype.LoadIssues = function () {
        var _this = this;
        this._issueService.getIssues()
            .subscribe(function (resultData) {
            _this.ListOfIssues = resultData;
        }, function (error) {
            alert('getIssues failed!');
        });
    };
    ;
    reportComponent.prototype.LoadIssueDetails = function () {
        var _this = this;
        this._issueService.getIssueDetails()
            .subscribe(function (resultData) {
            _this.ListOfIssueDetails = resultData;
        }, function (error) {
            alert('getIssues failed!');
        });
    };
    ;
    reportComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/modulePurchaseOrder/template/purchaseOrder.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [purchaseOrder_service_1.purchaseOrderService, entry_service_1.entryService, issue_service_1.issueService])
    ], reportComponent);
    return reportComponent;
}());
exports.reportComponent = reportComponent;
//# sourceMappingURL=report.component.js.map