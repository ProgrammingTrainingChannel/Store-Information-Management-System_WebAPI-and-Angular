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
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var purchaseOrderService = /** @class */ (function () {
    function purchaseOrderService(_http) {
        this._http = _http;
    }
    purchaseOrderService.prototype.getPurchaseOrders = function () {
        return this._http.get('http://localhost:1065/api/PurchaseOrder/GetAllPurchaseOrders')
            .map(function (response) { return response.json(); });
    };
    ;
    purchaseOrderService.prototype.savePurchaseOrder = function (purchaseOrder) {
        var bodyString = JSON.stringify(purchaseOrder); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:1065/api/PurchaseOrder/SavePurchaseOrder", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    purchaseOrderService.prototype.updatePurchaseOrder = function (purchaseOrder) {
        var bodyString = JSON.stringify(purchaseOrder); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:1065/api/PurchaseOrder/UpdatePurchaseOrder", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    purchaseOrderService.prototype.deletePurchaseOrder = function (purchaseOrder) {
        var bodyString = JSON.stringify(purchaseOrder); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:1065/api/PurchaseOrder/DeletePurchaseOrder", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    ///////////////////////////////// Detail //////////////////
    purchaseOrderService.prototype.getPurchaseOrderDetails = function () {
        return this._http.get('http://localhost:1065/api/PurchaseOrderDetail/GetAllPurchaseOrderDetails')
            .map(function (response) { return response.json(); });
    };
    ;
    purchaseOrderService.prototype.getAllPurchaseOrderDetailsByParentID = function (parentID) {
        return this._http.get("http://localhost:1065/api/PurchaseOrderDetail/GetAllPurchaseOrderDetailsByParentID?ID=" + parentID)
            .map(function (response) { return response.json(); });
    };
    ;
    purchaseOrderService.prototype.savePurchaseOrderDetail = function (purchaseOrderDetail) {
        var bodyString = JSON.stringify(purchaseOrderDetail); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:1065/api/PurchaseOrderDetail/SavePurchaseOrderDetail", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    purchaseOrderService.prototype.updatePurchaseOrderDetail = function (purchaseOrderDetail) {
        var bodyString = JSON.stringify(purchaseOrderDetail); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:1065/api/PurchaseOrderDetail/UpdatePurchaseOrderDetail", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    purchaseOrderService.prototype.deletePurchaseOrderDetail = function (purchaseOrderDetail) {
        var bodyString = JSON.stringify(purchaseOrderDetail); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:1065/api/PurchaseOrderDetail/DeletePurchaseOrderDetail", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    purchaseOrderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], purchaseOrderService);
    return purchaseOrderService;
}());
exports.purchaseOrderService = purchaseOrderService;
//# sourceMappingURL=purchaseOrder.service.js.map