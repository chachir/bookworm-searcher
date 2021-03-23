export interface SaleInfo {
    saleability: string;
    listPrice: {
        amount: number,
        currencyCode: string;
    };
    buyLink: string;
}
