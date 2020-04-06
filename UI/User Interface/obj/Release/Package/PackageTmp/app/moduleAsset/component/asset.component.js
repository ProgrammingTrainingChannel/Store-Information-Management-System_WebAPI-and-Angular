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
var asset_service_1 = require("../service/asset.service");
var index_1 = require("../../_services/index");
var assetComponent = /** @class */ (function () {
    function assetComponent(_assetService, _alertService) {
        this.ListOfAssets = [];
        this.asset = {
            ID: 0,
            AssetDescription: '',
            Marque: '',
            Model: '',
            SerialNumber: '',
            AssetCode: '',
            Quantity: 0,
            AssignedLocation: '',
            DeployedTo: '',
            ResponsibleParty: '',
            CurrentCondition: '',
            CountryOfMake: '',
            DateOfPurchase: new Date(),
            EstimatedCost: 0,
            InsuranceStartDate: new Date(),
            InsuranceEndDate: new Date(),
            InsuranceType: ''
        };
        this._assetService = _assetService;
        this._alertService = _alertService;
    }
    assetComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != "generate_token") {
            alert("loggend in");
        }
        else {
            alert("not loggend in");
        }
        this.asset.ID = 0;
        this.asset.AssetDescription = '';
        this.asset.Marque = '';
        this.asset.Model = '';
        this.asset.SerialNumber = '';
        this.asset.AssetCode = '';
        this.asset.Quantity = 0;
        this.asset.AssignedLocation = '';
        this.asset.DeployedTo = '';
        this.asset.ResponsibleParty = '';
        this.asset.CurrentCondition = '';
        this.asset.CountryOfMake = '';
        this.asset.DateOfPurchase = new Date();
        this.asset.EstimatedCost = 0;
        this.asset.InsuranceStartDate = new Date();
        this.asset.InsuranceEndDate = new Date();
        this.asset.InsuranceType = '';
        this.LoadAssets();
    };
    ;
    assetComponent.prototype.LoadAssets = function () {
        var _this = this;
        this._assetService.getAssets()
            .subscribe(function (resultData) {
            _this.ListOfAssets = resultData;
        }, function (error) {
            alert('getAssets failed!');
        });
    };
    ;
    assetComponent.prototype.LoadSingleAsset = function (SelectedAsset) {
        this.asset = SelectedAsset;
    };
    ;
    assetComponent.prototype.SaveUpdateAsset = function () {
        var _this = this;
        if (this.asset.ID == 0) {
            this._assetService.saveAsset(this.asset)
                .subscribe(function (result) {
                _this._alertService.success("Saved Successfully");
                _this.LoadAssets();
            }, function (error) {
                _this._alertService.error("Save Failed");
            });
        }
        else {
            this._assetService.updateAsset(this.asset)
                .subscribe(function (result) {
                _this._alertService.success("Updated Successfully");
                _this.LoadAssets();
            }, function (error) {
                _this._alertService.error("Update Failed");
            });
        }
    };
    ;
    assetComponent.prototype.DeleteAsset = function (asset) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._assetService.deleteAsset(asset)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadAssets();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    assetComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/moduleAsset/template/asset.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [asset_service_1.assetService, index_1.AlertService])
    ], assetComponent);
    return assetComponent;
}());
exports.assetComponent = assetComponent;
//# sourceMappingURL=asset.component.js.map