import { describe, expect, it } from "vitest";
import { AuthorEntity } from "./main";
import type { Author } from "./types";

const MOCK_AUTHOR: Author = {
  name: "山田太郎",
  kana: "ヤマダタロウ",
  nickname: "たろう",
  description: "著者の説明",
  imageUrl: "http://example.com/image.png",
  twitterUrl: "https://twitter.com/example",
};

describe("create()", () => {
  it("AuthorEntityを作成する必要があります", () => {
    const entity = AuthorEntity.create(MOCK_AUTHOR);
    expect(entity).toBeInstanceOf(AuthorEntity);
  });
});

describe("validation()", () => {
  it("各プロパティを正規化・トリムする", () => {
    const MOCK_AUTHOR_2: Author = {
      name: "　山田太郎　",
      kana: "　ヤマダタロウ　",
      nickname: "　たろう　",
      description: "　説明　",
      imageUrl: "　http://example.com/image.png　",
      twitterUrl: "　https://twitter.com/example　",
    };
    const author = AuthorEntity.validation(MOCK_AUTHOR_2);

    expect(author.name).toBe("山田太郎");
    expect(author.kana).toBe("ヤマダタロウ");
    expect(author.nickname).toBe("たろう");
    expect(author.description).toBe("説明");
    expect(author.imageUrl).toBe("http://example.com/image.png");
    expect(author.twitterUrl).toBe("https://twitter.com/example");
  });

  it("undefinableなプロパティを有効", () => {
    const MOCK_AUTHOR_3: Author = {
      name: "山田太郎",
      kana: "ヤマダタロウ",
      nickname: undefined,
      description: undefined,
      imageUrl: undefined,
      twitterUrl: undefined,
    };
    const author = AuthorEntity.validation(MOCK_AUTHOR_3);

    expect(author.nickname).toBeUndefined();
    expect(author.description).toBeUndefined();
    expect(author.imageUrl).toBeUndefined();
    expect(author.twitterUrl).toBeUndefined();
  });

  it("名前が空の場合はエラーを投げる", () => {
    const author = { ...MOCK_AUTHOR, name: "   " };
    expect(() => AuthorEntity.validation(author)).toThrowError(
      "著者名は必須です",
    );
  });

  it("カナが空の場合はエラーを投げる", () => {
    const author = { ...MOCK_AUTHOR, kana: "   " };
    expect(() => AuthorEntity.validation(author)).toThrowError(
      "著者名の読み仮名は必須です",
    );
  });

  it("仮名がカタカナでない場合エラーを投げる", () => {
    const author = { ...MOCK_AUTHOR, kana: "やまだたろう" };
    expect(() => AuthorEntity.validation(author)).toThrowError(
      "著者名の読み仮名はカタカナ表記です",
    );
  });
});
