import type { BaseEntityProps, BaseObject } from "../base-entity";

export type Category = {
  id: number;
  name: string;
  label?: string;
};
export type Author = {
  id: number;
  name: string;
  kana: string;
};
export type Book = {
  isbn: string;
  title: string;
  description: string;
  authors: Author[];
  categories: Category[];
};
export type BookObject = Readonly<BaseObject<Book>>;
export type InitBookProps = BaseEntityProps<Book>;
export type UpdateBookProps = Partial<Book>;
