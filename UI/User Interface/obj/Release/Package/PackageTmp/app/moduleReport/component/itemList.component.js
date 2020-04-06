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
var summaryReport_service_1 = require("../../moduleReport/service/summaryReport.service");
var reportItemListComponent = /** @class */ (function () {
    function reportItemListComponent(_summaryReportService) {
        this.ListOfItemLists = [];
        this._summaryReportService = _summaryReportService;
    }
    reportItemListComponent.prototype.ngOnInit = function () {
    };
    ;
    reportItemListComponent.prototype.PrepareCriteria = function () {
        if (this.EntryDateFrom == undefined) {
            this.EntryDateFrom = "-";
        }
        if (this.EntryDateTo == undefined) {
            this.EntryDateTo = "-";
        }
        if (this.IssueDateFrom == undefined) {
            this.IssueDateFrom = "-";
        }
        if (this.IssueDateTo == undefined) {
            this.IssueDateTo = "-";
        }
    };
    ;
    reportItemListComponent.prototype.LoadItemList = function () {
        var _this = this;
        this.PrepareCriteria();
        this._summaryReportService.getItemList(this.EntryDateFrom, this.EntryDateTo, this.IssueDateFrom, this.IssueDateTo)
            .subscribe(function (resultData) {
            _this.ListOfItemLists = resultData;
        }, function (error) {
            alert('getItemList failed!');
        });
    };
    ;
    reportItemListComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/moduleReport/template/itemList.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [summaryReport_service_1.summaryReportService])
    ], reportItemListComponent);
    return reportItemListComponent;
}());
exports.reportItemListComponent = reportItemListComponent;
//# sourceMappingURL=itemList.component.js.map