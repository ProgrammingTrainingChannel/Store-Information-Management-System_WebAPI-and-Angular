﻿import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IMasterData } from '../interface/masterData.interface';

@Injectable()
export class measurementUnitService {

    constructor(private _http: Http) { }

    getMeasurementUnits(): Observable<IMasterData[]> {
        return this._http.get('http://localhost:1065/api/MeasurementUnit/GetAllMeasurementUnits')
            .map((response: Response) => <IMasterData[]>response.json());
    };

    saveMeasurementUnit(measurementUnit: IMasterData): Observable<any> {
        let bodyString = JSON.stringify(measurementUnit); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/MeasurementUnit/SaveMeasurementUnit", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateMeasurementUnit(measurementUnit: IMasterData): Observable<any> {
        let bodyString = JSON.stringify(measurementUnit); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/MeasurementUnit/UpdateMeasurementUnit", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteMeasurementUnit(measurementUnit: IMasterData): Observable<any> {
        let bodyString = JSON.stringify(measurementUnit); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/MeasurementUnit/DeleteMeasurementUnit", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

}
