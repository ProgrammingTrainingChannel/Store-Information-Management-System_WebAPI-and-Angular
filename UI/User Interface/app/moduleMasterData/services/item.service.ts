﻿import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IItem } from '../interface/item.interface';

@Injectable()
export class itemService {

    constructor(private _http: Http) { }

    getItems(): Observable<IItem[]> {
        return this._http.get('http://localhost:1065/api/Item/GetAllItems')
            .map((response: Response) => <IItem[]>response.json());
    };

    saveItem(item: IItem): Observable<any> {
        let bodyString = JSON.stringify(item); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/Item/SaveItem", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateItem(item: IItem): Observable<any> {
        let bodyString = JSON.stringify(item); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/Item/UpdateItem", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteItem(item: IItem): Observable<any> {
        let bodyString = JSON.stringify(item); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/Item/DeleteItem", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

}
