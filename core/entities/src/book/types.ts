import type { Author } from "../author/types";
import type { BaseObject } from "../base-entity";
import type { Category } from "../category/types";

export type Book = {
  isbn: string;
  title: string;
  description: string;
  authors: Author[];
  categories: Category[];
};

export type BookObject = Readonly<BaseObject<Book>>;
