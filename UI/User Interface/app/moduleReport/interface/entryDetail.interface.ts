export interface IEntryDetail {
    ID: number,
    Quantity: number,
    UnitPrice: number,
    TotalPrice: number,
    Remark: string,

    EntryID: number,
    ItemID: number,

    CreatedBy: string,
    CreatedDate: Date,
    UpdatedBy: string,
    UpdatedDate: Date,
}