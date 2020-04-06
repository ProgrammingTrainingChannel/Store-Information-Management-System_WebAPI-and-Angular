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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var lookupService = /** @class */ (function () {
    function lookupService(_http) {
        this._http = _http;
    }
    lookupService.prototype.getIssues = function () {
        return this._http.get('http://localhost:1065/api/Issue/GetIssues')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getIssueDetails = function () {
        return this._http.get('http://localhost:1065/api/IssueDetail/GetIssueDetails')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getEntrys = function () {
        return this._http.get('http://localhost:1065/api/Entry/GetEntries')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getEntryDetails = function () {
        return this._http.get('http://localhost:1065/api/EntryDetail/GetEntryDetails')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getPurchaseOrders = function () {
        return this._http.get('http://localhost:1065/api/PurchaseOrder/GetPurchaseOrders')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getPurchaseOrderDetails = function () {
        return this._http.get('http://localhost:1065/api/PurchaseOrderDetail/GetPurchaseOrderDetails')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getSuppliers = function () {
        return this._http.get('http://localhost:1065/api/Supplier/GetAllSuppliers')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getMeasurementUnits = function () {
        return this._http.get('http://localhost:1065/api/MeasurementUnit/GetAllMeasurementUnits')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], lookupService);
    return lookupService;
}());
exports.lookupService = lookupService;
//# sourceMappingURL=lookup.service.js.map