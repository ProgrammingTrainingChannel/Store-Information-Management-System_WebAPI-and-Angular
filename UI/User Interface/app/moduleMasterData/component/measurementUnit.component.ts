import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { measurementUnitService } from '../services/measurementUnit.service';

import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/moduleMasterData/template/measurementUnit.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class measurementUnitComponent {
    private _measurementUnitService: measurementUnitService;
    private _alertService: AlertService;

    constructor(_measurementUnitService: measurementUnitService, _alertService: AlertService) {
        this._measurementUnitService = _measurementUnitService;
        this._alertService = _alertService;
    }

    ListOfMeasurementUnits: IMasterData[] = [];

    measurementUnit: IMasterData = {
        ID: 0,
        Name: ''
    };

    ngOnInit() {
        this.measurementUnit.ID = 0;
        this.measurementUnit.Name = '';

        this.LoadMeasurementUnits();
    }

    IsValid(measurementUnit: IMasterData): boolean {
        if (measurementUnit.Name == "") {
            this._alertService.error("Please enter measurement unit name.");
            return false;
        }
        else {
            return true;
        }
    };

    SelectedMeasurementUnitID: number;

    LoadMeasurementUnits(): void {
        this._measurementUnitService.getMeasurementUnits()
            .subscribe(resultData => {
                this.ListOfMeasurementUnits = resultData;
            }, error => {
                console.log(error);
                this._alertService.error("Failed to Load");
            });
    };

    LoadSingleMeasurementUnit(SelectedMeasurementUnit: IMasterData): void {
        this.measurementUnit = SelectedMeasurementUnit;
    };

    SaveUpdateMeasurementUnit(): void {
        if (this.IsValid(this.measurementUnit) == true) {
            if (this.measurementUnit.ID == 0) {
                this._measurementUnitService.saveMeasurementUnit(this.measurementUnit)
                    .subscribe(result => {
                        this._alertService.success("Saved Successfully");
                        this.LoadMeasurementUnits();
                    }, error => {
                        this._alertService.error("Save Failed");
                    });
            }
            else {
                this._measurementUnitService.updateMeasurementUnit(this.measurementUnit)
                    .subscribe(result => {
                        this._alertService.success("Updated Successfully");
                        this.LoadMeasurementUnits();
                    }, error => {
                        this._alertService.error("Update Failed");
                    });
            }
        }
    };

    DeleteMeasurementUnit(): void {
        this._measurementUnitService.deleteMeasurementUnit(this.measurementUnit)
            .subscribe(result => {
                this._alertService.success("Deleted Successfully");
                this.LoadMeasurementUnits();
            }, error => {
                this._alertService.error("Delete failed");
            });
    };
}