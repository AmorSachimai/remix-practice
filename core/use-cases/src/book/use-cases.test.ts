import type { BookRepository } from "@core/entities";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { mockBookEntity, mockBooks } from "../__fixtures__/mock-books";
import { BookUseCases } from "./use-cases";

const mockRepository: BookRepository = {
  findById: vi.fn(),
  findAll: vi.fn(),
  findByISBN: vi.fn(),
};

beforeEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});

const bookUseCases = new BookUseCases(mockRepository);

describe("findAll()", () => {
  it("書籍のリストを返すべき", async () => {
    vi.spyOn(mockRepository, "findAll").mockResolvedValue(mockBooks);
    const result = await bookUseCases.getBooks(20, 0);

    expect(mockRepository.findAll).toHaveBeenCalledWith(20, 0);
    expect(result).not.toBeUndefined();
    expect(result).toEqual(mockBooks.map((book) => book.freeze()));
  });
});

describe("findByISBN()", () => {
  it("正常なISBNなら書籍を返す", async () => {
    vi.spyOn(mockRepository, "findByISBN").mockResolvedValue(mockBookEntity);
    const result = await bookUseCases.getBookByISBN("9784798163502");

    expect(mockRepository.findByISBN).toHaveBeenCalledWith("9784798163502");
    expect(result).not.toBeUndefined();
  });
  it("ISBNでなかったらrepositoryにリクエストする前にundefinedを返す", async () => {
    vi.spyOn(mockRepository, "findByISBN").mockResolvedValue(mockBookEntity);
    const result = await bookUseCases.getBookByISBN("978-4-04-893065-9");

    expect(mockRepository.findByISBN).toHaveBeenCalledTimes(0);
    expect(result).toBeUndefined();
  });
});

describe("findById()", () => {
  it("IDで見つかったら書籍を返す", async () => {
    vi.spyOn(mockRepository, "findById").mockResolvedValue(mockBookEntity);
    const result = await bookUseCases.getBookById("1");

    expect(mockRepository.findById).toHaveBeenCalledWith("1");
    expect(result).not.toBeUndefined();
    expect(result).toEqual(mockBookEntity.freeze());
  });
  it("書籍が見つからない場合undefinedを投げる", async () => {
    vi.spyOn(mockRepository, "findById").mockResolvedValue(undefined);
    const result = await bookUseCases.getBookById("2");

    expect(mockRepository.findById).toHaveBeenCalledWith("2");
    expect(result).toBeUndefined();
  });
});
