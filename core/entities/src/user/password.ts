import bcrypt from "bcrypt";

const PASSWORD_MIN_LENGTH = 8 as const;
const SALT_ROUNDS = 10 as const;

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
