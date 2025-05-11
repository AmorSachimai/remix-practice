import { parse as isbnParser } from "isbn3";
import { v4 as uuidv4 } from "uuid";
import { BaseEntity } from "../base-entity";
import type { BaseRepository } from "../base-repository";
import type { Author, Book, Category, InitBookProps } from "./types";

export interface BookRepository extends BaseRepository<BookEntity> {
  findByISBN(isbn: string): Promise<BookEntity | undefined>;
}

export class BookEntity extends BaseEntity<Book> {
  constructor(info: InitBookProps) {
    const normalizedISBN = info.props.isbn.normalize("NFKC");
    const parsedISBN = isbnParser(normalizedISBN);
    if (!parsedISBN) {
      throw new Error("Invalid ISBN");
    }

    const isbn = parsedISBN.isbn13 || parsedISBN.isbn10 || "";
    const title = info.props.title;
    const description = info.props.description;
    const categories = info.props.categories.map(
      (category) => new CategoryEntity(category),
    );
    const authors = info.props.authors.map(
      (author) => new AuthorEntity(author),
    );

    super({
      ...info,
      props: {
        isbn,
        title,
        description,
        authors,
        categories,
      },
      createdAt: info.createdAt,
      updatedAt: info.updatedAt,
    });
  }

  /**
   * Entityの新規作成時に利用
   */
  static create(book: Book): BookEntity {
    const id = uuidv4();
    return new BookEntity({
      id,
      props: book,
    });
  }

  static isISBN(isbn: string): boolean {
    const parsedISBN = isbnParser(isbn);
    return !!parsedISBN;
  }
}

/**
 * ### カテゴリに関するロジックをまとめたクラス
 * BookEntityからのみ利用される
 */
class CategoryEntity implements Category {
  readonly id: number;
  readonly name: string;
  readonly label?: string;

  constructor(category: Category) {
    this.id = category.id;
    this.name = category.name.normalize("NFKC");
    this.label = category.label?.normalize("NFKC");
  }
}

/**
 * ### 著者に関するロジックをまとめたクラス
 * BookEntityからのみ利用される
 */
class AuthorEntity implements Author {
  readonly id: number;
  readonly name: string;
  readonly kana: string;

  constructor(author: Author) {
    this.id = author.id;
    this.name = author.name.normalize("NFKC");
    this.kana = author.kana.normalize("NFKC");
  }
}
