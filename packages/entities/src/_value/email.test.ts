import { describe, expect, test } from "vitest";
import { EmailEntity } from "./email";

describe("validation() test", () => {
  test("メールアドレスが空白だとエラーとする", () => {
    const emptyPatterns = ["", "    ", "　　　　"];
    emptyPatterns.forEach((emptyPattern) => {
      expect(() => EmailEntity.validation(emptyPattern)).toThrowError(
        "メールアドレスは必須です",
      );
    });
  });

  test("validation(): メールアドレスが不正な形式だとエラーとする", () => {
    const INVALID_PATTERNS = [
      "sample",
      "sample",
      "sample@sample@com",
      "sample@sample,com",
      "s***e@sample,com",
      "1234@123.12",
    ];
    INVALID_PATTERNS.forEach((invalidPattern) => {
      expect(() => EmailEntity.validation(invalidPattern)).toThrowError(
        "メールアドレスの形式が正しくありません",
      );
    });
  });
});
