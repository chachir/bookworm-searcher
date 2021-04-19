import { ItemBook } from './item-book';
export interface Googlebook {
  totalItems: number;
  items: ItemBook[] | null;
}
