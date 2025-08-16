import { v4 as uuidv4 } from "uuid";
import { Entity } from "../_base/entity";
import type { Repository } from "../_base/repository";
import type { Author } from "./types";

/**
 * ### 著者に関するロジックをまとめたクラス
 */
export class AuthorEntity extends Entity<Author> {
  /**
   * ### 著者の新規作成時に利用
   * @param author - Author情報
   * @returns AuthorEntity
   * @throws バリデーションエラーをスローします
   */
  static create(author: Author): AuthorEntity {
    const id = uuidv4();
    const validAuthor = AuthorEntity.validation(author);
    return new AuthorEntity({ id, props: validAuthor });
  }

  /**
   * ### 著者情報のバリデーションを行う
   * @param author - Author情報
   * @returns Author
   * @throws バリデーションエラーをスローします
   */
  static validation(author: Author): Author {
    const name = author.name.normalize("NFKC").trim();
    if (name === "") {
      throw new Error("著者名は必須です");
    }

    const kana = author.kana.normalize("NFKC").trim();
    if (kana === "") {
      throw new Error("著者名の読み仮名は必須です");
    }

    const isKana = kana.match(/^[ァ-ンー　]+$/);
    if (!isKana) {
      throw new Error("著者名の読み仮名はカタカナ表記です");
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

export interface AuthorRepository extends Repository<Author> {}
