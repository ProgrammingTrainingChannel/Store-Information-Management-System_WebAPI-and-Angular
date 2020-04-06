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

    PurchaseOrderID: number,
    SupplierID: number,

    CreatedBy: string,
    CreatedDate: Date,
    UpdatedBy: string,
    UpdatedDate: Date,
}