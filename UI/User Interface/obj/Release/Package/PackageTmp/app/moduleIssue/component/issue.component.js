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
var lookup_service_1 = require("../../shared/services/lookup.service");
var item_service_1 = require("../../moduleMasterData/services/item.service");
var issue_service_1 = require("../service/issue.service");
var index_1 = require("../../_services/index");
var issueComponent = /** @class */ (function () {
    function issueComponent(_lookupService, _itemService, _issueService, _alertService) {
        this.ListOfItems = [];
        this.ListOfIssues = [];
        this.ListOfIssueDetails = [];
        this.issue = {
            ID: 0,
            ApprovedBy: '',
            ApprovedDate: new Date(),
            IssuedBy: '',
            IssuedDate: new Date(),
            RecievedBy: '',
            RecievedDate: new Date(),
            CheckedBy: '',
            CheckedDate: new Date(),
            Remark: '',
            CreatedBy: 'bereket',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: new Date()
        };
        this.issueDetail = {
            ID: 0,
            Quantity: 0,
            UnitPrice: 0,
            TotalPrice: 0,
            Remark: '',
            Issue: null,
            Item: null,
            IssueID: 0,
            ItemID: 0,
            CreatedBy: 'bereket',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: new Date()
        };
        this._lookupService = _lookupService;
        this._itemService = _itemService;
        this._issueService = _issueService;
        this._alertService = _alertService;
    }
    issueComponent.prototype.ngOnInit = function () {
        this.issue.ID = 0;
        this.issue.ApprovedBy = '';
        this.issue.ApprovedDate = new Date();
        this.issue.IssuedBy = '';
        this.issue.IssuedDate = new Date();
        this.issue.RecievedBy = '';
        this.issue.RecievedDate = new Date();
        this.issue.CheckedBy = '';
        this.issue.CheckedDate = new Date();
        this.issue.Remark = '';
        this.issue.CreatedBy = 'bereket';
        this.issue.CreatedDate = new Date();
        this.issue.UpdatedBy = '';
        this.issue.UpdatedDate = null;
        /////////////////////////
        this.issueDetail.ID = 0;
        this.issueDetail.Quantity = 0;
        this.issueDetail.UnitPrice = 0;
        this.issueDetail.TotalPrice = 0;
        this.issueDetail.Remark = '';
        this.issueDetail.IssueID = 0;
        this.issueDetail.ItemID = 0;
        this.issueDetail.CreatedBy = 'bereket';
        this.issueDetail.CreatedDate = new Date();
        this.issueDetail.UpdatedBy = '';
        this.issueDetail.UpdatedDate = null;
        this.LoadIssues();
        this.LoadItems();
        //this.LoadIssueDetails();
    };
    ;
    issueComponent.prototype.LoadItems = function () {
        var _this = this;
        this._itemService.getItems()
            .subscribe(function (resultData) {
            _this.ListOfItems = resultData;
        }, function (error) {
            _this._alertService.error("Item loading failed");
        });
    };
    ;
    issueComponent.prototype.LoadIssues = function () {
        var _this = this;
        this._issueService.getIssues()
            .subscribe(function (resultData) {
            _this.ListOfIssues = resultData;
        }, function (error) {
            alert('getIssues failed!');
        });
    };
    ;
    issueComponent.prototype.LoadIssueDetails = function () {
        var _this = this;
        this._issueService.getIssueDetails()
            .subscribe(function (resultData) {
            _this.ListOfIssueDetails = resultData;
        }, function (error) {
            alert('getIssues failed!');
        });
    };
    ;
    issueComponent.prototype.LoadSingleIssue = function (SelectedIssue) {
        this.issue = SelectedIssue;
    };
    ;
    issueComponent.prototype.LoadSingleIssueDetail = function (SelectedIssueDetail) {
        this.SelectedItemID = SelectedIssueDetail.Item.ID;
        this.issueDetail = SelectedIssueDetail;
    };
    ;
    issueComponent.prototype.SelectSingleIssue = function (SelectedIssue) {
        var _this = this;
        this.SelectedIssueID = SelectedIssue.ID;
        this._issueService.getAllIssueDetailsByParentID(this.SelectedIssueID)
            .subscribe(function (resultData) {
            _this.ListOfIssueDetails = resultData;
        }, function (error) {
            _this._alertService.error("getAllIssueDetailsByParentID failed!");
        });
    };
    ;
    issueComponent.prototype.SaveUpdateIssue = function () {
        var _this = this;
        if (this.issue.ID == 0) {
            this._issueService.saveIssue(this.issue)
                .subscribe(function (result) {
                _this._alertService.success("Saved Successfully");
                _this.LoadIssues();
            }, function (error) {
                _this._alertService.error("Save Failed");
            });
        }
        else {
            this._issueService.updateIssue(this.issue)
                .subscribe(function (result) {
                _this._alertService.success("Updated Successfully");
                _this.LoadIssues();
            }, function (error) {
                _this._alertService.error("Update Failed");
            });
        }
    };
    ;
    issueComponent.prototype.SaveUpdateIssueDetail = function () {
        var _this = this;
        this.issueDetail.IssueID = this.SelectedIssueID;
        this.issueDetail.ItemID = this.SelectedItemID;
        this.issueDetail.TotalPrice = this.issueDetail.Quantity * this.issueDetail.UnitPrice;
        if (this.issueDetail.ID == 0) {
            this._issueService.saveIssueDetail(this.issueDetail)
                .subscribe(function (result) {
                _this._alertService.success("Saved Successfully");
                _this.LoadIssueDetails();
            }, function (error) {
                _this._alertService.error("Save Failed");
            });
        }
        else {
            this._issueService.updateIssueDetail(this.issueDetail)
                .subscribe(function (result) {
                _this._alertService.success("Updated Successfully");
                _this.LoadIssueDetails();
            }, function (error) {
                _this._alertService.error("Update Failed");
            });
        }
    };
    ;
    issueComponent.prototype.DeleteIssue = function (issue) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._issueService.deleteIssue(issue)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadIssues();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    issueComponent.prototype.DeleteIssueDetail = function (issueDetail) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._issueService.deleteIssueDetail(issueDetail)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadIssueDetails();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    issueComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/moduleIssue/template/issue.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [lookup_service_1.lookupService, item_service_1.itemService, issue_service_1.issueService, index_1.AlertService])
    ], issueComponent);
    return issueComponent;
}());
exports.issueComponent = issueComponent;
//# sourceMappingURL=issue.component.js.map