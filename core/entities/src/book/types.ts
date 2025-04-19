import { BaseEntityProps } from "../base-entity";

export type Book = {
  title: string;
  description: string;
  author: string[];
  category: string[];
};

export type InitBookProps = BaseEntityProps<Book>;
export type UpdateBookProps = Partial<Book>;
