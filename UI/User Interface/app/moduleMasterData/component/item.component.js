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
var item_service_1 = require("../services/item.service");
var index_1 = require("../../_services/index");
var lookup_service_1 = require("../../shared/services/lookup.service");
var itemComponent = /** @class */ (function () {
    function itemComponent(_lookupService, _itemService, _alertService) {
        this.ListOfMeasurementUnits = [];
        this.ListOfItems = [];
        this.item = {
            ID: 0,
            Code: '',
            Name: '',
            Location: '',
            Program: '',
            StockNumber: '',
            Description: '',
            MeasurementUnitID: 0,
            MeasurementUnit: null,
            BalanceQuantity: 0,
            Remark: '',
            CreatedBy: '',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: new Date()
        };
        this._lookupService = _lookupService;
        this._itemService = _itemService;
        this._alertService = _alertService;
    }
    itemComponent.prototype.ngOnInit = function () {
        this.item.ID = 0;
        this.item.Code = '';
        this.item.Name = '';
        this.item.Location = '';
        this.item.Program = '';
        this.item.StockNumber = '';
        this.item.Description = '';
        this.item.MeasurementUnitID = 0;
        this.item.MeasurementUnit = null;
        this.item.BalanceQuantity = 0;
        this.item.Remark = '';
        this.item.CreatedBy = "Bereket";
        this.item.CreatedDate = new Date();
        this.item.UpdatedBy = '';
        this.item.UpdatedDate = null;
        this.LoadMeasurementUnits();
        this.LoadItems();
    };
    itemComponent.prototype.IsValid = function (item) {
        if (item.Code == "") {
            this._alertService.error("Please enter item code.");
            return false;
        }
        else if (item.Name == "") {
            this._alertService.error("Please enter item name.");
            return false;
        }
        else if (item.Location == "") {
            this._alertService.error("Please enter Location.");
            return false;
        }
        else if (item.Program == "") {
            this._alertService.error("Please enter Program.");
            return false;
        }
        else if (item.StockNumber == "") {
            this._alertService.error("Please enter Stock Number.");
            return false;
        }
        else if (item.Description == "") {
            this._alertService.error("Please enter description.");
            return false;
        }
        else if (item.MeasurementUnitID == 0) {
            this._alertService.error("Please select measurement unit.");
            return false;
        }
        else if (item.BalanceQuantity == 0) {
            this._alertService.error("Please enter balance quantity.");
            return false;
        }
        else {
            return true;
        }
    };
    ;
    itemComponent.prototype.LoadMeasurementUnits = function () {
        var _this = this;
        this._lookupService.getMeasurementUnits()
            .subscribe(function (resultData) {
            _this.ListOfMeasurementUnits = resultData;
        }, function (error) {
            console.log(error);
            _this._alertService.error("MeasurementUnit loading failed");
        });
    };
    ;
    itemComponent.prototype.LoadItems = function () {
        var _this = this;
        this._itemService.getItems()
            .subscribe(function (resultData) {
            _this.ListOfItems = resultData;
            console.log(_this.ListOfItems);
        }, function (error) {
            _this._alertService.error("Item loading failed");
        });
    };
    ;
    itemComponent.prototype.LoadSingleItem = function (SelectedItem) {
        this.SelectedMeasurementUnitID = SelectedItem.MeasurementUnit.ID;
        this.item = SelectedItem;
    };
    ;
    itemComponent.prototype.SaveUpdateItem = function () {
        var _this = this;
        this.item.MeasurementUnitID = this.SelectedMeasurementUnitID;
        if (this.IsValid(this.item) == true) {
            if (this.item.ID == 0) {
                this._itemService.saveItem(this.item)
                    .subscribe(function (result) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadItems();
                }, function (error) {
                    _this._alertService.error("Save Failed");
                });
            }
            else {
                this._itemService.updateItem(this.item)
                    .subscribe(function (result) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadItems();
                }, function (error) {
                    _this._alertService.error("Update Failed");
                });
            }
        }
    };
    ;
    itemComponent.prototype.DeleteItem = function () {
        var _this = this;
        this._itemService.deleteItem(this.item)
            .subscribe(function (result) {
            _this._alertService.success("Deleted Successfully");
            _this.LoadItems();
        }, function (error) {
            _this._alertService.error("Delete failed");
        });
    };
    ;
    itemComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/moduleMasterData/template/item.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [lookup_service_1.lookupService, item_service_1.itemService, index_1.AlertService])
    ], itemComponent);
    return itemComponent;
}());
exports.itemComponent = itemComponent;
//# sourceMappingURL=item.component.js.map