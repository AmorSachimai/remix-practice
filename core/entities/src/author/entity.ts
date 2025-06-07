import { v4 as uuidv4 } from "uuid";
import { BaseEntity } from "../base-entity";
import type { Author } from "./types";

/**
 * ### 著者に関するロジックをまとめたクラス
 * BookEntityからのみ利用される
 */
export class AuthorEntity extends BaseEntity<Author> {
  static create(author: Author): AuthorEntity {
    const id = uuidv4();
    const validAuthor = AuthorEntity.validation(author);
    return new AuthorEntity({ id, props: validAuthor });
  }

  static validation(author: Author): Author {
    const name = author.name.normalize("NFKC").trim();
    if (name === "") {
      throw new Error("Author name is required");
    }

    const kana = author.kana.normalize("NFKC").trim();
    if (kana === "") {
      throw new Error("Author kana is required");
    }
    const isKana = kana.match(/^[ァ-ンー　]+$/);
    if (!isKana) {
      throw new Error("Author kana must be in Katakana");
    }
    return {
      ...author,
      name,
      kana,
      nickname: author.nickname?.normalize("NFKC").trim(),
      description: author.description?.normalize("NFKC").trim(),
      imageUrl: author.imageUrl?.normalize("NFKC").trim(),
      twitterUrl: author.twitterUrl?.normalize("NFKC").trim(),
    };
  }
}
