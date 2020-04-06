export interface IPurchaseOrderDetail {
    ID: number,
    Program: string,
    QuantityRequested: number,
    QuantityApproved: number,
    Remark: string,

    PurchaseOrderID: number,
    ItemID: number,

    CreatedBy: string,
    CreatedDate: Date,
    UpdatedBy: string,
    UpdatedDate: Date,
}