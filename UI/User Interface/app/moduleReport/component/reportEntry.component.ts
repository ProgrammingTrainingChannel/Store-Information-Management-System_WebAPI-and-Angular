import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { entryService } from '../../moduleEntry/service/entry.service';

import { IEntry } from '../../moduleEntry/interface/entry.interface';
import { IEntryDetail } from '../interface/entryDetail.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/moduleReport/template/reportEntry.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class reportEntryComponent {
    private _entryService: entryService;

    constructor(_entryService: entryService) {
        this._entryService = _entryService;
    }

    ListOfEntrys: IEntry[] = [];
    ListOfEntryDetails: IEntryDetail[] = [];
    ListOfSingleEntryEntryDetails: IEntryDetail[] = [];

    ngOnInit() {        
        this.LoadEntryDetails();
    };

    SelectSingleEntry(SelectedEntry: IEntry): void {
        this._entryService.getAllEntryDetailsByParentID(SelectedEntry.ID)
            .subscribe(resultData => {
                this.ListOfSingleEntryEntryDetails = resultData;
            }, error => {
            });
    };

    LoadEntrys(): void {
        this._entryService.getEntries()
            .subscribe(resultData => {
                this.ListOfEntrys = resultData;
            }, error => {
                alert('getEntrys failed!');
            });
    };

    NumberOfItems: number;
    CountDetailItem(entryID: number): number {
        this.NumberOfItems = Object.assign([], this.ListOfEntryDetails).filter(
            item => item.EntryID == entryID
        ).length;

        return this.NumberOfItems;
    }

    LoadEntryDetails(): void {
        this._entryService.getEntryDetails()
            .subscribe(resultData => {
                this.ListOfEntryDetails = resultData;
                this.LoadEntrys();
            }, error => {
                alert('getEntrys failed!');
            });
    };
}