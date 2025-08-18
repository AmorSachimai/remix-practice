import { describe, expect, test } from "vitest";
import { Role } from "../constant";
import { UserEntity } from "./main";
import type { InputUser } from "./types";

const MOCK_INPUT_USER: InputUser = {
  name: "sampleUser",
  email: "sample@sample.com",
  password: "samplePassword",
  role: Role.Administrator,
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
});
