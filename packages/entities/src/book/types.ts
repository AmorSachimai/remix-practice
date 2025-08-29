import type { EntityObject } from "../_base";
import type { Author } from "../author";
import type { Category } from "../category";

export type Book = {
  isbn: string;
  title: string;
  description: string;
  authors: Author[];
  categories: Category[];
};

export type BookModel = EntityObject<Book>;
