import { describe, expect, it } from "vitest";
import { CategoryEntity } from "./entity";
import type { Category } from "./types";

describe("CategoryEntity", () => {
  it("カテゴリを正常に作成できる", () => {
    const mockCategory: Category = { name: "テストカテゴリ", label: "ラベル" };
    const entity = CategoryEntity.create(mockCategory);
    expect(entity).toBeInstanceOf(CategoryEntity);

    const category = entity.freeze();
    expect(category.name).toBe("テストカテゴリ");
    expect(category.label).toBe("ラベル");
    expect(entity.id).toBeDefined();
  });

  it("カテゴリ名が空の場合はエラーになる", () => {
    const category: Category = { name: "   ", label: "ラベル" };
    expect(() => CategoryEntity.create(category)).toThrow(
      "Category name is required",
    );
  });

  it("ラベルが未定義の場合でも作成できる", () => {
    const mockCategory: Category = { name: "カテゴリ" };
    const entity = CategoryEntity.create(mockCategory);
    expect(entity).toBeInstanceOf(CategoryEntity);

    const category = entity.freeze();
    expect(category.name).toBe("カテゴリ");
    expect(category.label).toBeUndefined();
  });

  it("カテゴリ名とラベルは正規化・トリムされる", () => {
    const mockCategory: Category = { name: "  カテゴリ　", label: "　ラベル " };
    const entity = CategoryEntity.create(mockCategory);
    expect(entity).toBeInstanceOf(CategoryEntity);

    const category = entity.freeze();
    expect(category.name).toBe("カテゴリ");
    expect(category.label).toBe("ラベル");
  });
});
