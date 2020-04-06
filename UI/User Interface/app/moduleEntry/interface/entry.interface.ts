import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IPurchaseOrder } from '../../modulePurchaseOrder/interface/purchaseOrder.interface';

export interface IEntry {
    ID: number,
    RecieptNumber: string,
    Deliverer: string,
    SupplierInvoiceNumber: string,

    RecievedBy: string,
    RecievedDate: Date,
    DeliveredBy: string,
    DeliveredDate: Date,
    VerifiedBy: string,
    VerifiedDate: Date,
    CheckedBy: string,
    CheckedDate: Date,
    Remark: string,

    PurchaseOrder: IPurchaseOrder,
    Supplier: ILookup,

    PurchaseOrderID: number,
    SupplierID: number,

    CreatedBy: string,
    CreatedDate: Date,
    UpdatedBy: string,
    UpdatedDate: Date,
}