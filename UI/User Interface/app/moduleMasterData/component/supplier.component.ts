import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { supplierService } from '../services/supplier.service';

import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/moduleMasterData/template/supplier.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class supplierComponent {
    private _supplierService: supplierService;
    private _alertService: AlertService;

    constructor(_supplierService: supplierService, _alertService: AlertService) {
        this._supplierService = _supplierService;
        this._alertService = _alertService;
    }

    ListOfSuppliers: IMasterData[] = [];

    supplier: IMasterData = {
        ID: 0,
        Name: ''
    };

    ngOnInit() {
        this.supplier.ID = 0;
        this.supplier.Name = '';

        this.LoadSuppliers();
    }

    IsValid(supplier: IMasterData): boolean {
        if (supplier.Name == "") {
            this._alertService.error("Please enter supplier name.");
            return false;
        }
        else {
            return true;
        }
    };

    LoadSuppliers(): void {
        this._supplierService.getSuppliers()
            .subscribe(resultData => {
                this.ListOfSuppliers = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getSuppliers failed');
            });
    };

    LoadSingleSupplier(SelectedSupplier: IMasterData): void {
        this.supplier = SelectedSupplier;
    };

    SaveUpdateSupplier(): void {
        if (this.IsValid(this.supplier) == true) {
            if (this.supplier.ID == 0) {
                this._supplierService.saveSupplier(this.supplier)
                    .subscribe(result => {
                        this._alertService.success("Saved Successfully");
                        this.LoadSuppliers();
                    }, error => {
                        this._alertService.error("Save Failed");
                    });
            }
            else {
                this._supplierService.updateSupplier(this.supplier)
                    .subscribe(result => {
                        this._alertService.success("Updated Successfully");
                        this.LoadSuppliers();
                    }, error => {
                        this._alertService.error("Update Failed");
                    });
            }
        }
    };

    DeleteSupplier(): void {
        this._supplierService.deleteSupplier(this.supplier)
            .subscribe(result => {
                this._alertService.success("Deleted Successfully");
                this.LoadSuppliers();
            }, error => {
                this._alertService.error("Delete failed");
            });
    };
}