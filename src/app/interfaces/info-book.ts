import { AccessInfo } from './access-info';
import { ImageBook } from './image-book';
import { IndustryId } from './industry-id';
import { SaleInfo } from './sale-info';
export interface InfoBook {
    id: string;
    title: string;
    subtitle: string;
    authors: [string];
    publishedDate: string;
    description: string;
    pageCount: string;
    averageRating: number;
    printType: string;
    imageLinks: ImageBook | null;
    language: string;
    categories: [string];
    industryIdentifiers: IndustryId;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
}
