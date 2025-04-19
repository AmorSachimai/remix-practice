import { describe, expect, test } from "vitest";
import { BookEntity } from "./entity";
import type { Book } from "./types";

describe("BookEntity()", () => {
  test("新規追加", () => {
    const mockProps: Book = {
      title: "本の題名",
      description: "概要",
      author: [],
      category: [],
    };

    const book = BookEntity.create(mockProps);
    expect(book.freeze().title).toEqual("本の題名");
  });
});
