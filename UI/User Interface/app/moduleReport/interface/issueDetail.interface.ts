export interface IIssueDetail {
    ID: number,
    Quantity: number,
    UnitPrice: number,
    TotalPrice: number,
    Remark: string,

    IssueID: number,
    ItemID: number,

    CreatedBy: string,
    CreatedDate: Date,
    UpdatedBy: string,
    UpdatedDate: Date,
}