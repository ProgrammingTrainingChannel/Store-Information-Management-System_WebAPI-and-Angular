import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { summaryReportService } from '../../moduleReport/service/summaryReport.service';
import { itemService } from '../../moduleMasterData/services/item.service';

import { IItem } from '../../moduleMasterData/interface/item.interface';
import { IItemTransaction } from '../../moduleReport/interface/itemTransaction.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/moduleReport/template/itemTransaction.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})

export class reportItemTransactionComponent {
    private _summaryReportService: summaryReportService;
    private _itemService: itemService;

    constructor(_summaryReportService: summaryReportService, _itemService: itemService) {
        this._summaryReportService = _summaryReportService;
        this._itemService = _itemService;
    }

    ListOfItems: IItem[] = [];
    ListOfItemTransactions: IItemTransaction[] = [];

    ngOnInit() {
        this.LoadItems();
    };

    SelectedItemID: number;
    EntryDateFrom: string;
    EntryDateTo: string;
    IssueDateFrom: string;
    IssueDateTo: string;

    LoadItems(): void {
        this._itemService.getItems()
            .subscribe(resultData => {
                this.ListOfItems = resultData;
            }, error => {
                alert('getItems failed!');
            });
    };

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

    LoadItemTransaction(): void {
        this.PrepareCriteria();

        this._summaryReportService.getItemTransactionByItemID(this.SelectedItemID, this.EntryDateFrom, this.EntryDateTo, this.IssueDateFrom, this.IssueDateTo)
            .subscribe(resultData => {
                this.ListOfItemTransactions = resultData;

                console.log(this.ListOfItemTransactions);
            }, error => {
                alert('getItemTransactionByItemID failed!');
            });
    };
}