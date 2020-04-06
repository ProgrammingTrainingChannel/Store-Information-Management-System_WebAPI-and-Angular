import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IEntry } from '../interface/entry.interface';
import { IEntryDetail } from '../interface/entryDetail.interface';

@Injectable()
export class entryService {

    constructor(private _http: Http) { }

    getEntries(): Observable<IEntry[]> {
        return this._http.get('http://localhost:1065/api/Entry/GetAllEntries')
            .map((response: Response) => <IEntry[]>response.json());
    };

    saveEntry(entry: IEntry): Observable<any> {
        let bodyString = JSON.stringify(entry); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/Entry/SaveEntry", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateEntry(entry: IEntry): Observable<any> {
        let bodyString = JSON.stringify(entry); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/Entry/UpdateEntry", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteEntry(entry: IEntry): Observable<any> {
        let bodyString = JSON.stringify(entry); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/Entry/DeleteEntry", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    //////////////////////// Details //////////////////

    getEntryDetails(): Observable<IEntryDetail[]> {
        return this._http.get('http://localhost:1065/api/EntryDetail/GetAllEntryDetails')
            .map((response: Response) => <IEntryDetail[]>response.json());
    };

    getAllEntryDetailsByParentID(parentID: number): Observable<IEntryDetail[]> {
        return this._http.get("http://localhost:1065/api/EntryDetail/GetAllEntryDetailsByParentID?ID="+ parentID)
            .map((response: Response) => <IEntryDetail[]>response.json());
    };

    saveEntryDetail(entryDetail: IEntryDetail): Observable<any> {
        let bodyString = JSON.stringify(entryDetail); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/EntryDetail/SaveEntryDetail", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateEntryDetail(entryDetail: IEntryDetail): Observable<any> {
        let bodyString = JSON.stringify(entryDetail); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/EntryDetail/UpdateEntryDetail", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteEntryDetail(entryDetail: IEntryDetail): Observable<any> {
        let bodyString = JSON.stringify(entryDetail); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/EntryDetail/DeleteEntryDetail", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };
}
