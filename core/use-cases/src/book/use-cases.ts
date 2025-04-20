import type { BookObject, BookRepository } from "@core/entities";

export class BookUseCases {
  constructor(private repository: BookRepository) {}

  async getBookById(id: string): Promise<BookObject | undefined> {
    const book = await this.repository.findById(id);
    if (!book) {
      return undefined;
    }
    return book.freeze();
  }
}
