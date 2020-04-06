import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { lookupService } from '../../shared/services/lookup.service';
import { itemService } from '../../moduleMasterData/services/item.service';
import { purchaseOrderService } from '../service/purchaseOrder.service';

import { AlertService } from '../../_services/index';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IItem } from '../../moduleMasterData/interface/item.interface';
import { IPurchaseOrder } from '../../modulePurchaseOrder/interface/purchaseOrder.interface';
import { IPurchaseOrderDetail } from '../interface/purchaseOrderDetail.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/modulePurchaseOrder/template/purchaseOrder.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class purchaseOrderComponent {
    private _lookupService: lookupService;
    private _itemService: itemService;
    private _purchaseOrderService: purchaseOrderService;
    private _alertService: AlertService;

    constructor(_lookupService: lookupService, _itemService: itemService, _purchaseOrderService: purchaseOrderService, _alertService: AlertService) {
        this._lookupService = _lookupService;
        this._itemService = _itemService;
        this._purchaseOrderService = _purchaseOrderService;
        this._alertService = _alertService;
    }

    ListOfItems: IItem[] = [];

    ListOfPurchaseOrders: IPurchaseOrder[] = [];
    ListOfPurchaseOrderDetails: IPurchaseOrderDetail[] = [];

    purchaseOrder: IPurchaseOrder = {
        ID: 0,
        RequestedBy: '',
        RequestedDate: new Date(),
        ApprovedBy: '',
        ApprovedDate: new Date(),
        AuthorizedBy: '',
        AuthorizedDate: new Date(),
        RequestFrom: '',
        PurposeOfRequest: '',
        Remark: '',

        CreatedBy: 'bereket',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: new Date()
    };

    purchaseOrderDetail: IPurchaseOrderDetail = {
        ID: 0,
        QuantityRequested: 0,
        QuantityApproved: 0,
        Program: '',
        Remark: '',

        PurchaseOrder: null,
        Item: null,

        PurchaseOrderID: 0,
        ItemID: 0,

        CreatedBy: 'bereket',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: new Date()
    };

    ngOnInit() {
        this.purchaseOrder.ID = 0;
        this.purchaseOrder.RequestedBy = '';
        this.purchaseOrder.RequestedDate = new Date();
        this.purchaseOrder.ApprovedBy = '';
        this.purchaseOrder.ApprovedDate = new Date();
        this.purchaseOrder.AuthorizedBy = '';
        this.purchaseOrder.AuthorizedDate = new Date();
        this.purchaseOrder.RequestFrom = '';
        this.purchaseOrder.PurposeOfRequest = '';
        this.purchaseOrder.Remark = '';

        this.purchaseOrder.CreatedBy = 'bereket';
        this.purchaseOrder.CreatedDate = new Date();
        this.purchaseOrder.UpdatedBy = '';
        this.purchaseOrder.UpdatedDate = null;

        /////////////////////////

        this.purchaseOrderDetail.ID = 0;
        this.purchaseOrderDetail.QuantityRequested = 0;
        this.purchaseOrderDetail.QuantityApproved = 0;
        this.purchaseOrderDetail.Program = '';
        this.purchaseOrderDetail.Remark = '';

        this.purchaseOrderDetail.PurchaseOrderID = 0;
        this.purchaseOrderDetail.ItemID = 0;

        this.purchaseOrderDetail.CreatedBy = 'bereket';
        this.purchaseOrderDetail.CreatedDate = new Date();
        this.purchaseOrderDetail.UpdatedBy = '';
        this.purchaseOrderDetail.UpdatedDate = null;

        this.LoadPurchaseOrders();
        this.LoadItems();
        //this.LoadPurchaseOrderDetails();
    };

    SelectedPurchaseOrderID: number;
    SelectedItemID: number;

    LoadItems(): void {
        this._itemService.getItems()
            .subscribe(resultData => {
                this.ListOfItems = resultData;
            }, error => {
                this._alertService.error("Item loading failed");
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

    LoadPurchaseOrderDetails(): void {
        this._purchaseOrderService.getPurchaseOrderDetails()
            .subscribe(resultData => {
                this.ListOfPurchaseOrderDetails = resultData;
            }, error => {
                alert('getPurchaseOrders failed!');
            });
    };

    LoadSinglePurchaseOrder(SelectedPurchaseOrder: IPurchaseOrder): void {
        this.purchaseOrder = SelectedPurchaseOrder;
    };

    LoadSinglePurchaseOrderDetail(SelectedPurchaseOrderDetail: IPurchaseOrderDetail): void {
        this.SelectedItemID = SelectedPurchaseOrderDetail.Item.ID;
        this.purchaseOrderDetail = SelectedPurchaseOrderDetail;
    };

    SelectSinglePurchaseOrder(SelectedPurchaseOrder: IPurchaseOrder): void {
        this.SelectedPurchaseOrderID = SelectedPurchaseOrder.ID;

        this._purchaseOrderService.getAllPurchaseOrderDetailsByParentID(this.SelectedPurchaseOrderID)
            .subscribe(resultData => {
                this.ListOfPurchaseOrderDetails = resultData;

                console.log(this.ListOfPurchaseOrderDetails);
            }, error => {
                this._alertService.error("getAllPurchaseOrderDetailsByParentID failed!");
            });
    };

    IsValid(purchaseOrder: IPurchaseOrder): boolean {
        return true;
    }

    SaveUpdatePurchaseOrder(): void {
        if (this.IsValid(this.purchaseOrder) == true) {
            if (this.purchaseOrder.ID == 0) {
                this._purchaseOrderService.savePurchaseOrder(this.purchaseOrder)
                    .subscribe(result => {
                        this._alertService.success("Saved Successfully");
                        this.LoadPurchaseOrders();
                    }, error => {
                        this._alertService.error("Save Failed");
                    });
            }
            else {
                this._purchaseOrderService.updatePurchaseOrder(this.purchaseOrder)
                    .subscribe(result => {
                        this._alertService.success("Updated Successfully");
                        this.LoadPurchaseOrders();
                    }, error => {
                        this._alertService.error("Update Failed");
                    });
            }
        }
    };

    SaveUpdatePurchaseOrderDetail(): void {
        this.purchaseOrderDetail.PurchaseOrderID = this.SelectedPurchaseOrderID;
        this.purchaseOrderDetail.ItemID = this.SelectedItemID;

        if (this.purchaseOrderDetail.ID == 0) {
            this._purchaseOrderService.savePurchaseOrderDetail(this.purchaseOrderDetail)
                .subscribe(result => {
                    this._alertService.success("Saved Successfully");
                    this.LoadPurchaseOrderDetails();
                }, error => {
                    this._alertService.error("Save Failed");
                });
        }
        else {
            this._purchaseOrderService.updatePurchaseOrderDetail(this.purchaseOrderDetail)
                .subscribe(result => {
                    this._alertService.success("Updated Successfully");
                    this.LoadPurchaseOrderDetails();
                }, error => {
                    this._alertService.error("Update Failed");
                });
        }
    };

    DeletePurchaseOrder(purchaseOrder: IPurchaseOrder): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._purchaseOrderService.deletePurchaseOrder(purchaseOrder)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadPurchaseOrders();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };

    DeletePurchaseOrderDetail(purchaseOrderDetail: IPurchaseOrderDetail ): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._purchaseOrderService.deletePurchaseOrderDetail(purchaseOrderDetail)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadPurchaseOrderDetails();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}