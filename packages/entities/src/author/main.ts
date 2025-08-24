import { v4 as uuidv4 } from "uuid";
import { Entity, type Repository } from "../_base";
import { StringEntity } from "../_value";
import type { Author } from "./types";

const KANA_REGEX = /^[ァ-ンー　]+$/;

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
    const name = StringEntity.validation(author.name);
    if (name === null) {
      throw new Error("著者名は必須です");
    }

    const kana = StringEntity.validation(author.kana);
    if (kana === null) {
      throw new Error("著者名の読み仮名は必須です");
    }

    const isKana = KANA_REGEX.test(kana);
    if (!isKana) {
      throw new Error("著者名の読み仮名はカタカナ表記です");
    }

    return {
      name,
      kana,
      nickname: StringEntity.validation(author.nickname) ?? undefined,
      description: StringEntity.validation(author.description) ?? undefined,
    };
  }

  /**
   * ### 著者情報の更新を行う
   * @param author
   */
  update(author: Author): void {
    const validAuthor = AuthorEntity.validation(author);
    this.updateProps = validAuthor;
  }
}

export interface AuthorRepository extends Repository<Author> {}
