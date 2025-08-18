import { describe, expect, test } from "vitest";
import { PasswordEntity } from "./password";

describe("checkPassword() test", () => {
  const INPUT_PASSWORD = "S@mpleP@ssW0rd";
  const passwordHash = PasswordEntity.passwordHash(INPUT_PASSWORD);

  test("ハッシュ化されたパスワードは入力されたパスワードとは異なる", async () => {
    expect(passwordHash).not.toEqual(INPUT_PASSWORD);
  });

  test("正しいパスワードをハッシュ化したパスワードでコンパイルするとtrue", async () => {
    const checked = await PasswordEntity.checkPassword(
      INPUT_PASSWORD,
      passwordHash,
    );
    expect(checked).toBeTruthy();
  });

  test("間違ったパスワードをハッシュ化したパスワードでコンパイルするとfalse", async () => {
    const checked = await PasswordEntity.checkPassword(
      "incorrect_password",
      passwordHash,
    );
    expect(checked).toBeFalsy();
  });
});

describe("validation() test", () => {
  test("validation(): パスワードが空白だとエラーとする", () => {
    const emptyPattern = ["", "    ", "　　　　"];
    emptyPattern.forEach((emptyPattern) => {
      expect(() => PasswordEntity.validation(emptyPattern)).toThrowError(
        "パスワードは必須です",
      );
    });
  });

  test("validation(): パスワードが8文字未満だとエラーとする", () => {
    expect(() => PasswordEntity.validation("S@mpleP")).toThrowError(
      "パスワードは8文字以上である必要があります",
    );
  });

  test("validation(): 予測されやすいパスワードだとエラーとする", () => {
    expect(() => PasswordEntity.validation("password")).toThrowError(
      "予測されやすいパスワードです",
    );
  });
});
