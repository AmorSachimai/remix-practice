import { describe, expect, test } from "vitest";
import type { InputUser } from "./types";
import { UserEntity } from "./user";

const MOCK_INPUT_USER: InputUser = {
  name: "sampleUser",
  email: "sample@sample.com",
  password: "samplePassword",
};

describe("UserEntity() test", () => {
  test("create(): 入力が正常ならばUserEntityで返す", () => {
    const user = UserEntity.create(MOCK_INPUT_USER);
    expect(user).toBeInstanceOf(UserEntity);

    const userObject = user.freeze();
    expect(Object.isFrozen(userObject)).toBeTruthy();
    expect(userObject.name).toEqual(MOCK_INPUT_USER.name);
    expect(userObject.email).toEqual(MOCK_INPUT_USER.email);
  });

  test("checkPassword(): ハッシュ化されたパスワードは正常に使える", async () => {
    const user = UserEntity.create(MOCK_INPUT_USER);
    const userObject = user.freeze();
    const passwordHash = userObject.passwordHash;

    // ハッシュ化されているので入力されたパスワードとは異なる
    expect(passwordHash).not.toEqual(MOCK_INPUT_USER.password);

    // 登録したパスワードをハッシュ化したパスワードでコンパイル
    expect(
      await UserEntity.checkPassword(MOCK_INPUT_USER.password, passwordHash),
    ).toBeTruthy();

    // 間違ったパスワードをハッシュ化したパスワードでコンパイル
    expect(
      await UserEntity.checkPassword("incorrect_password", passwordHash),
    ).toBeFalsy();
  });

  test("validation(): ユーザーネームが空白だとエラーとする", () => {
    const emptyPattern = ["", "    ", "　　　　"];
    emptyPattern.forEach((emptyPattern) => {
      expect(() =>
        UserEntity.validation({
          ...MOCK_INPUT_USER,
          name: emptyPattern,
        }),
      ).toThrowError("ユーザー名は必須です");
    });
  });

  test("validation(): パスワードが空白だとエラーとする", () => {
    const emptyPattern = ["", "    ", "　　　　"];
    emptyPattern.forEach((emptyPattern) => {
      expect(() =>
        UserEntity.validation({
          ...MOCK_INPUT_USER,
          password: emptyPattern,
        }),
      ).toThrowError("パスワードは必須です");
    });
  });

  test("validation(): パスワードが8文字未満だとエラーとする", () => {
    expect(() =>
      UserEntity.validation({
        ...MOCK_INPUT_USER,
        password: "passwor",
      }),
    ).toThrowError("パスワードは8文字以上である必要があります");
  });

  test("validation(): メールアドレスが空白だとエラーとする", () => {
    const emptyPatterns = ["", "    ", "　　　　"];
    emptyPatterns.forEach((emptyPattern) => {
      expect(() =>
        UserEntity.validation({
          ...MOCK_INPUT_USER,
          email: emptyPattern,
        }),
      ).toThrowError("メールアドレスは必須です");
    });
  });

  test("validation(): メールアドレスが不正な形式だとエラーとする", () => {
    const incorrectPatterns = [
      "sample",
      "sample",
      "sample@sample@com",
      "sample@sample,com",
      "s***e@sample,com",
      "1234@123.12",
    ];
    incorrectPatterns.forEach((incorrectPattern) => {
      expect(() =>
        UserEntity.validation({
          ...MOCK_INPUT_USER,
          email: incorrectPattern,
        }),
      ).toThrowError("メールアドレスの形式が正しくありません");
    });
  });
});
