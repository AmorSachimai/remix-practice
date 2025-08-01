import type { BookModel, BookRepository } from "@sample/entities";
import { isISBN } from "@sample/utils";

export class LibraryService {
  constructor(private bookRepo: BookRepository) {}

  /**
   * 書籍の詳細情報を取得
   * @param userId ログインユーザーID
   * @param bookId 書籍ID
   * @returns
   */
  async findBookById(bookId: string): Promise<BookModel | undefined> {
    const book = await this.bookRepo.findById(bookId);
    return book?.freeze();
  }

  /**
   * 書籍一覧を取得する
   * @param volume 取得する書籍の数(default: 20)
   * @param offset 取得する書籍のオフセット(default: 0)
   * @returns 書籍一覧
   */
  async findAll(volume = 20, offset = 0): Promise<BookModel[]> {
    const books = await this.bookRepo.findAll(volume, offset);
    return books.map((book) => book.freeze());
  }

  /**
   * ISBNから書籍を取得する
   * @param isbn 書籍のISBN
   * @returns 書籍情報
   */
  async findBookByISBN(isbn: string): Promise<BookModel | undefined> {
    if (!isISBN(isbn)) {
      return undefined;
    }

    const book = await this.bookRepo.findByISBN(isbn);
    return book?.freeze();
  }
}
