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
var issue_service_1 = require("../../moduleIssue/service/issue.service");
var reportIssueComponent = /** @class */ (function () {
    function reportIssueComponent(_issueService) {
        this.ListOfIssues = [];
        this.ListOfIssueDetails = [];
        this.ListOfSingleIssueIssueDetails = [];
        this._issueService = _issueService;
    }
    reportIssueComponent.prototype.ngOnInit = function () {
        this.LoadIssueDetails();
    };
    ;
    reportIssueComponent.prototype.SelectSingleIssue = function (SelectedIssue) {
        var _this = this;
        this._issueService.getAllIssueDetailsByParentID(SelectedIssue.ID)
            .subscribe(function (resultData) {
            _this.ListOfSingleIssueIssueDetails = resultData;
        }, function (error) {
        });
    };
    ;
    reportIssueComponent.prototype.LoadIssues = function () {
        var _this = this;
        this._issueService.getIssues()
            .subscribe(function (resultData) {
            _this.ListOfIssues = resultData;
        }, function (error) {
            alert('getIssues failed!');
        });
    };
    ;
    reportIssueComponent.prototype.CountDetailItem = function (entryID) {
        this.NumberOfItems = Object.assign([], this.ListOfIssueDetails).filter(function (item) { return item.IssueID == entryID; }).length;
        return this.NumberOfItems;
    };
    reportIssueComponent.prototype.LoadIssueDetails = function () {
        var _this = this;
        this._issueService.getIssueDetails()
            .subscribe(function (resultData) {
            _this.ListOfIssueDetails = resultData;
            _this.LoadIssues();
        }, function (error) {
            alert('getIssues failed!');
        });
    };
    ;
    reportIssueComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/moduleReport/template/reportIssue.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [issue_service_1.issueService])
    ], reportIssueComponent);
    return reportIssueComponent;
}());
exports.reportIssueComponent = reportIssueComponent;
//# sourceMappingURL=reportIssue.component.js.map