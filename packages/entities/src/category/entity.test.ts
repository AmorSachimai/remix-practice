import { describe, expect, it } from "vitest";
import { CategoryEntity } from "./entity";
import type { Category } from "./types";

describe("create", () => {
  it("カテゴリを正常に作成できる", () => {
    const mockCategory: Category = { name: "テストカテゴリ", label: "ラベル" };
    const entity = CategoryEntity.create(mockCategory);
    expect(entity).toBeInstanceOf(CategoryEntity);
  });

  it("ラベルが未定義の場合でも作成できる", () => {
    const entity = CategoryEntity.create({
      name: "カテゴリ",
      label: undefined,
    });
    expect(entity).toBeInstanceOf(CategoryEntity);

    const category = entity.freeze();
    expect(category.name).toBe("カテゴリ");
    expect(category.label).toBeUndefined();
  });
});

describe("validation", () => {
  it("カテゴリ名が空の場合はエラーになる", () => {
    expect(() =>
      CategoryEntity.validation({ name: "   ", label: "ラベル" }),
    ).toThrow("Category name is required");
  });

  it("カテゴリ名とラベルは正規化・トリムされる", () => {
    const valid = CategoryEntity.validation({
      name: "  カテゴリ　",
      label: "　ラベル ",
    });
    expect(valid.name).toBe("カテゴリ");
    expect(valid.label).toBe("ラベル");
  });
});
