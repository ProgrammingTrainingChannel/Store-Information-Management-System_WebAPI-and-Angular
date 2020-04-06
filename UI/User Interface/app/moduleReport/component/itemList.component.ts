import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { summaryReportService } from '../../moduleReport/service/summaryReport.service';

import { IItemList } from '../../moduleReport/interface/itemList.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/moduleReport/template/itemList.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})

export class reportItemListComponent {
    private _summaryReportService: summaryReportService;

    constructor(_summaryReportService: summaryReportService) {
        this._summaryReportService = _summaryReportService;
    }

    ListOfItemLists: IItemList[] = [];

    ngOnInit() {
        
    };

    EntryDateFrom: string;
    EntryDateTo: string;
    IssueDateFrom: string;
    IssueDateTo: string;

    PrepareCriteria(): void {
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

    LoadItemList(): void {
        this.PrepareCriteria();

        this._summaryReportService.getItemList(this.EntryDateFrom, this.EntryDateTo, this.IssueDateFrom, this.IssueDateTo)
            .subscribe(resultData => {
                this.ListOfItemLists = resultData;
            }, error => {
                alert('getItemList failed!');
            });
    };
}
