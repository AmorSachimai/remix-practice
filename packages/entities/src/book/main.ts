import { parse as isbnParser } from "isbn3";
import { v4 as uuidv4 } from "uuid";
import { Entity } from "../base-entity";
import type { BaseRepository } from "../base-repository";
import { AuthorEntity } from "./author/entity";
import { CategoryEntity } from "./category/entity";
import type { Book } from "./types";

export interface BookRepository extends BaseRepository<BookEntity> {
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
    const normalizedISBN = isbn.normalize("NFKC");
    const parsedISBN = isbnParser(normalizedISBN);
    return !!parsedISBN;
  }

  static validation(book: Book): Book {
    const normalizedISBN = book.isbn.normalize("NFKC");
    const parsedISBN = isbnParser(normalizedISBN);
    if (!parsedISBN) {
      throw new Error("Invalid ISBN");
    }
    const isbn = parsedISBN.isbn13 || parsedISBN.isbn10;
    if (!isbn) {
      throw new Error("Invalid ISBN format");
    }
    const title = book.title.normalize("NFKC");
    if (title.trim() === "") {
      throw new Error("Title is required");
    }
    const description = book.description.normalize("NFKC");
    if (description.trim() === "") {
      throw new Error("Description is required");
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
