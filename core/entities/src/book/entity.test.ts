import { describe, expect, test } from "vitest";
import { BookEntity } from "./entity";
import type { Book } from "./types";

describe("BookEntity()", () => {
  test("正常系: 新規追加", () => {
    const mockProps: Book = {
      isbn: "９78-4-04-８93065-９",
      title: "Clean Architecture : 達人に学ぶソフトウェアの構造と設計",
      description: "ｶﾞｲﾖｳﾗﾝ",
      authors: [],
      categories: [],
    };

    const book = BookEntity.create(mockProps);
    expect(book.freeze().isbn).toEqual("9784048930659");
    expect(book.freeze().description).toEqual("ガイヨウラン");
  });
  test("異常系: 新規追加", () => {
    const mockProps: Book = {
      isbn: "not an isbn",
      title: "存在しない本の題名",
      description: "ｶﾞｲﾖｳﾗﾝ",
      authors: [],
      categories: [],
    };

    expect(() => {
      BookEntity.create(mockProps);
    }).toThrowError("Invalid ISBN");
  });
});
