import type { Model } from "../_base/entity";
import type { Author } from "./author/types";
import type { Category } from "./category/types";

export type Book = {
  isbn: string;
  title: string;
  description: string;
  authors: Author[];
  categories: Category[];
};

export type BookModel = Readonly<Model<Book>>;
