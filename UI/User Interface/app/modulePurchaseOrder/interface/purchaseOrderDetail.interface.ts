import { IItem } from '../../moduleMasterData/interface/item.interface';
import { IPurchaseOrder } from '../../modulePurchaseOrder/interface/purchaseOrder.interface';

export interface IPurchaseOrderDetail {
    ID: number,
    Program: string,
    QuantityRequested: number,
    QuantityApproved: number,
    Remark: string,

    PurchaseOrder: IPurchaseOrder,
    Item: IItem,

    PurchaseOrderID: number,
    ItemID: number,

    CreatedBy: string,
    CreatedDate: Date,
    UpdatedBy: string,
    UpdatedDate: Date,
}