import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { lookupService } from '../../shared/services/lookup.service';
import { itemService } from '../../moduleMasterData/services/item.service';
import { issueService } from '../service/issue.service';

import { AlertService } from '../../_services/index';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IItem } from '../../moduleMasterData/interface/item.interface';
import { IIssue } from '../../moduleIssue/interface/issue.interface';
import { IIssueDetail } from '../interface/issueDetail.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/moduleIssue/template/issue.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class issueComponent {
    private _lookupService: lookupService;
    private _itemService: itemService;
    private _issueService: issueService;
    private _alertService: AlertService;

    constructor(_lookupService: lookupService, _itemService: itemService, _issueService: issueService, _alertService: AlertService) {
        this._lookupService = _lookupService;
        this._itemService = _itemService;
        this._issueService = _issueService;
        this._alertService = _alertService;
    }

    ListOfItems: IItem[] = [];

    ListOfIssues: IIssue[] = [];
    ListOfIssueDetails: IIssueDetail[] = [];

    issue: IIssue = {
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

    issueDetail: IIssueDetail = {
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

    ngOnInit() {
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

    SelectedIssueID: number;
    SelectedItemID: number;

    LoadItems(): void {
        this._itemService.getItems()
            .subscribe(resultData => {
                this.ListOfItems = resultData;
            }, error => {
                this._alertService.error("Item loading failed");
            });
    };

    LoadIssues(): void {
        this._issueService.getIssues()
            .subscribe(resultData => {
                this.ListOfIssues = resultData;
            }, error => {
                alert('getIssues failed!');
            });
    };

    LoadIssueDetails(): void {
        this._issueService.getIssueDetails()
            .subscribe(resultData => {
                this.ListOfIssueDetails = resultData;
            }, error => {
                alert('getIssues failed!');
            });
    };

    LoadSingleIssue(SelectedIssue: IIssue): void {
        this.issue = SelectedIssue;
    };

    LoadSingleIssueDetail(SelectedIssueDetail: IIssueDetail): void {
        this.SelectedItemID = SelectedIssueDetail.Item.ID;
        this.issueDetail = SelectedIssueDetail;
    };

    SelectSingleIssue(SelectedIssue: IIssue): void {
        this.SelectedIssueID = SelectedIssue.ID;

        this._issueService.getAllIssueDetailsByParentID(this.SelectedIssueID)
            .subscribe(resultData => {
                this.ListOfIssueDetails = resultData;
            }, error => {
                this._alertService.error("getAllIssueDetailsByParentID failed!");
            });
    };

    SaveUpdateIssue(): void {
        if (this.issue.ID == 0) {
            this._issueService.saveIssue(this.issue)
                .subscribe(result => {
                    this._alertService.success("Saved Successfully");
                    this.LoadIssues();
                }, error => {
                    this._alertService.error("Save Failed");
                });
        }
        else {
            this._issueService.updateIssue(this.issue)
                .subscribe(result => {
                    this._alertService.success("Updated Successfully");
                    this.LoadIssues();
                }, error => {
                    this._alertService.error("Update Failed");
                });
        }
    };

    SaveUpdateIssueDetail(): void {
        this.issueDetail.IssueID = this.SelectedIssueID;
        this.issueDetail.ItemID = this.SelectedItemID;
        this.issueDetail.TotalPrice = this.issueDetail.Quantity * this.issueDetail.UnitPrice;

        if (this.issueDetail.ID == 0) {
            this._issueService.saveIssueDetail(this.issueDetail)
                .subscribe(result => {
                    this._alertService.success("Saved Successfully");
                    this.LoadIssueDetails();
                }, error => {
                    this._alertService.error("Save Failed");
                });
        }
        else {
            this._issueService.updateIssueDetail(this.issueDetail)
                .subscribe(result => {
                    this._alertService.success("Updated Successfully");
                    this.LoadIssueDetails();
                }, error => {
                    this._alertService.error("Update Failed");
                });
        }
    };

    DeleteIssue(issue: IIssue): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._issueService.deleteIssue(issue)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadIssues();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };

    DeleteIssueDetail(issueDetail: IIssueDetail): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._issueService.deleteIssueDetail(issueDetail)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadIssueDetails();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}