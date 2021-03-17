import { ItemBook } from './item-book';
export interface Googlebook {
  kind: string;
  totalItems: number;
  items: ItemBook[];
}
