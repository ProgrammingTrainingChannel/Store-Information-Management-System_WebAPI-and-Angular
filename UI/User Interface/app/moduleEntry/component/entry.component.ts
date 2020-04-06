import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { lookupService } from '../../shared/services/lookup.service';
import { itemService } from '../../moduleMasterData/services/item.service';
import { purchaseOrderService } from '../../modulePurchaseOrder/service/purchaseOrder.service';
import { entryService } from '../service/entry.service';

import { AlertService } from '../../_services/index';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IItem } from '../../moduleMasterData/interface/item.interface';
import { IPurchaseOrder } from '../../modulePurchaseOrder/interface/purchaseOrder.interface';
import { IEntry } from '../../moduleEntry/interface/entry.interface';
import { IEntryDetail } from '../interface/entryDetail.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/moduleEntry/template/entry.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class entryComponent {
    private _lookupService: lookupService;
    private _itemService: itemService;
    private _purchaseOrderService: purchaseOrderService;
    private _entryService: entryService;
    private _alertService: AlertService;

    constructor(_lookupService: lookupService, _itemService: itemService, _purchaseOrderService: purchaseOrderService, _entryService: entryService, _alertService: AlertService) {
        this._lookupService = _lookupService;
        this._itemService = _itemService;
        this._purchaseOrderService = _purchaseOrderService;
        this._entryService = _entryService;
        this._alertService = _alertService;
    }

    ListOfPurchaseOrders: IPurchaseOrder[] = [];
    ListOfSuppliers: ILookup[] = [];
    ListOfItems: IItem[] = [];

    ListOfEntrys: IEntry[] = [];
    ListOfEntryDetails: IEntryDetail[] = [];

    entry: IEntry = {
        ID: 0,
        RecieptNumber: '',
        Deliverer: '',
        SupplierInvoiceNumber: '',

        RecievedBy: '',
        RecievedDate: new Date(),
        DeliveredBy: '',
        DeliveredDate: new Date(),
        VerifiedBy: '',
        VerifiedDate: new Date(),
        CheckedBy: '',
        CheckedDate: new Date(),
        Remark: '',

        PurchaseOrder: null,
        Supplier: null,

        PurchaseOrderID: 0,
        SupplierID: 0,

        CreatedBy: 'bereket',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: new Date()
    };

    entryDetail: IEntryDetail = {
        ID: 0,
        Quantity: 0,
        UnitPrice: 0,
        TotalPrice: 0,
        Remark: '',

        Entry: null,
        Item: null,

        EntryID: 0,
        ItemID: 0,

        CreatedBy: 'bereket',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: new Date()
    };

    ngOnInit() {
        this.entry.ID = 0;
        this.entry.RecieptNumber = '';
        this.entry.Deliverer = '';
        this.entry.SupplierInvoiceNumber = '';

        this.entry.RecievedBy = '';
        this.entry.RecievedDate = new Date();
        this.entry.DeliveredBy = '';
        this.entry.DeliveredDate = new Date();
        this.entry.VerifiedBy = '';
        this.entry.VerifiedDate = new Date();
        this.entry.CheckedBy = '';
        this.entry.CheckedDate = new Date();
        this.entry.Remark = '';

        this.entry.PurchaseOrderID = 0;
        this.entry.SupplierID = 0;

        this.entry.CreatedBy = 'bereket';
        this.entry.CreatedDate = new Date();
        this.entry.UpdatedBy = '';
        this.entry.UpdatedDate = null;

        /////////////////////////

        this.entryDetail.ID = 0;
        this.entryDetail.Quantity = 0;
        this.entryDetail.UnitPrice = 0;
        this.entryDetail.TotalPrice = 0;
        this.entryDetail.Remark = '';

        this.entryDetail.EntryID = 0;
        this.entryDetail.ItemID = 0;

        this.entryDetail.CreatedBy = 'bereket';
        this.entryDetail.CreatedDate = new Date();
        this.entryDetail.UpdatedBy = '';
        this.entryDetail.UpdatedDate = null;

        this.LoadEntrys();
        this.LoadPurchaseOrders();
        this.LoadSuppliers();
        this.LoadItems();
        //this.LoadEntryDetails();
    };

    SelectedPurchaseOrderID: number;
    SelectedSupplierID: number;

    SelectedEntryID: number;
    SelectedItemID: number;

    LoadPurchaseOrders(): void {
        this._purchaseOrderService.getPurchaseOrders()
            .subscribe(resultData => {
                this.ListOfPurchaseOrders = resultData;
            }, error => {
                alert('getPurchaseOrders failed!');
            });
    };

    LoadItems(): void {
        this._itemService.getItems()
            .subscribe(resultData => {
                this.ListOfItems = resultData;
            }, error => {
                this._alertService.error("Item loading failed");
            });
    };

    LoadSuppliers(): void {
        this._lookupService.getSuppliers()
            .subscribe(resultData => {
                this.ListOfSuppliers = resultData;
            }, error => {
                this._alertService.error("Supplier loading failed");
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

    LoadEntryDetails(): void {
        this._entryService.getEntryDetails()
            .subscribe(resultData => {
                this.ListOfEntryDetails = resultData;
            }, error => {
                alert('getEntrys failed!');
            });
    };

    LoadSingleEntry(SelectedEntry: IEntry): void {
        this.SelectedPurchaseOrderID = SelectedEntry.PurchaseOrder.ID;
        this.SelectedSupplierID = SelectedEntry.Supplier.ID;

        this.entry = SelectedEntry;
    };

    LoadSingleEntryDetail(SelectedEntryDetail: IEntryDetail): void {
        this.SelectedItemID = SelectedEntryDetail.Item.ID;
        this.entryDetail = SelectedEntryDetail;
    };

    SelectSingleEntry(SelectedEntry: IEntry): void {
        this.SelectedEntryID = SelectedEntry.ID;

        this._entryService.getAllEntryDetailsByParentID(this.SelectedEntryID)
            .subscribe(resultData => {
                this.ListOfEntryDetails = resultData;
            }, error => {
                this._alertService.error("getAllEntryDetailsByParentID failed!");
            });
    };

    SaveUpdateEntry(): void {
        this.entry.PurchaseOrderID = this.SelectedPurchaseOrderID;
        this.entry.SupplierID = this.SelectedSupplierID;

        if (this.entry.ID == 0) {
            this._entryService.saveEntry(this.entry)
                .subscribe(result => {
                    this._alertService.success("Saved Successfully");
                    this.LoadEntrys();
                }, error => {
                    this._alertService.error("Save Failed");
                });
        }
        else {
            this._entryService.updateEntry(this.entry)
                .subscribe(result => {
                    this._alertService.success("Updated Successfully");
                    this.LoadEntrys();
                }, error => {
                    this._alertService.error("Update Failed");
                });
        }
    };

    SaveUpdateEntryDetail(): void {
        this.entryDetail.EntryID = this.SelectedEntryID;
        this.entryDetail.ItemID = this.SelectedItemID;

        this.entryDetail.TotalPrice = this.entryDetail.Quantity * this.entryDetail.UnitPrice;

        if (this.entryDetail.ID == 0) {
            this._entryService.saveEntryDetail(this.entryDetail)
                .subscribe(result => {
                    this._alertService.success("Saved Successfully");
                    this.LoadEntryDetails();
                }, error => {
                    this._alertService.error("Save Failed");
                });
        }
        else {
            this._entryService.updateEntryDetail(this.entryDetail)
                .subscribe(result => {
                    this._alertService.success("Updated Successfully");
                    this.LoadEntryDetails();
                }, error => {
                    this._alertService.error("Update Failed");
                });
        }
    };

    DeleteEntry(entry: IEntry): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._entryService.deleteEntry(entry)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadEntrys();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };

    DeleteEntryDetail(entryDetail: IEntryDetail): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._entryService.deleteEntryDetail(entryDetail)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadEntryDetails();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}