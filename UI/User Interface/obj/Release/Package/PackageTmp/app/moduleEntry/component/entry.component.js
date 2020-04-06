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
var purchaseOrder_service_1 = require("../../modulePurchaseOrder/service/purchaseOrder.service");
var entry_service_1 = require("../service/entry.service");
var index_1 = require("../../_services/index");
var entryComponent = /** @class */ (function () {
    function entryComponent(_lookupService, _itemService, _purchaseOrderService, _entryService, _alertService) {
        this.ListOfPurchaseOrders = [];
        this.ListOfSuppliers = [];
        this.ListOfItems = [];
        this.ListOfEntrys = [];
        this.ListOfEntryDetails = [];
        this.entry = {
            ID: 0,
            RecieptNumber: '',
            Deliverer: '',
            SupplierInvoiceNumber: '',
            RecievedBy: '',
            RecievedDate: new Date(),
            DeliveredBy: '',
            DeliveredDate: new Date(),
            VerifiedBy: '',
            VerifiedDate: new Date(),
            CheckedBy: '',
            CheckedDate: new Date(),
            Remark: '',
            PurchaseOrder: null,
            Supplier: null,
            PurchaseOrderID: 0,
            SupplierID: 0,
            CreatedBy: 'bereket',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: new Date()
        };
        this.entryDetail = {
            ID: 0,
            Quantity: 0,
            UnitPrice: 0,
            TotalPrice: 0,
            Remark: '',
            Entry: null,
            Item: null,
            EntryID: 0,
            ItemID: 0,
            CreatedBy: 'bereket',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: new Date()
        };
        this._lookupService = _lookupService;
        this._itemService = _itemService;
        this._purchaseOrderService = _purchaseOrderService;
        this._entryService = _entryService;
        this._alertService = _alertService;
    }
    entryComponent.prototype.ngOnInit = function () {
        this.entry.ID = 0;
        this.entry.RecieptNumber = '';
        this.entry.Deliverer = '';
        this.entry.SupplierInvoiceNumber = '';
        this.entry.RecievedBy = '';
        this.entry.RecievedDate = new Date();
        this.entry.DeliveredBy = '';
        this.entry.DeliveredDate = new Date();
        this.entry.VerifiedBy = '';
        this.entry.VerifiedDate = new Date();
        this.entry.CheckedBy = '';
        this.entry.CheckedDate = new Date();
        this.entry.Remark = '';
        this.entry.PurchaseOrderID = 0;
        this.entry.SupplierID = 0;
        this.entry.CreatedBy = 'bereket';
        this.entry.CreatedDate = new Date();
        this.entry.UpdatedBy = '';
        this.entry.UpdatedDate = null;
        /////////////////////////
        this.entryDetail.ID = 0;
        this.entryDetail.Quantity = 0;
        this.entryDetail.UnitPrice = 0;
        this.entryDetail.TotalPrice = 0;
        this.entryDetail.Remark = '';
        this.entryDetail.EntryID = 0;
        this.entryDetail.ItemID = 0;
        this.entryDetail.CreatedBy = 'bereket';
        this.entryDetail.CreatedDate = new Date();
        this.entryDetail.UpdatedBy = '';
        this.entryDetail.UpdatedDate = null;
        this.LoadEntrys();
        this.LoadPurchaseOrders();
        this.LoadSuppliers();
        this.LoadItems();
        //this.LoadEntryDetails();
    };
    ;
    entryComponent.prototype.LoadPurchaseOrders = function () {
        var _this = this;
        this._purchaseOrderService.getPurchaseOrders()
            .subscribe(function (resultData) {
            _this.ListOfPurchaseOrders = resultData;
        }, function (error) {
            alert('getPurchaseOrders failed!');
        });
    };
    ;
    entryComponent.prototype.LoadItems = function () {
        var _this = this;
        this._itemService.getItems()
            .subscribe(function (resultData) {
            _this.ListOfItems = resultData;
        }, function (error) {
            _this._alertService.error("Item loading failed");
        });
    };
    ;
    entryComponent.prototype.LoadSuppliers = function () {
        var _this = this;
        this._lookupService.getSuppliers()
            .subscribe(function (resultData) {
            _this.ListOfSuppliers = resultData;
        }, function (error) {
            _this._alertService.error("Supplier loading failed");
        });
    };
    ;
    entryComponent.prototype.LoadEntrys = function () {
        var _this = this;
        this._entryService.getEntries()
            .subscribe(function (resultData) {
            _this.ListOfEntrys = resultData;
        }, function (error) {
            alert('getEntrys failed!');
        });
    };
    ;
    entryComponent.prototype.LoadEntryDetails = function () {
        var _this = this;
        this._entryService.getEntryDetails()
            .subscribe(function (resultData) {
            _this.ListOfEntryDetails = resultData;
        }, function (error) {
            alert('getEntrys failed!');
        });
    };
    ;
    entryComponent.prototype.LoadSingleEntry = function (SelectedEntry) {
        this.SelectedPurchaseOrderID = SelectedEntry.PurchaseOrder.ID;
        this.SelectedSupplierID = SelectedEntry.Supplier.ID;
        this.entry = SelectedEntry;
    };
    ;
    entryComponent.prototype.LoadSingleEntryDetail = function (SelectedEntryDetail) {
        this.SelectedItemID = SelectedEntryDetail.Item.ID;
        this.entryDetail = SelectedEntryDetail;
    };
    ;
    entryComponent.prototype.SelectSingleEntry = function (SelectedEntry) {
        var _this = this;
        this.SelectedEntryID = SelectedEntry.ID;
        this._entryService.getAllEntryDetailsByParentID(this.SelectedEntryID)
            .subscribe(function (resultData) {
            _this.ListOfEntryDetails = resultData;
        }, function (error) {
            _this._alertService.error("getAllEntryDetailsByParentID failed!");
        });
    };
    ;
    entryComponent.prototype.SaveUpdateEntry = function () {
        var _this = this;
        this.entry.PurchaseOrderID = this.SelectedPurchaseOrderID;
        this.entry.SupplierID = this.SelectedSupplierID;
        if (this.entry.ID == 0) {
            this._entryService.saveEntry(this.entry)
                .subscribe(function (result) {
                _this._alertService.success("Saved Successfully");
                _this.LoadEntrys();
            }, function (error) {
                _this._alertService.error("Save Failed");
            });
        }
        else {
            this._entryService.updateEntry(this.entry)
                .subscribe(function (result) {
                _this._alertService.success("Updated Successfully");
                _this.LoadEntrys();
            }, function (error) {
                _this._alertService.error("Update Failed");
            });
        }
    };
    ;
    entryComponent.prototype.SaveUpdateEntryDetail = function () {
        var _this = this;
        this.entryDetail.EntryID = this.SelectedEntryID;
        this.entryDetail.ItemID = this.SelectedItemID;
        this.entryDetail.TotalPrice = this.entryDetail.Quantity * this.entryDetail.UnitPrice;
        if (this.entryDetail.ID == 0) {
            this._entryService.saveEntryDetail(this.entryDetail)
                .subscribe(function (result) {
                _this._alertService.success("Saved Successfully");
                _this.LoadEntryDetails();
            }, function (error) {
                _this._alertService.error("Save Failed");
            });
        }
        else {
            this._entryService.updateEntryDetail(this.entryDetail)
                .subscribe(function (result) {
                _this._alertService.success("Updated Successfully");
                _this.LoadEntryDetails();
            }, function (error) {
                _this._alertService.error("Update Failed");
            });
        }
    };
    ;
    entryComponent.prototype.DeleteEntry = function (entry) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._entryService.deleteEntry(entry)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadEntrys();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    entryComponent.prototype.DeleteEntryDetail = function (entryDetail) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._entryService.deleteEntryDetail(entryDetail)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadEntryDetails();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    entryComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/moduleEntry/template/entry.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [lookup_service_1.lookupService, item_service_1.itemService, purchaseOrder_service_1.purchaseOrderService, entry_service_1.entryService, index_1.AlertService])
    ], entryComponent);
    return entryComponent;
}());
exports.entryComponent = entryComponent;
//# sourceMappingURL=entry.component.js.map