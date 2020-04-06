import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { itemService } from '../services/item.service';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IItem } from '../interface/item.interface';
import { AlertService } from '../../_services/index';
import { lookupService } from '../../shared/services/lookup.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/moduleMasterData/template/item.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class itemComponent {
    private _lookupService: lookupService;
    private _itemService: itemService;
    private _alertService: AlertService;

    constructor(_lookupService: lookupService, _itemService: itemService, _alertService: AlertService) {
        this._lookupService = _lookupService;
        this._itemService = _itemService;
        this._alertService = _alertService;
    }

    ListOfMeasurementUnits: ILookup[] = [];
    ListOfItems: IItem[] = [];

    item: IItem = {
        ID: 0,
        Code: '',
        Name: '',
        Location: '',
        Program: '',
        StockNumber: '',
        Description: '',
        MeasurementUnitID: 0,
        MeasurementUnit: null,
        BalanceQuantity: 0,
        Remark: '',

        CreatedBy: '',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: new Date()
    };

    SelectedMeasurementUnitID: number;

    ngOnInit() {
        this.item.ID = 0;
        this.item.Code = '';
        this.item.Name = '';
        this.item.Location = '';
        this.item.Program = '';
        this.item.StockNumber = '';
        this.item.Description = '';
        this.item.MeasurementUnitID = 0;
        this.item.MeasurementUnit = null;
        this.item.BalanceQuantity = 0;
        this.item.Remark = '';

        this.item.CreatedBy = "Bereket";
        this.item.CreatedDate = new Date();
        this.item.UpdatedBy = '';
        this.item.UpdatedDate = null;

        this.LoadMeasurementUnits();
        this.LoadItems();
    }

    IsValid(item: IItem): boolean {
        if (item.Code == "") {
            this._alertService.error("Please enter item code.");
            return false;
        }
        else if (item.Name == "") {
            this._alertService.error("Please enter item name.");
            return false;
        }
        else if (item.Location == "") {
            this._alertService.error("Please enter Location.");
            return false;
        }
        else if (item.Program == "") {
            this._alertService.error("Please enter Program.");
            return false;
        }
        else if (item.StockNumber == "") {
            this._alertService.error("Please enter Stock Number.");
            return false;
        }
        else if (item.Description == "") {
            this._alertService.error("Please enter description.");
            return false;
        }
        else if (item.MeasurementUnitID == 0) {
            this._alertService.error("Please select measurement unit.");
            return false;
        }
        else if (item.BalanceQuantity == 0) {
            this._alertService.error("Please enter balance quantity.");
            return false;
        }
        else {
            return true;
        }
    };

    LoadMeasurementUnits(): void {
        this._lookupService.getMeasurementUnits()
            .subscribe(resultData => {
                this.ListOfMeasurementUnits = resultData;
            }, error => {
                console.log(error);
                this._alertService.error("MeasurementUnit loading failed");
            });
    };

    LoadItems(): void {
        this._itemService.getItems()
            .subscribe(resultData => {
                this.ListOfItems = resultData;

                console.log(this.ListOfItems);
            }, error => {
                this._alertService.error("Item loading failed");
            });
    };

    LoadSingleItem(SelectedItem: IItem): void {
        this.SelectedMeasurementUnitID = SelectedItem.MeasurementUnit.ID;
        this.item = SelectedItem;
    };

    SaveUpdateItem(): void {
        this.item.MeasurementUnitID = this.SelectedMeasurementUnitID;

        if (this.IsValid(this.item) == true) {
            if (this.item.ID == 0) {
                this._itemService.saveItem(this.item)
                    .subscribe(result => {
                        this._alertService.success("Saved Successfully");
                        this.LoadItems();
                    }, error => {
                        this._alertService.error("Save Failed");
                    });
            }
            else {
                this._itemService.updateItem(this.item)
                    .subscribe(result => {
                        this._alertService.success("Updated Successfully");
                        this.LoadItems();
                    }, error => {
                        this._alertService.error("Update Failed");
                    });
            }
        }
    };

    DeleteItem(): void {
        this._itemService.deleteItem(this.item)
            .subscribe(result => {
                this._alertService.success("Deleted Successfully");
                this.LoadItems();
            }, error => {
                this._alertService.error("Delete failed");
            });
    };
}