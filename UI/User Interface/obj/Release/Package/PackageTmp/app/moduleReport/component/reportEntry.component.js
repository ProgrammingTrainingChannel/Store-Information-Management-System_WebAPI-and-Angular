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
var entry_service_1 = require("../../moduleEntry/service/entry.service");
var reportEntryComponent = /** @class */ (function () {
    function reportEntryComponent(_entryService) {
        this.ListOfEntrys = [];
        this.ListOfEntryDetails = [];
        this.ListOfSingleEntryEntryDetails = [];
        this._entryService = _entryService;
    }
    reportEntryComponent.prototype.ngOnInit = function () {
        this.LoadEntryDetails();
    };
    ;
    reportEntryComponent.prototype.SelectSingleEntry = function (SelectedEntry) {
        var _this = this;
        this._entryService.getAllEntryDetailsByParentID(SelectedEntry.ID)
            .subscribe(function (resultData) {
            _this.ListOfSingleEntryEntryDetails = resultData;
        }, function (error) {
        });
    };
    ;
    reportEntryComponent.prototype.LoadEntrys = function () {
        var _this = this;
        this._entryService.getEntries()
            .subscribe(function (resultData) {
            _this.ListOfEntrys = resultData;
        }, function (error) {
            alert('getEntrys failed!');
        });
    };
    ;
    reportEntryComponent.prototype.CountDetailItem = function (entryID) {
        this.NumberOfItems = Object.assign([], this.ListOfEntryDetails).filter(function (item) { return item.EntryID == entryID; }).length;
        return this.NumberOfItems;
    };
    reportEntryComponent.prototype.LoadEntryDetails = function () {
        var _this = this;
        this._entryService.getEntryDetails()
            .subscribe(function (resultData) {
            _this.ListOfEntryDetails = resultData;
            _this.LoadEntrys();
        }, function (error) {
            alert('getEntrys failed!');
        });
    };
    ;
    reportEntryComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/moduleReport/template/reportEntry.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [entry_service_1.entryService])
    ], reportEntryComponent);
    return reportEntryComponent;
}());
exports.reportEntryComponent = reportEntryComponent;
//# sourceMappingURL=reportEntry.component.js.map