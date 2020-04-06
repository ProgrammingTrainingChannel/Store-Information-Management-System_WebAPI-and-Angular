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
var reportBinCardComponent = /** @class */ (function () {
    function reportBinCardComponent(_summaryReportService, _itemService) {
        this.ListOfItems = [];
        this.ListOfBinCards = [];
        this._summaryReportService = _summaryReportService;
        this._itemService = _itemService;
    }
    reportBinCardComponent.prototype.ngOnInit = function () {
        this.LoadItems();
    };
    ;
    reportBinCardComponent.prototype.ShowItemCode = function () {
        var _this = this;
        this.SelectedItemCode = this.ListOfItems.filter(function (x) { return x.ID == _this.SelectedItemID; })[0].Code;
    };
    ;
    reportBinCardComponent.prototype.LoadItems = function () {
        var _this = this;
        this._itemService.getItems()
            .subscribe(function (resultData) {
            _this.ListOfItems = resultData;
        }, function (error) {
            alert('getItems failed!');
        });
    };
    ;
    reportBinCardComponent.prototype.PrepareCriteria = function () {
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
    reportBinCardComponent.prototype.LoadBinCard = function () {
        var _this = this;
        this.PrepareCriteria();
        this._summaryReportService.getBinCardByItemID(this.SelectedItemID, this.EntryDateFrom, this.EntryDateTo, this.IssueDateFrom, this.IssueDateTo)
            .subscribe(function (resultData) {
            _this.ListOfBinCards = resultData;
        }, function (error) {
            alert('getBinCardByItemID failed!');
        });
    };
    ;
    reportBinCardComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/moduleReport/template/bincard.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [summaryReport_service_1.summaryReportService, item_service_1.itemService])
    ], reportBinCardComponent);
    return reportBinCardComponent;
}());
exports.reportBinCardComponent = reportBinCardComponent;
//# sourceMappingURL=bincard.component.js.map