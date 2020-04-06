import { IItem } from '../../moduleMasterData/interface/item.interface';
import { IIssue } from '../../moduleIssue/interface/issue.interface';

export interface IIssueDetail {
    ID: number,
    Quantity: number,
    UnitPrice: number,
    TotalPrice: number,
    Remark: string,

    Issue: IIssue,
    Item: IItem,

    IssueID: number,
    ItemID: number,

    CreatedBy: string,
    CreatedDate: Date,
    UpdatedBy: string,
    UpdatedDate: Date,
}