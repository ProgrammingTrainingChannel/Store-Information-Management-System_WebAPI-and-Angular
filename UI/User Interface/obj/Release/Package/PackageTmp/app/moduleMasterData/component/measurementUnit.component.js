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
var measurementUnit_service_1 = require("../services/measurementUnit.service");
var index_1 = require("../../_services/index");
var measurementUnitComponent = /** @class */ (function () {
    function measurementUnitComponent(_measurementUnitService, _alertService) {
        this.ListOfMeasurementUnits = [];
        this.measurementUnit = {
            ID: 0,
            Name: ''
        };
        this._measurementUnitService = _measurementUnitService;
        this._alertService = _alertService;
    }
    measurementUnitComponent.prototype.ngOnInit = function () {
        this.measurementUnit.ID = 0;
        this.measurementUnit.Name = '';
        this.LoadMeasurementUnits();
    };
    measurementUnitComponent.prototype.IsValid = function (measurementUnit) {
        if (measurementUnit.Name == "") {
            this._alertService.error("Please enter measurement unit name.");
            return false;
        }
        else {
            return true;
        }
    };
    ;
    measurementUnitComponent.prototype.LoadMeasurementUnits = function () {
        var _this = this;
        this._measurementUnitService.getMeasurementUnits()
            .subscribe(function (resultData) {
            _this.ListOfMeasurementUnits = resultData;
        }, function (error) {
            console.log(error);
            _this._alertService.error("Failed to Load");
        });
    };
    ;
    measurementUnitComponent.prototype.LoadSingleMeasurementUnit = function (SelectedMeasurementUnit) {
        this.measurementUnit = SelectedMeasurementUnit;
    };
    ;
    measurementUnitComponent.prototype.SaveUpdateMeasurementUnit = function () {
        var _this = this;
        if (this.IsValid(this.measurementUnit) == true) {
            if (this.measurementUnit.ID == 0) {
                this._measurementUnitService.saveMeasurementUnit(this.measurementUnit)
                    .subscribe(function (result) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadMeasurementUnits();
                }, function (error) {
                    _this._alertService.error("Save Failed");
                });
            }
            else {
                this._measurementUnitService.updateMeasurementUnit(this.measurementUnit)
                    .subscribe(function (result) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadMeasurementUnits();
                }, function (error) {
                    _this._alertService.error("Update Failed");
                });
            }
        }
    };
    ;
    measurementUnitComponent.prototype.DeleteMeasurementUnit = function () {
        var _this = this;
        this._measurementUnitService.deleteMeasurementUnit(this.measurementUnit)
            .subscribe(function (result) {
            _this._alertService.success("Deleted Successfully");
            _this.LoadMeasurementUnits();
        }, function (error) {
            _this._alertService.error("Delete failed");
        });
    };
    ;
    measurementUnitComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/moduleMasterData/template/measurementUnit.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [measurementUnit_service_1.measurementUnitService, index_1.AlertService])
    ], measurementUnitComponent);
    return measurementUnitComponent;
}());
exports.measurementUnitComponent = measurementUnitComponent;
//# sourceMappingURL=measurementUnit.component.js.map