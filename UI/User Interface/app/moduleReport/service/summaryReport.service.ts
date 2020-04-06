import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IBinCard } from '../../moduleReport/interface/binCard.interface';
import { IItemTransaction } from '../../moduleReport/interface/itemTransaction.interface';
import { IItemList } from '../../moduleReport/interface/itemList.interface';

@Injectable()
export class summaryReportService {

    constructor(private _http: Http) { }

    getItemTransactionByItemID(SelectedItemID: number, EntryDateFrom: string, EntryDateTo: string, IssueDateFrom: string, IssueDateTo: string): Observable<IItemTransaction[]> {
        return this._http.get("http://localhost:1065/api/SummaryReport/GetItemTransactionByItemID?itemID=" + SelectedItemID + "&entryDateFrom=" + EntryDateFrom + "&entryDateTo=" + EntryDateTo + "&issueDateFrom=" + IssueDateFrom + "&issueDateTo=" + IssueDateTo)
            .map((response: Response) => <IItemTransaction[]>response.json());
    };

    getBinCardByItemID(SelectedItemID: number, EntryDateFrom: string, EntryDateTo: string, IssueDateFrom: string, IssueDateTo: string): Observable<IBinCard[]> {
        return this._http.get("http://localhost:1065/api/SummaryReport/GetBinCardByItemID?itemID=" + SelectedItemID + "&entryDateFrom=" + EntryDateFrom + "&entryDateTo=" + EntryDateTo + "&issueDateFrom=" + IssueDateFrom + "&issueDateTo=" + IssueDateTo)
            .map((response: Response) => <IBinCard[]>response.json());
    };

    getItemList(EntryDateFrom: string, EntryDateTo: string, IssueDateFrom: string, IssueDateTo: string): Observable<IItemList[]> {
        return this._http.get("http://localhost:1065/api/SummaryReport/GetItemList?entryDateFrom=" + EntryDateFrom + "&entryDateTo=" + EntryDateTo + "&issueDateFrom=" + IssueDateFrom + "&issueDateTo=" + IssueDateTo)
            .map((response: Response) => <IItemList[]>response.json());
    };
}
