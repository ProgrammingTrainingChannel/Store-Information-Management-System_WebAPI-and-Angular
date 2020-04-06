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
var asset_service_1 = require("../../moduleAsset/service/asset.service");
var reportAssetComponent = /** @class */ (function () {
    function reportAssetComponent(_assetService) {
        this.ListOfAssets = [];
        this._assetService = _assetService;
    }
    reportAssetComponent.prototype.ngOnInit = function () {
        this.LoadAssets();
    };
    ;
    reportAssetComponent.prototype.LoadAssets = function () {
        var _this = this;
        this._assetService.getAssets()
            .subscribe(function (resultData) {
            _this.ListOfAssets = resultData;
        }, function (error) {
            alert('getAssets failed!');
        });
    };
    ;
    reportAssetComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/moduleReport/template/reportAsset.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [asset_service_1.assetService])
    ], reportAssetComponent);
    return reportAssetComponent;
}());
exports.reportAssetComponent = reportAssetComponent;
//# sourceMappingURL=reportAsset.component.js.map