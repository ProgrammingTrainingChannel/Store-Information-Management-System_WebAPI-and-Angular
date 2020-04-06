export interface IPurchaseOrder {
    ID: number,
    RequestedBy: string,
    RequestedDate: Date,
    ApprovedBy: string,
    ApprovedDate: Date,
    AuthorizedBy: string,
    AuthorizedDate: Date,
    RequestFrom: string,
    PurposeOfRequest: string,
    Remark: string,

    CreatedBy: string,
    CreatedDate: Date,
    UpdatedBy: string,
    UpdatedDate: Date,
}