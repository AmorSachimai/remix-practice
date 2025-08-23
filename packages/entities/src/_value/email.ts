const EMAIL_REGEX =
  /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

export class EmailEntity {
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
