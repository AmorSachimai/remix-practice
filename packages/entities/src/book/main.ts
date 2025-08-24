import { parse as isbnParser } from "isbn3";
import { v4 as uuidv4 } from "uuid";
import { Entity, type Repository } from "../_base";
import { StringEntity } from "../_value";
import { AuthorEntity } from "./author/entity";
import { CategoryEntity } from "./category/entity";
import type { Book } from "./types";

export interface BookRepository extends Repository<BookEntity> {
  findByISBN(isbn: string): Promise<BookEntity | undefined>;
}

export class BookEntity extends Entity<Book> {
  /**
   * Entityの新規作成時に利用
   */
  static create(book: Book): BookEntity {
    const id = uuidv4();
    const validBook = BookEntity.validation(book);
    return new BookEntity({ id, props: validBook });
  }

  static isISBN(isbn: string): boolean {
    const normalized = StringEntity.validation(isbn);
    if (normalized === null) {
      return false;
    }

    const parsedISBN = isbnParser(normalized);
    return !!parsedISBN;
  }

  static validation(book: Book): Book {
    const normalizedISBN = StringEntity.validation(book.isbn);
    if (normalizedISBN === null) {
      throw new Error("ISBNが入力されていません");
    }

    const parsedISBN = isbnParser(normalizedISBN);
    if (parsedISBN === null) {
      throw new Error("不正なISBNです");
    }

    const isbn = parsedISBN.isbn13 || parsedISBN.isbn10;
    if (isbn === undefined) {
      throw new Error("不正なISBNです");
    }

    const title = StringEntity.validation(book.title);
    if (title === null) {
      throw new Error("タイトルは必須です");
    }

    const description = StringEntity.validation(book.description);
    if (description === null) {
      throw new Error("説明分は必須です");
    }

    const categories = book.categories.map(CategoryEntity.validation);
    const authors = book.authors.map(AuthorEntity.validation);
    return {
      isbn,
      title,
      description,
      authors,
      categories,
    };
  }
}
