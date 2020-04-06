import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { assetService } from '../../moduleAsset/service/asset.service';

import { IAsset } from '../../moduleReport/interface/asset.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/moduleReport/template/reportAsset.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class reportAssetComponent {
    private _assetService: assetService;

    constructor(_assetService: assetService) {
        this._assetService = _assetService;
    }

    ListOfAssets: IAsset[] = [];

    ngOnInit() {
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
}