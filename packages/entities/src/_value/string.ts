/**
 * ## 文字列のルールを集約
 */
export class StringEntity {
  private constructor(public input: string) {}

  /**
   * ### 文字列の検証を行います。
   * @param input ユーザーが入力したemail
   */
  static validation(input: string | null | undefined): string | null {
    if (input === null || input === undefined) {
      return null;
    }

    const normalized = input.normalize("NFKC").trim();
    if (normalized === "") {
      return null;
    }

    return normalized;
  }
}
