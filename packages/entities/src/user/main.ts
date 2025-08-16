import { v4 as uuidv4 } from "uuid";
import { Entity } from "../_base/entity";
import type { Repository } from "../_base/repository";
import { EmailEntity } from "./email";
import { PasswordEntity } from "./password";
import type { InputUser, User } from "./types";

export interface UserRepository extends Repository<UserEntity> {
  findByEmail(email: string): Promise<UserEntity | undefined>;
  findByName(name: string): Promise<UserEntity | undefined>;
}

/**
 * UserEntityは、ユーザー情報を管理するエンティティです。
 * ユーザーの作成、パスワードのハッシュ化、検証などの機能を提供します。
 */
export class UserEntity extends Entity<User> {
  /**
   * Userの新規作成時に利用
   * @param inputUser ユーザー作成に必要な情報を含むオブジェクト
   * @returns 新規ユーザーエンティティ
   * @throws ユーザー情報の検証に失敗した場合はエラーをスローします
   */
  static create(user: InputUser): UserEntity {
    const validUser = UserEntity.validation({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    const passwordHash = PasswordEntity.passwordHash(validUser.password);
    const id = uuidv4();
    return new UserEntity({
      id,
      props: {
        name: validUser.name,
        email: validUser.email,
        passwordHash,
      },
    });
  }

  /**
   * パスワードのハッシュを検証します。
   * @param password ユーザーが入力したパスワード
   * @param hash データベースに保存されているハッシュ化されたパスワード
   * @returns パスワードが一致する場合はtrue、一致しない場合はfalse
   */
  static async checkPassword(password: string, hash: string): Promise<boolean> {
    return await PasswordEntity.checkPassword(password, hash);
  }

  /**
   * ユーザー情報の検証を行います。
   * @param user ユーザーが入力したユーザー情報
   * @returns 検証済みのユーザー情報
   * @throws エラーが発生した場合は例外をスローします
   */
  static validation(user: InputUser): InputUser {
    const name = user.name.normalize("NFKC").trim();
    if (name === "") {
      throw new Error("ユーザー名は必須です");
    }
    const password = PasswordEntity.validation(user.password);
    const email = EmailEntity.validation(user.email);
    return {
      name,
      email,
      password,
    };
  }
}
