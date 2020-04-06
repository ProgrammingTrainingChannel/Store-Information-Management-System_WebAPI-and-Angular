import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { issueService } from '../../moduleIssue/service/issue.service';

import { IIssue } from '../../moduleIssue/interface/issue.interface';
import { IIssueDetail } from '../interface/issueDetail.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/moduleReport/template/reportIssue.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class reportIssueComponent {
    private _issueService: issueService;

    constructor(_issueService: issueService) {
        this._issueService = _issueService;
    }

    ListOfIssues: IIssue[] = [];
    ListOfIssueDetails: IIssueDetail[] = [];
    ListOfSingleIssueIssueDetails: IIssueDetail[] = [];

    ngOnInit() {        
        this.LoadIssueDetails();
    };

    SelectSingleIssue(SelectedIssue: IIssue): void {
        this._issueService.getAllIssueDetailsByParentID(SelectedIssue.ID)
            .subscribe(resultData => {
                this.ListOfSingleIssueIssueDetails = resultData;
            }, error => {
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

    NumberOfItems: number;
    CountDetailItem(entryID: number): number {
        this.NumberOfItems = Object.assign([], this.ListOfIssueDetails).filter(
            item => item.IssueID == entryID
        ).length;

        return this.NumberOfItems;
    }

    LoadIssueDetails(): void {
        this._issueService.getIssueDetails()
            .subscribe(resultData => {
                this.ListOfIssueDetails = resultData;
                this.LoadIssues();
            }, error => {
                alert('getIssues failed!');
            });
    };
}