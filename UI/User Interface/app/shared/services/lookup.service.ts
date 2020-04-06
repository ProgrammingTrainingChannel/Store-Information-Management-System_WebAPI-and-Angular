import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IEntry } from '../../moduleEntry/interface/entry.interface';
import { IEntryDetail } from '../../moduleEntry/interface/entryDetail.interface';
import { IIssue } from '../../moduleIssue/interface/issue.interface';
import { IIssueDetail } from '../../moduleIssue/interface/issueDetail.interface';
import { IPurchaseOrder } from '../../modulePurchaseOrder/interface/purchaseOrder.interface';
import { IPurchaseOrderDetail } from '../../modulePurchaseOrder/interface/purchaseOrderDetail.interface';

@Injectable()
export class lookupService {

    constructor(private _http: Http) { }    

    getIssues(): Observable<IIssue[]> {
        return this._http.get('http://localhost:1065/api/Issue/GetIssues')
            .map((response: Response) => <IIssue[]>response.json());
    };

    getIssueDetails(): Observable<IIssueDetail[]> {
        return this._http.get('http://localhost:1065/api/IssueDetail/GetIssueDetails')
            .map((response: Response) => <IIssueDetail[]>response.json());
    };

    getEntrys(): Observable<IEntry[]> {
        return this._http.get('http://localhost:1065/api/Entry/GetEntries')
            .map((response: Response) => <IEntry[]>response.json());
    };

    getEntryDetails(): Observable<IEntryDetail[]> {
        return this._http.get('http://localhost:1065/api/EntryDetail/GetEntryDetails')
            .map((response: Response) => <IEntryDetail[]>response.json());
    };

    getPurchaseOrders(): Observable<IPurchaseOrder[]> {
        return this._http.get('http://localhost:1065/api/PurchaseOrder/GetPurchaseOrders')
            .map((response: Response) => <IPurchaseOrder[]>response.json());
    };

    getPurchaseOrderDetails(): Observable<IPurchaseOrderDetail[]> {
        return this._http.get('http://localhost:1065/api/PurchaseOrderDetail/GetPurchaseOrderDetails')
            .map((response: Response) => <IPurchaseOrderDetail[]>response.json());
    };

    getSuppliers(): Observable<ILookup[]> {
        return this._http.get('http://localhost:1065/api/Supplier/GetAllSuppliers')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getMeasurementUnits(): Observable<ILookup[]> {
        return this._http.get('http://localhost:1065/api/MeasurementUnit/GetAllMeasurementUnits')
            .map((response: Response) => <ILookup[]>response.json());
    };
}
