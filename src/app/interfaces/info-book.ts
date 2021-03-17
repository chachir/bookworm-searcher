import { ImageBook } from './image-book';
export interface InfoBook {
    title: string;
    subtitle: string;
    authors: [string];
    publishedDate: string;
    description: string;
    pageCount: string;
    printType: string;
    imageLinks: ImageBook;
    language: string;
}
