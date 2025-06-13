import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { BaseEntity } from "../base-entity";
import type { BaseRepository } from "../base-repository";
import type { InputUser, User } from "./types";

const PASSWORD_MIN_LENGTH = 8 as const;
const SALT_ROUNDS = 10 as const;
const EMAIL_REGEX =
  /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

export interface UserRepository extends BaseRepository<User> {
  findByEmail(email: string): Promise<UserEntity | undefined>;
  findByName(name: string): Promise<UserEntity | undefined>;
}

/**
 * UserEntityは、ユーザー情報を管理するエンティティです。
 * ユーザーの作成、パスワードのハッシュ化、検証などの機能を提供します。
 */
export class UserEntity extends BaseEntity<User> {
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

class PasswordEntity {
  constructor(public password: string) {}

  /**
   * パスワードをハッシュ化します。
   * @param password ユーザーが入力したパスワード
   * @returns ハッシュ化されたパスワード
   */
  static passwordHash(password: string): string {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    return bcrypt.hashSync(password, salt);
  }

  /**
   * パスワードのハッシュを検証します。
   * @param password ユーザーが入力したパスワード
   * @param hash データベースに保存されているハッシュ化されたパスワード
   * @returns パスワードが一致する場合はtrue、一致しない場合はfalse
   */
  static async checkPassword(password: string, hash: string): Promise<boolean> {
    const validPassword = PasswordEntity.validation(password);
    return await bcrypt.compare(validPassword, hash);
  }

  /**
   * パスワードの検証を行います。
   * @param password ユーザーが入力したパスワード
   * @returns 検証済みのパスワード
   * @throws パスワードが空または短い場合はエラーをスローします
   */
  static validation(password: string): string {
    const normalizedPassword = password.normalize("NFKC").trim();
    if (normalizedPassword === "") {
      throw new Error("パスワードは必須です");
    }
    if (normalizedPassword.length < PASSWORD_MIN_LENGTH) {
      throw new Error(
        `パスワードは${PASSWORD_MIN_LENGTH}文字以上である必要があります`,
      );
    }
    return normalizedPassword;
  }
}

class EmailEntity {
  constructor(public email: string) {}

  /**
   * パスワードの検証を行います。
   * @param email ユーザーが入力したemail
   * @returns 検証済みのemail
   * @throws emailが空または不正な形式の場合はエラーをスローします
   */
  static validation(email: string): string {
    const normalizedEmail = email.normalize("NFKC").trim();
    if (normalizedEmail === "") {
      throw new Error("メールアドレスは必須です");
    }
    if (!EMAIL_REGEX.test(normalizedEmail)) {
      throw new Error("メールアドレスの形式が正しくありません");
    }
    return normalizedEmail;
  }
}
