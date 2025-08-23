import { describe, expect, test } from "vitest";
import { Role } from "../constant";
import {
  TEST_ADMINISTRATOR,
  TEST_ADMINISTRATOR_PROPS,
  TEST_LIBRARIAN,
  TEST_LIBRARIAN_PROPS,
  TEST_MEMBER,
  TEST_MEMBER_PROPS,
} from "./__fixture__";
import { UserEntity } from "./main";
import type { User } from "./types";

const INPUT: User = {
  name: "sample",
  email: "sample@sample.com",
  password: "samplePassword",
  role: Role.Member,
};

describe("create()", () => {
  test("入力が正常ならばUserEntityで返す", () => {
    const user = UserEntity.create(INPUT);
    expect(user).toBeInstanceOf(UserEntity);
  });
});

describe("validation()", () => {
  const emptyPattern = ["", "    ", "　　　　"];
  test("ユーザーネームが空白だとエラーとする", () => {
    emptyPattern.forEach((emptyPattern) => {
      expect(() =>
        UserEntity.validation({
          ...INPUT,
          name: emptyPattern,
        }),
      ).toThrowError("ユーザー名は必須です");
    });
  });
});

describe("canUpdate()", () => {
  describe("actor: 管理者", () => {
    const ACTOR = new UserEntity({
      id: "update-test",
      props: TEST_ADMINISTRATOR_PROPS,
    });

    test("自分の編集: OK", () => {
      expect(ACTOR.canUpdate(ACTOR)).toBeTruthy();
    });
    test("他の管理者の編集: OK", () => {
      expect(ACTOR.canUpdate(TEST_ADMINISTRATOR)).toBeTruthy();
    });
    test("司書の編集: OK", () => {
      expect(ACTOR.canUpdate(TEST_LIBRARIAN)).toBeTruthy();
    });
    test("会員の編集: OK", () => {
      expect(ACTOR.canUpdate(TEST_MEMBER)).toBeTruthy();
    });
  });

  describe("actor: 司書", () => {
    const ACTOR = new UserEntity({
      id: "update-test",
      props: TEST_LIBRARIAN_PROPS,
    });

    test("自分の編集: OK", () => {
      expect(ACTOR.canUpdate(ACTOR)).toBeTruthy();
    });
    test("管理者の編集: NG", () => {
      expect(ACTOR.canUpdate(TEST_ADMINISTRATOR)).toBeFalsy();
    });
    test("他の司書の編集: OK", () => {
      expect(ACTOR.canUpdate(TEST_LIBRARIAN)).toBeTruthy();
    });
    test("会員の編集: OK", () => {
      expect(ACTOR.canUpdate(TEST_MEMBER)).toBeTruthy();
    });
  });

  describe("actor: 会員", () => {
    const ACTOR = new UserEntity({
      id: "update-test",
      props: TEST_MEMBER_PROPS,
    });

    test("自分の編集: OK", () => {
      expect(ACTOR.canUpdate(ACTOR)).toBeTruthy();
    });
    test("管理者の編集: NG", () => {
      expect(ACTOR.canUpdate(TEST_ADMINISTRATOR)).toBeFalsy();
    });
    test("他の司書の編集: NG", () => {
      expect(ACTOR.canUpdate(TEST_LIBRARIAN)).toBeFalsy();
    });
    test("会員の編集: NG", () => {
      expect(ACTOR.canUpdate(TEST_MEMBER)).toBeFalsy();
    });
  });
});

describe("update()", () => {
  test("名前の変更: 正常系確認", () => {
    const user = new UserEntity({
      id: "update-test",
      props: TEST_ADMINISTRATOR_PROPS,
      createdAt: new Date(2025, 1, 1),
      updatedAt: new Date(2025, 1, 1),
    });
    const before = user.freeze();

    // 更新実行
    const updated = user.update({ name: "管理者" });
    const after = updated.freeze();

    expect(after.name).toEqual("管理者");

    expect(after.email).toEqual(before.email);
    expect(after.password).toEqual(before.password);
    expect(after.role).toEqual(before.role);
  });

  test("Emailの変更: 正常系確認", () => {
    const user = new UserEntity({
      id: "update-test",
      props: TEST_ADMINISTRATOR_PROPS,
      createdAt: new Date(2025, 1, 1),
      updatedAt: new Date(2025, 1, 1),
    });
    const before = user.freeze();

    // 更新実行
    const updated = user.update({ email: "sample.after@sample.com" });
    const after = updated.freeze();

    expect(after.email).toEqual("sample.after@sample.com");

    // その他のプロパティは変わっていないことを確認
    expect(after.name).toEqual(before.name);
    expect(after.password).toEqual(before.password);
    expect(after.role).toEqual(before.role);
  });
});
