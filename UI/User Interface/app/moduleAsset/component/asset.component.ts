import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { assetService } from '../service/asset.service';

import { AlertService } from '../../_services/index';

import { IAsset } from '../interface/asset.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/moduleAsset/template/asset.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class assetComponent {
    private _assetService: assetService;
    private _alertService: AlertService;

    constructor(_assetService: assetService, _alertService: AlertService) {
        this._assetService = _assetService;
        this._alertService = _alertService;
    }

    ListOfAssets: IAsset[] = [];

    asset: IAsset = {
        ID: 0,
        AssetDescription: '',
        Marque: '',
        Model: '',

        SerialNumber: '',
        AssetCode: '',
        Quantity: 0,
        AssignedLocation: '',
        DeployedTo: '',
        ResponsibleParty: '',

        CurrentCondition: '',
        CountryOfMake: '',
        DateOfPurchase: new Date(),
        EstimatedCost: 0,
        InsuranceStartDate: new Date(),
        InsuranceEndDate: new Date(),
        InsuranceType: ''
    };

    ngOnInit() {
        if (localStorage.getItem('token') != "generate_token") {
            alert("loggend in");
        }
        else {
            alert("not loggend in");
        }

        this.asset.ID = 0;
        this.asset.AssetDescription = '';
        this.asset.Marque = '';
        this.asset.Model = '';

        this.asset.SerialNumber = '';
        this.asset.AssetCode = '';
        this.asset.Quantity = 0;
        this.asset.AssignedLocation = '';
        this.asset.DeployedTo = '';
        this.asset.ResponsibleParty = '';

        this.asset.CurrentCondition = '';
        this.asset.CountryOfMake = '';
        this.asset.DateOfPurchase = new Date();
        this.asset.EstimatedCost = 0;
        this.asset.InsuranceStartDate = new Date();
        this.asset.InsuranceEndDate = new Date();
        this.asset.InsuranceType = '';

        this.LoadAssets();
    };

    LoadAssets(): void {
        this._assetService.getAssets()
            .subscribe(resultData => {
                this.ListOfAssets = resultData;
            }, error => {
                alert('getAssets failed!');
            });
    };

    LoadSingleAsset(SelectedAsset: IAsset): void {
        this.asset = SelectedAsset;
    };

    SaveUpdateAsset(): void {
        if (this.asset.ID == 0) {
            this._assetService.saveAsset(this.asset)
                .subscribe(result => {
                    this._alertService.success("Saved Successfully");
                    this.LoadAssets();
                }, error => {
                    this._alertService.error("Save Failed");
                });
        }
        else {
            this._assetService.updateAsset(this.asset)
                .subscribe(result => {
                    this._alertService.success("Updated Successfully");
                    this.LoadAssets();
                }, error => {
                    this._alertService.error("Update Failed");
                });
        }
    };

    DeleteAsset(asset: IAsset): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._assetService.deleteAsset(asset)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadAssets();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}