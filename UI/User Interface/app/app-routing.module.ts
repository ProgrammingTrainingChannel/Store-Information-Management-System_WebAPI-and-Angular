import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/component/login.component';
import { HomeComponent } from './shared/component/home.component';
import { measurementUnitComponent } from './moduleMasterData/component/measurementUnit.component';
import { supplierComponent } from './moduleMasterData/component/supplier.component';
import { itemComponent } from './moduleMasterData/component/item.component';

import { purchaseOrderComponent } from '../app/modulePurchaseOrder/component/purchaseOrder.component';
import { entryComponent } from '../app/moduleEntry/component/entry.component';
import { issueComponent } from '../app/moduleIssue/component/issue.component';
import { assetComponent } from '../app/moduleAsset/component/asset.component';

import { reportPurchaseOrderComponent } from '../app/moduleReport/component/reportPurchaseOrder.component';
import { reportEntryComponent } from '../app/moduleReport/component/reportEntry.component';
import { reportIssueComponent } from '../app/moduleReport/component/reportIssue.component';
import { reportAssetComponent } from '../app/moduleReport/component/reportAsset.component';
import { reportBinCardComponent } from '../app/moduleReport/component/bincard.component';
import { reportItemTransactionComponent } from '../app/moduleReport/component/itemTransaction.component';
import { reportItemListComponent } from '../app/moduleReport/component/itemList.component';

import { PageNotFoundComponent } from './shared/pageNotFound.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: 'home', component: HomeComponent },
            { path: 'measurementUnit', component: measurementUnitComponent },
            { path: 'supplier', component: supplierComponent },
            { path: 'item', component: itemComponent },

            { path: 'purchaseOrder', component: purchaseOrderComponent },
            { path: 'entry', component: entryComponent },
            { path: 'issue', component: issueComponent },
            { path: 'asset', component: assetComponent },

            { path: 'reportRequestList', component: reportPurchaseOrderComponent },
            { path: 'reportEntryList', component: reportEntryComponent },
            { path: 'reportIssueList', component: reportIssueComponent },
            { path: 'reportBinCard', component: reportBinCardComponent },
            { path: 'reportItemTransactionComponent', component: reportItemTransactionComponent },
            { path: 'reportItemListComponent', component: reportItemListComponent },
            { path: 'reportAssetComponent', component: reportAssetComponent }

        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
