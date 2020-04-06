import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { purchaseOrderService } from '../../modulePurchaseOrder/service/purchaseOrder.service';

import { IPurchaseOrder } from '../../modulePurchaseOrder/interface/purchaseOrder.interface';
import { IPurchaseOrderDetail } from '../interface/purchaseOrderDetail.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/moduleReport/template/reportPurchaseOrder.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class reportPurchaseOrderComponent {
    private _purchaseOrderService: purchaseOrderService;

    constructor(_purchaseOrderService: purchaseOrderService) {
        this._purchaseOrderService = _purchaseOrderService;
    }

    ListOfPurchaseOrders: IPurchaseOrder[] = [];
    ListOfPurchaseOrderDetails: IPurchaseOrderDetail[] = [];
    ListOfSinglePurchaseOrderDetails: IPurchaseOrderDetail[] = [];

    ngOnInit() {        
        this.LoadPurchaseOrderDetails();
    };

    SelectSinglePurchaseOrder(SelectedPurchaseOrder: IPurchaseOrder): void {
        this._purchaseOrderService.getAllPurchaseOrderDetailsByParentID(SelectedPurchaseOrder.ID)
            .subscribe(resultData => {
                this.ListOfSinglePurchaseOrderDetails = resultData;
            }, error => {
            });
    };

    LoadPurchaseOrders(): void {
        this._purchaseOrderService.getPurchaseOrders()
            .subscribe(resultData => {
                this.ListOfPurchaseOrders = resultData;
            }, error => {
                alert('getPurchaseOrders failed!');
            });
    };

    NumberOfItems: number;
    CountDetailItem(entryID: number): number {
        this.NumberOfItems = Object.assign([], this.ListOfPurchaseOrderDetails).filter(
            item => item.PurchaseOrderID == entryID
        ).length;

        return this.NumberOfItems;
    }

    LoadPurchaseOrderDetails(): void {
        this._purchaseOrderService.getPurchaseOrderDetails()
            .subscribe(resultData => {
                this.ListOfPurchaseOrderDetails = resultData;
                this.LoadPurchaseOrders();
            }, error => {
                alert('getPurchaseOrders failed!');
            });
    };
}