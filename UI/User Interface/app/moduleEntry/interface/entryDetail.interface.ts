import { IItem } from '../../moduleMasterData/interface/item.interface';
import { IEntry } from '../../moduleEntry/interface/entry.interface';

export interface IEntryDetail {
    ID: number,
    Quantity: number,
    UnitPrice: number,
    TotalPrice: number,
    Remark: string,

    Entry: IEntry,
    Item: IItem,

    EntryID: number,
    ItemID: number,

    CreatedBy: string,
    CreatedDate: Date,
    UpdatedBy: string,
    UpdatedDate: Date,
}