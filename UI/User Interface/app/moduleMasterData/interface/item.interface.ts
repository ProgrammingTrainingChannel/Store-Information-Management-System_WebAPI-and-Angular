import { IMasterData } from '../interface/masterData.interface';

export interface IItem {
    ID: number;
    Code: string;
    Name: string;
    Location: string;
    Program: string;
    StockNumber: string;
    Description: string;

    BalanceQuantity: number;
    Remark: string;

    MeasurementUnitID: number;
    MeasurementUnit: IMasterData;

    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
}
