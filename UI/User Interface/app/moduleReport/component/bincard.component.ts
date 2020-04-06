import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { summaryReportService } from '../../moduleReport/service/summaryReport.service';
import { itemService } from '../../moduleMasterData/services/item.service';

import { IItem } from '../../moduleMasterData/interface/item.interface';
import { IBinCard } from '../../moduleReport/interface/binCard.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/moduleReport/template/bincard.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class reportBinCardComponent {
    private _summaryReportService: summaryReportService;
    private _itemService: itemService;

    constructor(_summaryReportService: summaryReportService, _itemService: itemService) {
        this._summaryReportService = _summaryReportService;
        this._itemService = _itemService;
    }

    ListOfItems: IItem[] = [];
    ListOfBinCards: IBinCard[] = [];

    ngOnInit() {
        this.LoadItems();
    };

    SelectedItemID: number;
    SelectedItemCode: string;

    EntryDateFrom: string;
    EntryDateTo: string;
    IssueDateFrom: string;
    IssueDateTo: string;

    ShowItemCode(): void {
        this.SelectedItemCode = this.ListOfItems.filter(x => x.ID == this.SelectedItemID)[0].Code;
    };

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

    LoadBinCard(): void {
        this.PrepareCriteria();

        this._summaryReportService.getBinCardByItemID(this.SelectedItemID, this.EntryDateFrom, this.EntryDateTo, this.IssueDateFrom, this.IssueDateTo)
            .subscribe(resultData => {
                this.ListOfBinCards = resultData;
            }, error => {
                alert('getBinCardByItemID failed!');
            });
    };
}