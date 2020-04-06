export interface IAsset {
    ID: number,
    AssetDescription: string,
    Marque: string,
    Model: string,

    SerialNumber: string,
    AssetCode: string,
    Quantity: number,
    AssignedLocation: string,
    DeployedTo: string,
    ResponsibleParty: string,

    CurrentCondition: string,
    CountryOfMake: string,
    DateOfPurchase: Date,
    EstimatedCost: number,
    InsuranceStartDate: Date,
    InsuranceEndDate: Date,
    InsuranceType: string
}