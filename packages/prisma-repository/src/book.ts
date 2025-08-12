import { BookEntity, type BookRepository } from "@sample/entities";
import { prisma } from "./client";

export class BookRepositoryImpl implements BookRepository {
  async add(book: BookEntity): Promise<void> {
    const bookModel = book.freeze();
    await prisma.book.create({
      data: {
        id: bookModel.id,
        isbn: bookModel.isbn,
        title: bookModel.title,
        description: bookModel.description,
        createdAt: bookModel.createdAt,
        updatedAt: bookModel.updatedAt,
      },
    });
  }

  async remove(id: string): Promise<void> {
    await prisma.book.delete({
      where: {
        id,
      },
    });
  }

  async update(book: BookEntity): Promise<void> {
    const bookModel = book.freeze();
    await prisma.book.update({
      where: {
        id: bookModel.id,
      },
      data: {
        isbn: bookModel.isbn,
        title: bookModel.title,
        description: bookModel.description,
        createdAt: bookModel.createdAt,
        updatedAt: bookModel.updatedAt,
      },
    });
  }

  async findById(id: string): Promise<BookEntity | undefined> {
    const book = await prisma.book.findUnique({
      where: {
        id,
      },
      include: {
        categories: true,
        authors: true,
      },
    });
    if (!book) {
      return undefined;
    }

    return new BookEntity({
      id: book.id,
      props: {
        isbn: book.isbn,
        title: book.title,
        description: book.description,
        authors: [],
        categories: [],
      },
      createdAt: book.createdAt,
      updatedAt: book.updatedAt,
    });
  }

  async findAll(volume?: number, offset?: number): Promise<BookEntity[]> {
    const books = await prisma.book.findMany({
      take: volume,
      skip: offset,
    });
    return books.map(
      (book) =>
        new BookEntity({
          id: book.id,
          props: {
            isbn: book.isbn,
            title: book.title,
            description: book.description,
            authors: [],
            categories: [],
          },
          createdAt: book.createdAt,
          updatedAt: book.updatedAt,
        }),
    );
  }

  async findByISBN(isbn: string): Promise<BookEntity | undefined> {
    const book = await prisma.book.findUnique({
      where: {
        isbn,
      },
      include: {
        categories: true,
        authors: true,
      },
    });
    if (!book) {
      return undefined;
    }

    return new BookEntity({
      id: book.id,
      props: {
        isbn: book.isbn,
        title: book.title,
        description: book.description,
        authors: [],
        categories: [],
      },
      createdAt: book.createdAt,
      updatedAt: book.updatedAt,
    });
  }
}
