import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IPurchaseOrder } from '../interface/purchaseOrder.interface';
import { IPurchaseOrderDetail } from '../interface/purchaseOrderDetail.interface';

@Injectable()
export class purchaseOrderService {

    constructor(private _http: Http) { }

    getPurchaseOrders(): Observable<IPurchaseOrder[]> {
        return this._http.get('http://localhost:1065/api/PurchaseOrder/GetAllPurchaseOrders')
            .map((response: Response) => <IPurchaseOrder[]>response.json());
    };

    savePurchaseOrder(purchaseOrder: IPurchaseOrder): Observable<any> {
        let bodyString = JSON.stringify(purchaseOrder); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/PurchaseOrder/SavePurchaseOrder", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updatePurchaseOrder(purchaseOrder: IPurchaseOrder): Observable<any> {
        let bodyString = JSON.stringify(purchaseOrder); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/PurchaseOrder/UpdatePurchaseOrder", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deletePurchaseOrder(purchaseOrder: IPurchaseOrder): Observable<any> {
        let bodyString = JSON.stringify(purchaseOrder); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/PurchaseOrder/DeletePurchaseOrder", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

///////////////////////////////// Detail //////////////////

    getPurchaseOrderDetails(): Observable<IPurchaseOrderDetail[]> {
        return this._http.get('http://localhost:1065/api/PurchaseOrderDetail/GetAllPurchaseOrderDetails')
            .map((response: Response) => <IPurchaseOrderDetail[]>response.json());
    };

    getAllPurchaseOrderDetailsByParentID(parentID: number): Observable<IPurchaseOrderDetail[]> {
        return this._http.get("http://localhost:1065/api/PurchaseOrderDetail/GetAllPurchaseOrderDetailsByParentID?ID="+ parentID)
            .map((response: Response) => <IPurchaseOrderDetail[]>response.json());
    };

    savePurchaseOrderDetail(purchaseOrderDetail: IPurchaseOrderDetail): Observable<any> {
        let bodyString = JSON.stringify(purchaseOrderDetail); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/PurchaseOrderDetail/SavePurchaseOrderDetail", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updatePurchaseOrderDetail(purchaseOrderDetail: IPurchaseOrderDetail): Observable<any> {
        let bodyString = JSON.stringify(purchaseOrderDetail); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/PurchaseOrderDetail/UpdatePurchaseOrderDetail", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deletePurchaseOrderDetail(purchaseOrderDetail: IPurchaseOrderDetail): Observable<any> {
        let bodyString = JSON.stringify(purchaseOrderDetail); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:1065/api/PurchaseOrderDetail/DeletePurchaseOrderDetail", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

}
