import { InfoBook } from './info-book';
import { SaleInfo } from './sale-info';
export interface ItemBook {
    id: string;
    volumeInfo: InfoBook;
    saleInfo: SaleInfo;
}