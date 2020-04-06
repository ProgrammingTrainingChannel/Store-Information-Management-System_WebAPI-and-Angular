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
var lookup_service_1 = require("../../shared/services/lookup.service");
var item_service_1 = require("../../moduleMasterData/services/item.service");
var purchaseOrder_service_1 = require("../service/purchaseOrder.service");
var index_1 = require("../../_services/index");
var purchaseOrderComponent = /** @class */ (function () {
    function purchaseOrderComponent(_lookupService, _itemService, _purchaseOrderService, _alertService) {
        this.ListOfItems = [];
        this.ListOfPurchaseOrders = [];
        this.ListOfPurchaseOrderDetails = [];
        this.purchaseOrder = {
            ID: 0,
            RequestedBy: '',
            RequestedDate: new Date(),
            ApprovedBy: '',
            ApprovedDate: new Date(),
            AuthorizedBy: '',
            AuthorizedDate: new Date(),
            RequestFrom: '',
            PurposeOfRequest: '',
            Remark: '',
            CreatedBy: 'bereket',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: new Date()
        };
        this.purchaseOrderDetail = {
            ID: 0,
            QuantityRequested: 0,
            QuantityApproved: 0,
            Program: '',
            Remark: '',
            PurchaseOrder: null,
            Item: null,
            PurchaseOrderID: 0,
            ItemID: 0,
            CreatedBy: 'bereket',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: new Date()
        };
        this._lookupService = _lookupService;
        this._itemService = _itemService;
        this._purchaseOrderService = _purchaseOrderService;
        this._alertService = _alertService;
    }
    purchaseOrderComponent.prototype.ngOnInit = function () {
        this.purchaseOrder.ID = 0;
        this.purchaseOrder.RequestedBy = '';
        this.purchaseOrder.RequestedDate = new Date();
        this.purchaseOrder.ApprovedBy = '';
        this.purchaseOrder.ApprovedDate = new Date();
        this.purchaseOrder.AuthorizedBy = '';
        this.purchaseOrder.AuthorizedDate = new Date();
        this.purchaseOrder.RequestFrom = '';
        this.purchaseOrder.PurposeOfRequest = '';
        this.purchaseOrder.Remark = '';
        this.purchaseOrder.CreatedBy = 'bereket';
        this.purchaseOrder.CreatedDate = new Date();
        this.purchaseOrder.UpdatedBy = '';
        this.purchaseOrder.UpdatedDate = null;
        /////////////////////////
        this.purchaseOrderDetail.ID = 0;
        this.purchaseOrderDetail.QuantityRequested = 0;
        this.purchaseOrderDetail.QuantityApproved = 0;
        this.purchaseOrderDetail.Program = '';
        this.purchaseOrderDetail.Remark = '';
        this.purchaseOrderDetail.PurchaseOrderID = 0;
        this.purchaseOrderDetail.ItemID = 0;
        this.purchaseOrderDetail.CreatedBy = 'bereket';
        this.purchaseOrderDetail.CreatedDate = new Date();
        this.purchaseOrderDetail.UpdatedBy = '';
        this.purchaseOrderDetail.UpdatedDate = null;
        this.LoadPurchaseOrders();
        this.LoadItems();
        //this.LoadPurchaseOrderDetails();
    };
    ;
    purchaseOrderComponent.prototype.LoadItems = function () {
        var _this = this;
        this._itemService.getItems()
            .subscribe(function (resultData) {
            _this.ListOfItems = resultData;
        }, function (error) {
            _this._alertService.error("Item loading failed");
        });
    };
    ;
    purchaseOrderComponent.prototype.LoadPurchaseOrders = function () {
        var _this = this;
        this._purchaseOrderService.getPurchaseOrders()
            .subscribe(function (resultData) {
            _this.ListOfPurchaseOrders = resultData;
        }, function (error) {
            alert('getPurchaseOrders failed!');
        });
    };
    ;
    purchaseOrderComponent.prototype.LoadPurchaseOrderDetails = function () {
        var _this = this;
        this._purchaseOrderService.getPurchaseOrderDetails()
            .subscribe(function (resultData) {
            _this.ListOfPurchaseOrderDetails = resultData;
        }, function (error) {
            alert('getPurchaseOrders failed!');
        });
    };
    ;
    purchaseOrderComponent.prototype.LoadSinglePurchaseOrder = function (SelectedPurchaseOrder) {
        this.purchaseOrder = SelectedPurchaseOrder;
    };
    ;
    purchaseOrderComponent.prototype.LoadSinglePurchaseOrderDetail = function (SelectedPurchaseOrderDetail) {
        this.SelectedItemID = SelectedPurchaseOrderDetail.Item.ID;
        this.purchaseOrderDetail = SelectedPurchaseOrderDetail;
    };
    ;
    purchaseOrderComponent.prototype.SelectSinglePurchaseOrder = function (SelectedPurchaseOrder) {
        var _this = this;
        this.SelectedPurchaseOrderID = SelectedPurchaseOrder.ID;
        this._purchaseOrderService.getAllPurchaseOrderDetailsByParentID(this.SelectedPurchaseOrderID)
            .subscribe(function (resultData) {
            _this.ListOfPurchaseOrderDetails = resultData;
            console.log(_this.ListOfPurchaseOrderDetails);
        }, function (error) {
            _this._alertService.error("getAllPurchaseOrderDetailsByParentID failed!");
        });
    };
    ;
    purchaseOrderComponent.prototype.IsValid = function (purchaseOrder) {
        return true;
    };
    purchaseOrderComponent.prototype.SaveUpdatePurchaseOrder = function () {
        var _this = this;
        if (this.IsValid(this.purchaseOrder) == true) {
            if (this.purchaseOrder.ID == 0) {
                this._purchaseOrderService.savePurchaseOrder(this.purchaseOrder)
                    .subscribe(function (result) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadPurchaseOrders();
                }, function (error) {
                    _this._alertService.error("Save Failed");
                });
            }
            else {
                this._purchaseOrderService.updatePurchaseOrder(this.purchaseOrder)
                    .subscribe(function (result) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadPurchaseOrders();
                }, function (error) {
                    _this._alertService.error("Update Failed");
                });
            }
        }
    };
    ;
    purchaseOrderComponent.prototype.SaveUpdatePurchaseOrderDetail = function () {
        var _this = this;
        this.purchaseOrderDetail.PurchaseOrderID = this.SelectedPurchaseOrderID;
        this.purchaseOrderDetail.ItemID = this.SelectedItemID;
        if (this.purchaseOrderDetail.ID == 0) {
            this._purchaseOrderService.savePurchaseOrderDetail(this.purchaseOrderDetail)
                .subscribe(function (result) {
                _this._alertService.success("Saved Successfully");
                _this.LoadPurchaseOrderDetails();
            }, function (error) {
                _this._alertService.error("Save Failed");
            });
        }
        else {
            this._purchaseOrderService.updatePurchaseOrderDetail(this.purchaseOrderDetail)
                .subscribe(function (result) {
                _this._alertService.success("Updated Successfully");
                _this.LoadPurchaseOrderDetails();
            }, function (error) {
                _this._alertService.error("Update Failed");
            });
        }
    };
    ;
    purchaseOrderComponent.prototype.DeletePurchaseOrder = function (purchaseOrder) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._purchaseOrderService.deletePurchaseOrder(purchaseOrder)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadPurchaseOrders();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    purchaseOrderComponent.prototype.DeletePurchaseOrderDetail = function (purchaseOrderDetail) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._purchaseOrderService.deletePurchaseOrderDetail(purchaseOrderDetail)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadPurchaseOrderDetails();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    purchaseOrderComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/modulePurchaseOrder/template/purchaseOrder.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [lookup_service_1.lookupService, item_service_1.itemService, purchaseOrder_service_1.purchaseOrderService, index_1.AlertService])
    ], purchaseOrderComponent);
    return purchaseOrderComponent;
}());
exports.purchaseOrderComponent = purchaseOrderComponent;
//# sourceMappingURL=purchaseOrder.component.js.map