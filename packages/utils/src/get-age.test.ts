import { describe, expect, test } from "vitest";
import { getCurrentAge } from "./get-age";

describe("getAge()", () => {
  test("未来の日付が入力された場合はエラーを返す", () => {
    const day = new Date(2100, 11, 24);
    expect(() => getCurrentAge(day)).toThrowError("生年月日が不正です");
  });
});
