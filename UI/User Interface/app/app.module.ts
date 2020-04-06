import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AlertComponent } from './_directives/index';
import { LoginComponent } from './shared/component/login.component';
import { AlertService } from './_services/index';

import { lookupService } from './shared/services/lookup.service';

import { AppComponent } from './app.component';
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

import { measurementUnitService } from './moduleMasterData/services/measurementUnit.service';
import { supplierService } from './moduleMasterData/services/supplier.service';
import { itemService } from './moduleMasterData/services/item.service';

import { purchaseOrderService } from '../app/modulePurchaseOrder/service/purchaseOrder.service';
import { entryService } from '../app/moduleEntry/service/entry.service';
import { issueService } from '../app/moduleIssue/service/issue.service';
import { assetService } from '../app/moduleAsset/service/asset.service';
import { summaryReportService } from '../app/moduleReport/service/summaryReport.service';

import { PageNotFoundComponent } from './shared/pageNotFound.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        measurementUnitComponent,
        supplierComponent,
        itemComponent,

        purchaseOrderComponent,
        entryComponent,
        issueComponent,
        assetComponent,

        reportPurchaseOrderComponent,
        reportEntryComponent,
        reportIssueComponent,
        reportBinCardComponent,
        reportItemTransactionComponent,
        reportItemListComponent,
        reportAssetComponent,

        PageNotFoundComponent,

        AlertComponent
    ],
    providers: [
        measurementUnitService,
        supplierService,
        itemService,

        purchaseOrderService,
        entryService,
        issueService,
        summaryReportService,
        assetService,

        lookupService,
        AlertService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
