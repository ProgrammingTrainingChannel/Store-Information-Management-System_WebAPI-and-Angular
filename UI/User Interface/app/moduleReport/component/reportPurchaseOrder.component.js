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
var purchaseOrder_service_1 = require("../../modulePurchaseOrder/service/purchaseOrder.service");
var reportPurchaseOrderComponent = /** @class */ (function () {
    function reportPurchaseOrderComponent(_purchaseOrderService) {
        this.ListOfPurchaseOrders = [];
        this.ListOfPurchaseOrderDetails = [];
        this.ListOfSinglePurchaseOrderDetails = [];
        this._purchaseOrderService = _purchaseOrderService;
    }
    reportPurchaseOrderComponent.prototype.ngOnInit = function () {
        this.LoadPurchaseOrderDetails();
    };
    ;
    reportPurchaseOrderComponent.prototype.SelectSinglePurchaseOrder = function (SelectedPurchaseOrder) {
        var _this = this;
        this._purchaseOrderService.getAllPurchaseOrderDetailsByParentID(SelectedPurchaseOrder.ID)
            .subscribe(function (resultData) {
            _this.ListOfSinglePurchaseOrderDetails = resultData;
        }, function (error) {
        });
    };
    ;
    reportPurchaseOrderComponent.prototype.LoadPurchaseOrders = function () {
        var _this = this;
        this._purchaseOrderService.getPurchaseOrders()
            .subscribe(function (resultData) {
            _this.ListOfPurchaseOrders = resultData;
        }, function (error) {
            alert('getPurchaseOrders failed!');
        });
    };
    ;
    reportPurchaseOrderComponent.prototype.CountDetailItem = function (entryID) {
        this.NumberOfItems = Object.assign([], this.ListOfPurchaseOrderDetails).filter(function (item) { return item.PurchaseOrderID == entryID; }).length;
        return this.NumberOfItems;
    };
    reportPurchaseOrderComponent.prototype.LoadPurchaseOrderDetails = function () {
        var _this = this;
        this._purchaseOrderService.getPurchaseOrderDetails()
            .subscribe(function (resultData) {
            _this.ListOfPurchaseOrderDetails = resultData;
            _this.LoadPurchaseOrders();
        }, function (error) {
            alert('getPurchaseOrders failed!');
        });
    };
    ;
    reportPurchaseOrderComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/moduleReport/template/reportPurchaseOrder.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [purchaseOrder_service_1.purchaseOrderService])
    ], reportPurchaseOrderComponent);
    return reportPurchaseOrderComponent;
}());
exports.reportPurchaseOrderComponent = reportPurchaseOrderComponent;
//# sourceMappingURL=reportPurchaseOrder.component.js.map