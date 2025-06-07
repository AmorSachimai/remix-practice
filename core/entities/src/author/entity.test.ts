import { describe, expect, it } from "vitest";
import { AuthorEntity } from "./entity";
import type { Author } from "./types";

const mockAuthor: Author = {
  name: "山田太郎",
  kana: "ヤマダタロウ",
  nickname: "たろう",
  description: "著者の説明",
  imageUrl: "http://example.com/image.png",
  twitterUrl: "https://twitter.com/example",
};

describe("AuthorEntity", () => {
  it("有効なAuthorEntityを作成する必要があります", () => {
    const entity = AuthorEntity.create(mockAuthor);
    const author = entity.freeze();

    expect(entity).toBeInstanceOf(AuthorEntity);
    expect(author.name).toBe("山田太郎");
    expect(author.kana).toBe("ヤマダタロウ");
    expect(author.nickname).toBe("たろう");
    expect(author.description).toBe("著者の説明");
    expect(author.imageUrl).toBe("http://example.com/image.png");
    expect(author.twitterUrl).toBe("https://twitter.com/example");
  });

  it("各プロパティを正規化する", () => {
    const mockAuthor2: Author = {
      name: "　山田太郎　",
      kana: "　ヤマダタロウ　",
      nickname: "　たろう　",
      description: "　説明　",
      imageUrl: "　http://example.com/image.png　",
      twitterUrl: "　https://twitter.com/example　",
    };
    const entity = AuthorEntity.create(mockAuthor2);
    const author = entity.freeze();

    expect(entity).toBeInstanceOf(AuthorEntity);
    expect(author.name).toBe("山田太郎");
    expect(author.kana).toBe("ヤマダタロウ");
    expect(author.nickname).toBe("たろう");
    expect(author.description).toBe("説明");
    expect(author.imageUrl).toBe("http://example.com/image.png");
    expect(author.twitterUrl).toBe("https://twitter.com/example");
  });

  it("名前が空の場合はエラーを投げる", () => {
    const author = { ...mockAuthor, name: "   " };
    expect(() => AuthorEntity.create(author)).toThrow(
      "Author name is required",
    );
  });

  it("カナが空の場合はエラーを投げる", () => {
    const author = { ...mockAuthor, kana: "   " };
    expect(() => AuthorEntity.create(author)).toThrow(
      "Author kana is required",
    );
  });

  it("仮名がカタカナでない場合エラーを投げる", () => {
    const author = { ...mockAuthor, kana: "やまだたろう" };
    expect(() => AuthorEntity.create(author)).toThrow(
      "Author kana must be in Katakana",
    );
  });

  it("オプショナルフィールドを未定義にできるようにすべきである", () => {
    const mockAuthor3: Author = {
      name: "山田太郎",
      kana: "ヤマダタロウ",
      nickname: undefined,
      description: undefined,
      imageUrl: undefined,
      twitterUrl: undefined,
    };
    const entity = AuthorEntity.create(mockAuthor3);
    const author = entity.freeze();

    expect(author.nickname).toBeUndefined();
    expect(author.description).toBeUndefined();
    expect(author.imageUrl).toBeUndefined();
    expect(author.twitterUrl).toBeUndefined();
  });
});
