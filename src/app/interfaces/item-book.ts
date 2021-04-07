import { InfoBook } from './info-book';
import { SaleInfo } from './sale-info';
export interface ItemBook {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: InfoBook;
    saleInfo: SaleInfo;
}