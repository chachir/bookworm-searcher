import { InfoBook } from './info-book';
export interface ItemBook {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: InfoBook;
}