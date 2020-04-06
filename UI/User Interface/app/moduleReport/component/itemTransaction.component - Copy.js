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
var item_service_1 = require("../../moduleMasterData/services/item.service");
var reportItemTransactionComponent = /** @class */ (function () {
    function reportItemTransactionComponent(_summaryReportService, _itemService) {
        this.ListOfItems = [];
        this.ListOfItemTransactions = [];
        this._summaryReportService = _summaryReportService;
        this._itemService = _itemService;
    }
    reportItemTransactionComponent.prototype.ngOnInit = function () {
        this.LoadItems();
    };
    ;
    reportItemTransactionComponent.prototype.LoadItems = function () {
        var _this = this;
        this._itemService.getItems()
            .subscribe(function (resultData) {
            _this.ListOfItems = resultData;
        }, function (error) {
            alert('getItems failed!');
        });
    };
    ;
    reportItemTransactionComponent.prototype.PrepareCriteria = function () {
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
    reportItemTransactionComponent.prototype.LoadItemTransaction = function () {
        var _this = this;
        this.PrepareCriteria();
        this._summaryReportService.getItemTransactionByItemID(this.SelectedItemID, this.EntryDateFrom, this.EntryDateTo, this.IssueDateFrom, this.IssueDateTo)
            .subscribe(function (resultData) {
            _this.ListOfItemTransactions = resultData;
            console.log(_this.ListOfItemTransactions);
        }, function (error) {
            alert('getItemTransactionByItemID failed!');
        });
    };
    ;
    reportItemTransactionComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/moduleReport/template/itemTransaction.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [summaryReport_service_1.summaryReportService, item_service_1.itemService])
    ], reportItemTransactionComponent);
    return reportItemTransactionComponent;
}());
exports.reportItemTransactionComponent = reportItemTransactionComponent;
//# sourceMappingURL=itemTransaction.component - Copy.js.map