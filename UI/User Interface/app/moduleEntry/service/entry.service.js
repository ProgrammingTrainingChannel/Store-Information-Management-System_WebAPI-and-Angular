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
var entryService = /** @class */ (function () {
    function entryService(_http) {
        this._http = _http;
    }
    entryService.prototype.getEntries = function () {
        return this._http.get('http://localhost:1065/api/Entry/GetAllEntries')
            .map(function (response) { return response.json(); });
    };
    ;
    entryService.prototype.saveEntry = function (entry) {
        var bodyString = JSON.stringify(entry); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:1065/api/Entry/SaveEntry", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    entryService.prototype.updateEntry = function (entry) {
        var bodyString = JSON.stringify(entry); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:1065/api/Entry/UpdateEntry", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    entryService.prototype.deleteEntry = function (entry) {
        var bodyString = JSON.stringify(entry); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:1065/api/Entry/DeleteEntry", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    //////////////////////// Details //////////////////
    entryService.prototype.getEntryDetails = function () {
        return this._http.get('http://localhost:1065/api/EntryDetail/GetAllEntryDetails')
            .map(function (response) { return response.json(); });
    };
    ;
    entryService.prototype.getAllEntryDetailsByParentID = function (parentID) {
        return this._http.get("http://localhost:1065/api/EntryDetail/GetAllEntryDetailsByParentID?ID=" + parentID)
            .map(function (response) { return response.json(); });
    };
    ;
    entryService.prototype.saveEntryDetail = function (entryDetail) {
        var bodyString = JSON.stringify(entryDetail); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:1065/api/EntryDetail/SaveEntryDetail", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    entryService.prototype.updateEntryDetail = function (entryDetail) {
        var bodyString = JSON.stringify(entryDetail); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:1065/api/EntryDetail/UpdateEntryDetail", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    entryService.prototype.deleteEntryDetail = function (entryDetail) {
        var bodyString = JSON.stringify(entryDetail); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:1065/api/EntryDetail/DeleteEntryDetail", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    entryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], entryService);
    return entryService;
}());
exports.entryService = entryService;
//# sourceMappingURL=entry.service.js.map