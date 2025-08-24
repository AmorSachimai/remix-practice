import bcrypt from "bcrypt";
import { StringEntity } from "../_value";

const PASSWORD_MIN_LENGTH = 8 as const;
const SALT_ROUNDS = 10 as const;
/**
 * ### 予測されやすいパスワード
 * 辞書形式でやるなら別ファイルに分けていいかも
 */
const PREDICTABLE_PASSWORD = new Set<string>([
  "12345678",
  "00000000", // 同じ文字列が繰り返し入力されているかの検証をしてもいいかも
  "11111111",
  "password",
  "p@ssw0rd",
  "1qaz2wsx",
  "qwertyui",
  "asdfghjk",
  "1q2w3e4r",
  "abcd1234",
]);

export class PasswordEntity {
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
    const normalizedPassword = StringEntity.validation(password);
    if (normalizedPassword === null) {
      throw new Error("パスワードは必須です");
    }
    if (normalizedPassword.length < PASSWORD_MIN_LENGTH) {
      throw new Error(
        `パスワードは${PASSWORD_MIN_LENGTH}文字以上である必要があります`,
      );
    }
    if (PREDICTABLE_PASSWORD.has(normalizedPassword)) {
      throw new Error("予測されやすいパスワードです");
    }
    return normalizedPassword;
  }
}
