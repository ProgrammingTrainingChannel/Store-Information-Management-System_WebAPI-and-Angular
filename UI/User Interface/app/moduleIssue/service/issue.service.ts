import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IIssue } from '../interface/issue.interface';
import { IIssueDetail } from '../interface/issueDetail.interface';

@Injectable()
export class issueService {

    constructor(private _http: Http) { }

    getIssues(): Observable<IIssue[]> {
        return this._http.get('http://localhost:1065/api/Issue/GetAllIssues')
            .map((response: Response) => <IIssue[]>response.json());
    };

    saveIssue(issue: IIssue): Observable<any> {
        let bodyString = JSON.stringify(issue); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/Issue/SaveIssue", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateIssue(issue: IIssue): Observable<any> {
        let bodyString = JSON.stringify(issue); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/Issue/UpdateIssue", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteIssue(issue: IIssue): Observable<any> {
        let bodyString = JSON.stringify(issue); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/Issue/DeleteIssue", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    ///////////////////// Details ///////////////////

    getIssueDetails(): Observable<IIssueDetail[]> {
        return this._http.get('http://localhost:1065/api/IssueDetail/GetAllIssueDetails')
            .map((response: Response) => <IIssueDetail[]>response.json());
    };

    getAllIssueDetailsByParentID(parentID: number): Observable<IIssueDetail[]> {
        return this._http.get("http://localhost:1065/api/IssueDetail/GetAllIssueDetailsByParentID?ID="+ parentID)
            .map((response: Response) => <IIssueDetail[]>response.json());
    };

    saveIssueDetail(issueDetail: IIssueDetail): Observable<any> {
        let bodyString = JSON.stringify(issueDetail); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/IssueDetail/SaveIssueDetail", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateIssueDetail(issueDetail: IIssueDetail): Observable<any> {
        let bodyString = JSON.stringify(issueDetail); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/IssueDetail/UpdateIssueDetail", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteIssueDetail(issueDetail: IIssueDetail): Observable<any> {
        let bodyString = JSON.stringify(issueDetail); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/IssueDetail/DeleteIssueDetail", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };
}
