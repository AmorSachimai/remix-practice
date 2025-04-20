import { BookEntity, BookRepository } from "@core/entities";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { BookUseCases } from "./use-cases";

const mockRepository: BookRepository = {
  findById: vi.fn(),
  findAll: vi.fn(),
  findByTitle: vi.fn(),
  findByISBN: vi.fn(),
};

const mockBookEntity = new BookEntity({
  id: "1",
  props: {
    title: "Test Book",
    description: "Test Description",
    author: ["Test Author"],
    category: ["Test Category"],
  },
});

beforeEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});

describe("BookUseCases", () => {
  const bookUseCases = new BookUseCases(mockRepository);

  it("should return a book when found by ID", async () => {
    vi.spyOn(mockRepository, "findById").mockResolvedValue(mockBookEntity);
    const result = await bookUseCases.getBookById("1");

    expect(mockRepository.findById).toHaveBeenCalledWith("1");
    expect(result).not.toBeUndefined();
    expect(result).toEqual(mockBookEntity.freeze());
  });

  it("should throw undefined when book is not found", async () => {
    vi.spyOn(mockRepository, "findById").mockResolvedValue(undefined);
    const result = await bookUseCases.getBookById("2");

    expect(mockRepository.findById).toHaveBeenCalledWith("2");
    expect(result).toBeUndefined();
  });
});
