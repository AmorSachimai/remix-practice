import type { BookObject, BookRepository } from "@sample/entities";
import { isISBN } from "@sample/utils";

export class BookUseCases {
  constructor(private repository: BookRepository) {}

  async getBookById(id: string): Promise<BookObject | undefined> {
    const book = await this.repository.findById(id);
    return book?.freeze();
  }

  /**
   * 書籍一覧を取得する
   * @param volume 取得する書籍の数(default: 20)
   * @param offset 取得する書籍のオフセット
   * @returns 書籍一覧
   */
  async getBooks(volume = 20, offset = 0): Promise<BookObject[]> {
    const books = await this.repository.findAll(volume, offset);
    return books.map((book) => book.freeze());
  }

  /**
   * ISBNから書籍を取得する
   * @param isbn 書籍のISBN
   * @returns 書籍情報
   */
  async getBookByISBN(isbn: string): Promise<BookObject | undefined> {
    if (!isISBN(isbn)) {
      return undefined;
    }

    const book = await this.repository.findByISBN(isbn);
    return book?.freeze();
  }
}
