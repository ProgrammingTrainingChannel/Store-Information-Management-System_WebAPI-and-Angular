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
var supplier_service_1 = require("../services/supplier.service");
var index_1 = require("../../_services/index");
var supplierComponent = /** @class */ (function () {
    function supplierComponent(_supplierService, _alertService) {
        this.ListOfSuppliers = [];
        this.supplier = {
            ID: 0,
            Name: ''
        };
        this._supplierService = _supplierService;
        this._alertService = _alertService;
    }
    supplierComponent.prototype.ngOnInit = function () {
        this.supplier.ID = 0;
        this.supplier.Name = '';
        this.LoadSuppliers();
    };
    supplierComponent.prototype.IsValid = function (supplier) {
        if (supplier.Name == "") {
            this._alertService.error("Please enter supplier name.");
            return false;
        }
        else {
            return true;
        }
    };
    ;
    supplierComponent.prototype.LoadSuppliers = function () {
        var _this = this;
        this._supplierService.getSuppliers()
            .subscribe(function (resultData) {
            _this.ListOfSuppliers = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getSuppliers failed');
        });
    };
    ;
    supplierComponent.prototype.LoadSingleSupplier = function (SelectedSupplier) {
        this.supplier = SelectedSupplier;
    };
    ;
    supplierComponent.prototype.SaveUpdateSupplier = function () {
        var _this = this;
        if (this.IsValid(this.supplier) == true) {
            if (this.supplier.ID == 0) {
                this._supplierService.saveSupplier(this.supplier)
                    .subscribe(function (result) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadSuppliers();
                }, function (error) {
                    _this._alertService.error("Save Failed");
                });
            }
            else {
                this._supplierService.updateSupplier(this.supplier)
                    .subscribe(function (result) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadSuppliers();
                }, function (error) {
                    _this._alertService.error("Update Failed");
                });
            }
        }
    };
    ;
    supplierComponent.prototype.DeleteSupplier = function () {
        var _this = this;
        this._supplierService.deleteSupplier(this.supplier)
            .subscribe(function (result) {
            _this._alertService.success("Deleted Successfully");
            _this.LoadSuppliers();
        }, function (error) {
            _this._alertService.error("Delete failed");
        });
    };
    ;
    supplierComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/moduleMasterData/template/supplier.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [supplier_service_1.supplierService, index_1.AlertService])
    ], supplierComponent);
    return supplierComponent;
}());
exports.supplierComponent = supplierComponent;
//# sourceMappingURL=supplier.component.js.map